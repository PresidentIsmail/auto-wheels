"use client";

import { FC, useEffect, useRef, useState } from "react";
import {
  motion,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { testimonialData } from "@/data/testimonialData";
// import { useViewportSize } from "@/hooks/use-viewport-size";
import { useViewportSize } from "@mantine/hooks";

import TestimonialCard from "./TestimonialCard";
import { generateId } from "@/lib/helper";

const LARGE_SCREEN_WIDTH = 1024;
const firsthalf = testimonialData.slice(
  0,
  Math.floor(testimonialData.length / 2),
);
const secondhalf = testimonialData.slice(
  Math.floor(testimonialData.length / 2),
);

type SectionVariantsParams = AnimationDirection & {
  screenWidth: number;
  LARGE_SCREEN_WIDTH: number;
};

const sectionVariants = ({
  xDirection,
  yDirection,
  screenWidth,
  LARGE_SCREEN_WIDTH,
}: SectionVariantsParams): Variants => ({
  initial: {
    x:
      screenWidth < LARGE_SCREEN_WIDTH
        ? `${xDirection === "scroll-right" ? -100 : 0}%`
        : "0px",
    y:
      screenWidth >= LARGE_SCREEN_WIDTH
        ? `${yDirection === "scroll-down" ? -100 : 0}%`
        : "0px",
  },
  animate: {
    x:
      screenWidth < LARGE_SCREEN_WIDTH
        ? `${xDirection === "scroll-right" ? -0 : -100}%`
        : "0px",
    y:
      screenWidth >= LARGE_SCREEN_WIDTH
        ? `${yDirection === "scroll-down" ? -0 : -100}%`
        : "0px",
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

type AnimationDirection = {
  xDirection: "scroll-left" | "scroll-right"; // -1 for left, 1 for right
  yDirection: "scroll-up" | "scroll-down"; // -1 for up, 1 for down
};

const TestimonialList: FC = () => {
  const { width: screenWidth } = useViewportSize();
  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection>({
      xDirection: "scroll-right",
      yDirection: "scroll-down",
    });

 

  return (
    <article className="right-0 flex flex-row lg:absolute lg:block lg:w-[50%] lg:gap-x-8 lg:overflow-hidden xl:me-0">
      {/* --------------------- */}
      <motion.section
        key={generateId()}
        variants={sectionVariants({
          ...animationDirection,
          screenWidth,
          LARGE_SCREEN_WIDTH,
        })}
        initial="initial"
        animate="animate"
        custom={animationDirection}
        className=" flex h-max flex-col gap-y-4 lg:flex-row lg:gap-x-8"
      >
        {/* Testimonials First Half */}
        <div className="flex flex-row gap-8 pe-8 lg:flex-col lg:gap-12 lg:pb-8 lg:pe-0">
          {firsthalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* Testimonials Second Half */}
        <div className="flex flex-row gap-8 pe-8 lg:flex-col lg:gap-12 lg:pb-8 lg:pe-0">
          {secondhalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </motion.section>
      {/* --------------------- */}

      {/* Duplicate for infinite animation purposes */}
      {/* --------------------- */}
      <motion.section
        key={generateId()}
        variants={sectionVariants({
          ...animationDirection,
          screenWidth,
          LARGE_SCREEN_WIDTH,
        })}
        initial="initial"
        animate="animate"
        custom={animationDirection}
        className="flex h-max flex-col gap-y-4 lg:flex-row lg:gap-x-8"
        aria-hidden
      >
        {/* Testimonials First Half */}
        <div className="flex flex-row gap-8 pe-8 lg:flex-col lg:gap-12 lg:pb-8 lg:pe-0">
          {firsthalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* Testimonials Second Half */}
        <div className="flex flex-row gap-8 pe-8 lg:flex-col lg:gap-12 lg:pb-8 lg:pe-0">
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
