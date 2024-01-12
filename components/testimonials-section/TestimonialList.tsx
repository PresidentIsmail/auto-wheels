"use client";

import { FC, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

import { testimonialData } from "@/data/testimonialData";
// import { useViewportSize } from "@/hooks/use-viewport-size";
import { useViewportSize } from "@mantine/hooks";

import TestimonialCard from "./TestimonialCard";

type Alignment = {
  xDirection: 1 | -1;
  yDirection: 1 | -1;
  scrollWidth: number;
  scrollHeight: number;
};

const LARGE_SCREEN_WIDTH = 1024;
const firsthalf = testimonialData.slice(
  0,
  Math.floor(testimonialData.length / 2),
);
const secondhalf = testimonialData.slice(
  Math.floor(testimonialData.length / 2),
);

const TestimonialList: FC = () => {
  const { width: screenWidth } = useViewportSize();
  const firstSectionRef = useRef<HTMLElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);
  const [animationProps, setAnimationProps] = useState<Alignment>({
    xDirection: -1,
    yDirection: -1,
    scrollWidth: 0,
    scrollHeight: 0,
  });

  const sectionVariants: Variants = {
    initial: ({
      xDirection,
      yDirection,
      scrollWidth,
      scrollHeight,
    }: Alignment) => ({
      x:
        screenWidth < LARGE_SCREEN_WIDTH
          ? `${xDirection === 1 ? -scrollWidth : 0}px`
          : "0px",
      y:
        screenWidth >= LARGE_SCREEN_WIDTH
          ? `${yDirection === 1 ? -scrollHeight : 0}px`
          : "0px",
    }),
    animate: ({
      xDirection,
      yDirection,
      scrollWidth,
      scrollHeight,
    }: Alignment) => ({
      x:
        screenWidth < LARGE_SCREEN_WIDTH
          ? `${xDirection * scrollWidth}px`
          : "0px",
      y:
        screenWidth >= LARGE_SCREEN_WIDTH
          ? `${yDirection * scrollHeight}px`
          : "0px",
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    }),
  };

  useEffect(() => {
    const firstSection = firstSectionRef.current;

    if (firstSection) {
      const { scrollWidth, scrollHeight } = firstSection;
      setAnimationProps((prev) => ({ ...prev, scrollWidth, scrollHeight }));
    }
  }, []);

  return (
    <article className="right-0 flex flex-row lg:absolute lg:w-[50%] lg:flex-col lg:gap-x-8 lg:overflow-hidden xl:me-0">
      {/* --------------------- */}
      <motion.section
        ref={firstSectionRef}
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        custom={animationProps}
        className="flex h-full flex-col gap-y-4 lg:flex-row lg:gap-x-8 "
      >
        {/* Testimonials First Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {/* adding space using an invisible div */}
          <div className="h-full lg:hidden lg:w-full"></div>
          {firsthalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* adding space using an invisible div */}
          <div className="hidden h-full lg:block lg:w-full"></div>
        </div>
        {/* Testimonials Second Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {secondhalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* adding space using an invisible div */}
          <div className="h-full lg:hidden lg:w-full"></div>
        </div>
      </motion.section>
      {/* --------------------- */}

      {/* Duplicate for infinite animation purposes */}
      {/* --------------------- */}
      <motion.section
        ref={secondSectionRef}
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        custom={animationProps}
        className="flex h-full flex-col gap-y-4 lg:flex-row lg:gap-x-8"
        aria-hidden
      >
        {/* Testimonials First Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {/* adding space using an invisible div */}
          <div className="h-full lg:hidden lg:w-full"></div>
          {firsthalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* Testimonials Second Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {secondhalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* adding space using an invisible div */}
        <div className="h-full lg:w-full"></div>
      </motion.section>
      {/* --------------------- */}
    </article>
  );
};

export default TestimonialList;
