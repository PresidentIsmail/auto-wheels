"use client";

import React, { useState, useRef } from "react";

export default function TestPage() {
  return (
    <section className="flex grow flex-col items-center justify-center bg-black">
      <HackerEffect text="Perplexed" />
    </section>
  );
}

interface HackerEffectProps {
  text: string;
}

const LETTERS_OF_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HackerEffect: React.FC<HackerEffectProps> = ({ text }) => {
  const tagRef = useRef<HTMLParagraphElement>(null);

  const onHover = () => {
    const element = tagRef.current;
    if (!element) return;

    let iterations = 0;

    const interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) return text[index];

          return LETTERS_OF_ALPHABET[Math.floor(Math.random() * 26)].toString();
        })
        .join("");

      // stop the interval after 10 iterations
      if (iterations >= element.innerText.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  };

  return (
    <p
      ref={tagRef}
      className="font-mono text-7xl text-white"
      onMouseEnter={onHover}
    >
      {text}
    </p>
  );
};
