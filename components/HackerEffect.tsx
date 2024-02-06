"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface HackerEffectProps {
  tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  displayText: string;
  className?: string;
}

const ALPHABET_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HackerEffect: React.FC<HackerEffectProps> = ({
  tag: Element,
  displayText,
  className,
}) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const isElementInView = useInView(paragraphRef, {
    amount: "all",
  });

  const animateText = useCallback(() => {
    const paragraphElement = paragraphRef.current;
    if (!paragraphElement) return;

    let currentIteration = 0;
    const displayTextLength = displayText.length;

    const animationInterval = setInterval(() => {
      
      paragraphElement.innerText = paragraphElement.innerText
        .split("")
        .map((letter, index) => {
          if (letter === " " || letter === "\n") return letter;
          if (index < currentIteration) return displayText[index];
          return ALPHABET_LETTERS[Math.floor(Math.random() * 26)];
        })
        .join("");

      // Stop the interval after completing one full cycle
      if (currentIteration >= displayTextLength)
        clearInterval(animationInterval);

      currentIteration += 1;
    }, 30);
  }, [displayText]);

  useEffect(() => {
    if (isElementInView) {
      animateText();
    }
  }, [isElementInView, animateText]);

  return (
    <Element ref={paragraphRef} className={cn("font-mono ", className)}>
      {displayText}
    </Element>
  );
};

export default HackerEffect;
