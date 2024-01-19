"use client";

import React, { useCallback, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";

import BrandDisplay from "./BrandDisplay";
import { generateId } from "@/lib/helper";

type Direction = "left" | "right";

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

const BrandsSlider: React.FC = () => {
  return (
    <section
      className="relative flex flex-row py-6 lg:py-8"
      aria-label="Brands Slider"
    >
      <motion.article
        key={generateId()}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <BrandDisplay className="pe-10" />
      </motion.article>
      {/* duplicate to make infinite slider animation */}
      <motion.article
        key={generateId()}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <BrandDisplay className="pe-10" />
      </motion.article>
    </section>
  );
};

export default BrandsSlider;
