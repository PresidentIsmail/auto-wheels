// Updated imports
"use client";

import React, { useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";

// Updated type with a new 'direction' prop
type Props = {
  children: React.ReactNode;
  delay?: number;
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
  children,
  delay = 0,
  className,
  animateOnce = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: animateOnce });

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 1,
          delay: delay,
          ease: "easeInOut",
        }}
        className={"h-full"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInContent;
