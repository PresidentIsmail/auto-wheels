// Updated imports
"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

type Direction = "slideDown" | "slideUp" | "slideLeft" | "slideRight";

// Updated type with a new 'direction' prop
type Props = {
  children: React.ReactNode;
  delay?: number;
  margin?: string;
  className?: string;
  animateOnce?: boolean;
  direction?: Direction; // New direction prop
};

// Updated variants based on the chosen direction
const containerVariants: Variants = {
  hidden: (direction: Direction) => {
    return {
      opacity: 0,
      x:
        direction === "slideRight"
          ? "-100%"
          : direction === "slideLeft"
            ? "100%"
            : 0,
      y:
        direction === "slideDown"
          ? "-100%"
          : direction === "slideUp"
            ? "100%"
            : 0,
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

// Updated component name and props
const SlideInContent: React.FC<Props> = ({
  children,
  delay = 0,
  margin = "0px",
  className,
  animateOnce = true,
  direction = "slideRight", // Default direction is from the bottom
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      viewport={{
        once: animateOnce,
        margin: margin,
      }}
      custom={direction} // Pass direction as a custom prop
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInContent;
