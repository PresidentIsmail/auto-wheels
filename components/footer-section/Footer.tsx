import React from "react";
import AnimatedText from "../AnimatedText";

const ANIMATION_DURATION = 0.05;

const Footer: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="Footer"
      className="overflow-hidden border border-black py-16"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #E71D00",
      }}
    >
      <article className="flex flex-col lg:flex-row">
        <Heading />

        {/* Footer Items */}
      </article>
    </section>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="relative z-10 flex h-full flex-col  gap-y-6 lg:w-[40%] lg:gap-y-8">
      <div className="flex flex-col gap-y-4">
        {/* title */}
        <AnimatedText
          text="Auto Wheels & Exhaust."
          element="h2"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          duration={ANIMATION_DURATION}
        />
        {/* description */}
        <AnimatedText
          text="A leading auto repair shop dedicated to providing exceptional services and customer satisfaction."
          element="p"
          className="max-w-prose text-sm font-medium tracking-wide text-white/80"
          duration={ANIMATION_DURATION}
        />
      </div>
    </header>
  );
};



export default Footer;
