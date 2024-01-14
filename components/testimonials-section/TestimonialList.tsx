"use client";

import { FC, useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { testimonialData } from "@/data/testimonialData";
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

// Function to define variants for the testimonial section animations
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
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

// Function to define variants for the article animations
const articleVariants = (
  direction: ArticleDirection,
  screenWidth: number,
): Variants => ({
  initial: {
    x: "0px",
    y: "0px",
  },

  animate: {
    x:
      screenWidth < LARGE_SCREEN_WIDTH
        ? direction.direction === "left"
          ? "-200px"
          : "0px"
        : "0px",
    y:
      screenWidth >= LARGE_SCREEN_WIDTH
        ? direction.direction === "up"
          ? "-200px"
          : "0px"
        : "0px",

    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 1.5,
    },
  },
});

type AnimationDirection = {
  xDirection: "scroll-left" | "scroll-right"; // -1 for left, 1 for right
  yDirection: "scroll-up" | "scroll-down"; // -1 for up, 1 for down
};

type ArticleDirection = {
  direction: "left" | "right" | "up" | "down";
};

const TestimonialList: FC = () => {
  const { width: screenWidth } = useViewportSize();
  const container = useRef<HTMLDivElement>(null);
  const [moveArticle, setMoveArticle] = useState<ArticleDirection>({
    direction: "left",
  });
  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection>({
      xDirection: "scroll-right",
      yDirection: "scroll-down",
    });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "start end"],
  });

  // Function to handle animation direction
  const handleScrollAnimation = useCallback(
    (progress: number) => {
      const delta = scrollYProgress.getPrevious() - progress;

      // Animation logic based on scroll direction and screen width
      if (screenWidth < LARGE_SCREEN_WIDTH) {
        if (delta > 0) {
          // Scroll right animation
          setAnimationDirection((prev) => {
            // do not change animation direction if it is already scrolling right
            if (prev.xDirection === "scroll-right") return prev;
            return {
              xDirection: "scroll-right",
              yDirection: "scroll-up",
            };
          });
          setMoveArticle((prev) => {
            if (prev.direction === "right") return prev;
            return {
              direction: "right",
            };
          });
        } else {
          // Scroll left animation
          setAnimationDirection((prev) => {
            // do not change animation direction if it is already scrolling left
            if (prev.xDirection === "scroll-left") return prev;
            return {
              xDirection: "scroll-left",
              yDirection: "scroll-up",
            };
          });
          setMoveArticle((prev) => {
            if (prev.direction === "left") return prev;
            return {
              direction: "left",
            };
          });
        }
      }

      // Animation on large screens
      if (screenWidth >= LARGE_SCREEN_WIDTH) {
        if (delta > 0) {
          // Scroll down animation
          setAnimationDirection((prev) => {
            // do not change animation direction if it is already scrolling down
            if (prev.yDirection === "scroll-down") return prev;
            return {
              xDirection: "scroll-right",
              yDirection: "scroll-down",
            };
          });
          setMoveArticle((prev) => {
            if (prev.direction === "down") return prev;
            return {
              direction: "down",
            };
          });
        } else {
          // Scroll up animation
          setAnimationDirection((prev) => {
            // do not change animation direction if it is already scrolling up
            if (prev.yDirection === "scroll-up") return prev;
            return {
              xDirection: "scroll-left",
              yDirection: "scroll-up",
            };
          });
          setMoveArticle((prev) => {
            if (prev.direction === "up") return prev;
            return {
              direction: "up",
            };
          });
        }
      }
    },
    [screenWidth, scrollYProgress],
  );

  // Event handling for scroll motion
  useMotionValueEvent(scrollYProgress, "change", handleScrollAnimation);

  return (
    <motion.article
      ref={container}
      variants={articleVariants(moveArticle, screenWidth)}
      initial="initial"
      animate="animate"
      className="right-0 flex w-max flex-row overflow-x-hidden lg:absolute lg:block lg:w-[60%] lg:gap-x-8 xl:me-0"
    >
      {/* --------------------- */}
      <motion.section
        key={generateId()}
        variants={sectionVariants({
          ...animationDirection,
          screenWidth,
          LARGE_SCREEN_WIDTH,
        })}
        className=" flex h-max flex-col justify-end gap-y-4 lg:flex-row lg:gap-x-8"
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
        className="flex h-max flex-col justify-end gap-y-4 lg:flex-row lg:gap-x-8"
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
    </motion.article>
  );
};

export default TestimonialList;
