"use client";

import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type AllowedElements =
  | "div"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

interface AnimatedTextProps {
  text: string;
  element: AllowedElements;
  className?: string;
  animateOnce?: boolean;
}

const defaultAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
      // type: "spring",
      // stiffness: 100,
      // mass: 0.9,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  element: Element,
  animateOnce: once = true,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  return (
    <Element
      className={cn("flex max-w-prose select-none", className)}
      ref={ref}
    >
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={defaultAnimationVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex !== text.split(" ").length - 1 && ( // Add space between words except for the last one
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </Element>
  );
};

export default AnimatedText;
