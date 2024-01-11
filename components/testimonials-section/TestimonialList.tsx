"use client";

import { FC, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

import { testimonialData } from "@/data/testimonialData";
import { useViewportSize } from "@/hooks/use-viewport-size";

import TestimonialCard from "./TestimonialCard";

type Alignment = {
  xDirection: 1 | -1;
  yDirection: 1 | -1;
  scrollWidth: number;
};

const LARGE_SCREEN_WIDTH = 1024;
const firsthalf = testimonialData.slice(
  0,
  Math.floor(testimonialData.length / 2),
);
const secondhalf = testimonialData.slice(
  Math.floor(testimonialData.length / 2),
);

const sectionVariants: Variants = {
  initial: ({ xDirection, yDirection, scrollWidth }: Alignment) => ({
    x: `${xDirection === 1 ? -scrollWidth : 0}px`,
    // y: yDirection > 0 ? "0%" : "-100%",
  }),
  animate: ({ xDirection, yDirection, scrollWidth }: Alignment) => ({
    x: `${xDirection * scrollWidth}px`,
    // y: yDirection > 0 ? "0%" : "100%",
    transition: {
      duration: 20,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "loop",
    },
  }),
};

const TestimonialList: FC = () => {
  //   const { width } = useViewportSize();
  const firstSectionRef = useRef<HTMLElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);
  const [animationProps, setAnimationProps] = useState<Alignment>({
    xDirection: -1,
    yDirection: 1,
    scrollWidth: 0,
  });

  useEffect(() => {
    const firstSection = firstSectionRef.current;
    // const secondSection = secondSectionRef.current;

    if (firstSection) {
      const { scrollWidth } = firstSection;
      setAnimationProps((prev) => ({ ...prev, scrollWidth }));
    }
  }, []);

  return (
    <article className="right-0 flex flex-row lg:absolute lg:w-[50%] lg:flex-row lg:gap-x-8 lg:overflow-hidden xl:me-0">
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
        <div className="flex flex-row gap-8 lg:translate-y-8 lg:flex-col lg:gap-12">
          {/* adding space using an invisible div */}
          <div className="h-full lg:w-full"></div>
          {firsthalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* Testimonials Second Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {secondhalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* adding space using an invisible div */}
          <div className="h-full lg:w-full"></div>
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
        <div className="flex flex-row gap-8 lg:translate-y-8 lg:flex-col lg:gap-12">
          {/* adding space using an invisible div */}
          <div className="h-full lg:w-full"></div>
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
      </motion.section>
      {/* --------------------- */}
    </article>
  );
};

export default TestimonialList;
