// Updated imports
"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

// Updated type with a new 'direction' prop
type Props = {
  id?: string;
  children: React.ReactNode;
  delay?: number;
  animationDuration?: number;
  className?: string;
  animateOnce?: boolean;
};

// Updated variants based on the chosen direction
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// Updated component name and props
const FadeInContent: React.FC<Props> = ({
  id,
  children,
  delay = 0,
  animationDuration = 0.5,
  className,
  animateOnce = true,
}) => {
  return (
    <motion.div
      id={id}
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{
        once: animateOnce,
        // amount: 0.5, // commented because it's already set to "some" by default and hero section is not working with it
      }}
      transition={{
        duration: animationDuration,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeInContent;
