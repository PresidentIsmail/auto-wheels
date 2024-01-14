import React from "react";
import Image from "next/image";

import questionMark from "@/public/images/question-mark.png";
import AnimatedText from "../AnimatedText";
import FaqList from "./FaqList";

const ANIMATION_DURATION = 0.05;

const Faq: React.FC = () => {
  return (
    <article
      role="region"
      aria-label="Frequently Asked Questions"
      className="overflow-hidden border border-black  py-16 lg:py-[72px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #E71D00",
      }}
    >
      <section className="master-container relative flex flex-col gap-x-12 gap-y-8 lg:flex-row">
        <Heading />
        <FaqList />
      </section>
    </article>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="relative z-10 flex h-max flex-col  gap-y-6 md:gap-y-8 lg:w-[40%]">
      {/* subtitle */}
      <AnimatedText
        text="faq"
        element="h3"
        className=" text-xs font-bold uppercase text-[#92959a] md:text-sm"
        duration={ANIMATION_DURATION}
      />
      <div className="flex flex-col gap-y-4">
        {/* title */}
        <AnimatedText
          text="Frequently Asked Questions."
          element="h2"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          duration={ANIMATION_DURATION}
        />
        {/* description */}
        <AnimatedText
          text="Find answers to common questions about our auto repair services."
          element="p"
          className="max-w-prose text-sm font-medium tracking-wide text-white/80"
          duration={ANIMATION_DURATION}
        />

        {/* Question Mark img to add detail */}
        {/* NO-01 */}
        <Image
          src={questionMark}
          alt="Image of question mark"
          className="absolute left-[20%] top-[28px] z-[-1] -rotate-[20deg] scale-150 transform  opacity-80 md:-left-4 md:top-[32px] lg:scale-110 "
        />

        {/* NO-02 */}
        <Image
          src={questionMark}
          alt="Image of question mark"
          className="absolute bottom-0 right-[30%] z-[-1] rotate-[30deg] scale-150 opacity-80 lg:-bottom-2 lg:right-[10%] lg:scale-110 xl:right-[35%] "
        />

        {/* NO-03 */}
        <Image
          src={questionMark}
          alt="Image of question mark"
          className="absolute left-1/2 top-0 z-[-1] hidden -translate-x-1/2 scale-150 opacity-80 lg:block lg:scale-110"
        />
      </div>
    </header>
  );
};

export default Faq;
