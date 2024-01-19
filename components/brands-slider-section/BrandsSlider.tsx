"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const sliderVariants: Variants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const BrandsSlider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section
      className="relative flex flex-row py-6 lg:py-8"
      aria-label="Brands Slider"
    >
      <motion.article
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.article>
      {/* duplicate to make infinite slider animation */}
      <motion.article
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.article>
    </section>
  );
};

export default BrandsSlider;
