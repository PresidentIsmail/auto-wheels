import React from "react";
import Image from "next/image";

import { testimonialData } from "@/data/testimonialData";

import TestimonialCard from "./TestimonialCard";
import quotes from "@/public/images/quotes.png";
import AnimatedText from "../AnimatedText";

const ANIMATION_DURATION = 0.05;
const Testimonials: React.FC = () => {
  const firsthalf = testimonialData.slice(
    0,
    Math.floor(testimonialData.length / 2),
  );
  const secondhalf = testimonialData.slice(
    Math.floor(testimonialData.length / 2),
  );

  return (
    <section
      aria-label="Testimonials Section"
      id="testimonials-section"
      role="region"
      className="master-container relative flex flex-col gap-x-12 gap-y-8 bg-white py-16 lg:flex-row lg:py-[72px]"
    >
      {/* Heading */}
      <Heading />

      {/* Testimonials */}
      <article className="right-0 flex flex-col gap-y-4 lg:absolute lg:w-[50%] lg:flex-row lg:gap-x-8 lg:overflow-x-hidden xl:me-0">
        {/* Testimonials First Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {firsthalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* Testimonials Second Half */}
        <div className="flex flex-row gap-8 lg:flex-col lg:gap-12">
          {secondhalf.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </article>
    </section>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="relative z-10 flex h-max flex-col gap-y-6 md:gap-y-8 lg:w-[50%]">
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
          className="absolute -left-2 top-[28px] z-[-1] h-20 w-20 -scale-x-110 transform md:-left-8 md:top-[32px] md:h-24 md:w-24 "
        />

        {/* Bottom */}
        <Image
          src={quotes}
          alt="Image of quotation marks"
          className="absolute bottom-0 right-[30%] z-[-1] h-20 w-20 scale-x-110 md:h-24 md:w-24 lg:-bottom-2 lg:right-[10%] xl:right-[35%]  "
        />
      </div>
    </header>
  );
};

export default Testimonials;
