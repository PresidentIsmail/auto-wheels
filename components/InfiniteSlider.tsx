"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  duration = 20,
  className,
}) => {
  const sliderVariants: Variants = {
    initial: {
      x: "0%",
    },
    animate: {
      x: "-100%",
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  return (
    <section
      className={cn("relative flex flex-row py-6 lg:py-8 ", className)}
      aria-label="Infinite Slider"
      role="region"
      aria-roledescription="infinite slider"
    >
      <SliderArticle variants={sliderVariants}>{children}</SliderArticle>
      {/* duplicate to make infinite slider animation, hidden for accessibility */}
      <SliderArticle variants={sliderVariants} ariaHidden>
        {children}
      </SliderArticle>
    </section>
  );
};

interface SliderArticleProps {
  children: React.ReactNode;
  variants: Variants;
  ariaHidden?: boolean;
}

const SliderArticle: React.FC<SliderArticleProps> = ({
  children,
  variants,
  ariaHidden = false,
}) => (
  <motion.article
    variants={variants}
    initial="initial"
    animate="animate"
    aria-hidden={ariaHidden}
  >
    {children}
  </motion.article>
);

export default InfiniteSlider;
