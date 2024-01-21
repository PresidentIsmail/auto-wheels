"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface InfiniteSliderProps {
  children: React.ReactNode;
  duration?: number;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  duration = 20,
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
      className="relative flex flex-row py-6 lg:py-8"
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
