import React from "react";
import Image from "next/image";

import quotes from "@/public/images/quotes.png";
import AnimatedText from "../AnimatedText";
import TestimonialList from "./TestimonialList";

const ANIMATION_DURATION = 0.05;
const Testimonials: React.FC = () => {
  return (
    <section
      aria-label="Testimonials Section"
      id="testimonials-section"
      role="region"
      className="master-container relative my-4 flex h-max max-h-screen flex-col gap-x-12 gap-y-8 overflow-hidden bg-white lg:h-[600px] lg:flex-row "
    >
      {/* Heading */}
      <Heading />

      {/* Testimonials */}
      <TestimonialList />
    </section>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="relative z-10 flex h-max flex-col gap-y-6  mt-12 md:gap-y-8 lg:w-[50%] lg:mt-[56px]">
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
          className="text-2xl font-bold tracking-tight text-[#222020] sm:text-3xl md:text-4xl"
          duration={ANIMATION_DURATION}
        />
        {/* description */}
        <AnimatedText
          text="Read what our customers have to say about us."
          element="p"
          className="max-w-prose text-sm font-medium tracking-wide text-[#222020]/90"
          duration={ANIMATION_DURATION}
        />

        {/* Quotes img to add detail */}
        {/* Top */}
        <Image
          src={quotes}
          alt="Image of quotation marks"
          className="absolute opacity-50 md:opacity-80 -left-1 top-[28px] z-[-1] h-20 w-20 -scale-x-110 transform md:-left-4 md:top-[32px] md:h-24 md:w-24 "
        />

        {/* Bottom */}
        <Image
          src={quotes}
          alt="Image of quotation marks"
          className="absolute opacity-50 md:opacity-80 bottom-0 right-[30%] z-[-1] h-20 w-20 scale-x-110 md:h-24 md:w-24 lg:-bottom-2 lg:right-[10%] xl:right-[35%]  "
        />
      </div>
    </header>
  );
};

export default Testimonials;
