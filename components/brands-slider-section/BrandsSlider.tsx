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

const sliderVariants = (direction: "left" | "right"): Variants => ({
  initial: {
    x: direction === "left" ? "0%" : "-100%",
  },
  animate: {
    x: direction === "left" ? "-100%" : "0%",
    transition: {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
    },
  },
});

const sliderContainerVariants = (direction: "left" | "right"): Variants => ({
  initial: {
    x: direction === "left" ? "0px" : "-100px",
  },
  animate: {
    x: direction === "left" ? "-100px" : "0px",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 1.5,
    },
  },
});

const BrandsSlider: React.FC = () => {
  const sliderContainer = useRef<HTMLDivElement>(null);
  const [sliderContainerDirection, setSliderContainerDirection] = useState<
    "left" | "right"
  >("right");
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");
  const { scrollYProgress } = useScroll({
    target: sliderContainer,
    offset: ["end start", "start end"],
  });

  // Function to handle animation direction
  const handleScrollAnimation = useCallback(
    (progress: number) => {
      const delta = scrollYProgress.getPrevious() - progress;

      // Animation logic based on scroll direction and screen width

      if (delta > 0) {
        // Scroll right animation
        setAnimationDirection((prev) => {
          // do not change animation direction if it is already scrolling right
          if (prev === "right") return prev;
          return "right";
        });
        setSliderContainerDirection((prev) => {
          if (prev === "right") return prev;
          return "right";
        });
      } else {
        // Scroll left animation
        setAnimationDirection((prev) => {
          // do not change animation direction if it is already scrolling left
          if (prev === "left") return prev;
          return "left";
        });
        setSliderContainerDirection((prev) => {
          if (prev === "left") return prev;
          return "left";
        });
      }
    },
    [scrollYProgress],
  );

  // Event handling for scroll motion
  useMotionValueEvent(scrollYProgress, "change", handleScrollAnimation);
  return (
    <motion.section
      ref={sliderContainer}
      variants={sliderContainerVariants(animationDirection)}
      animate="animate"
      initial="initial"
      className="relative flex flex-row py-6 lg:py-8"
      aria-label="Brands Slider"
    >
      <motion.article
        key={generateId()}
        variants={sliderVariants(sliderContainerDirection)}
      >
        <BrandDisplay className="pe-10" />
      </motion.article>
      {/* duplicate to make infinite slider animation */}
      <motion.article
        key={generateId()}
        variants={sliderVariants(sliderContainerDirection)}
      >
        <BrandDisplay className="pe-10" />
      </motion.article>
    </motion.section>
  );
};

export default BrandsSlider;
