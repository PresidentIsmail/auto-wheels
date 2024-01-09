import React from "react";
import Image from "next/image";

import { testimonialData } from "@/data/testimonialData";

import quotes from "@/public/images/quotes.png";
import AnimatedText from "../AnimatedText";

const ANIMATION_DURATION = 0.05;
const Testimonials: React.FC = () => {
  return (
    <section
      aria-label="Testimonials Section"
      id="testimonials-section"
      role="region"
      className="master-container bg-white py-16 lg:py-[72px]"
    >
      {/* Heading */}
      <header className="relative z-10 flex flex-col gap-y-6 md:gap-y-8">
        {/* subtitle */}
        <AnimatedText
          text="testimonials"
          element="h3"
          className=" text-xs font-bold uppercase text-[#92959a] md:text-sm"
          duration={ANIMATION_DURATION}
        />
        <div className="flex flex-col gap-y-4">
          {/* title */}
          <AnimatedText
            text="Precision and Dependability: Building Lasting Relationships."
            element="h2"
            className="text-3xl font-bold tracking-tight text-[#222020] md:text-4xl lg:text-5xl"
            duration={ANIMATION_DURATION}
          />
          {/* description */}
          <p className="max-w-prose text-sm font-medium tracking-wide text-[#222020]/90">
            Read what our customers have to say about us.
          </p>
        </div>
      </header>

      {/* Testimonials */}
    </section>
  );
};

export default Testimonials;
