import React from "react";
import AnimatedText from "../AnimatedText";
import dynamic from "next/dynamic";

import FadeInContent from "../FadeInContent";
import ContactDetails from "./ContactDetails";
const MapDisplay = dynamic(() => import("./MapDisplay"), { ssr: false });

const ANIMATION_DURATION = 0.05;

const Contact: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="Contact section with map and contact details"
      className=" pt-16 lg:pt-[72px]"
    >
      <Heading />
      <div className="relative mt-12  gap-x-0  gap-y-8  overflow-hidden lg:mt-14 lg:min-h-[400px] ">
        <ContactDetails />
        <FadeInContent className="right-0 top-0 h-full w-full lg:absolute lg:w-[60%]">
          <MapDisplay />
        </FadeInContent>
      </div>
    </section>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="master-container relative z-10 flex h-full w-full flex-col items-start justify-center gap-y-4">
      {/* subtitle */}
      <AnimatedText
        text="contact"
        element="h3"
        className=" text-xs font-bold uppercase text-[#92959a] lg:text-sm"
        duration={ANIMATION_DURATION}
      />
      <div className="flex flex-col gap-y-2">
        {/* title */}
        <AnimatedText
          text="Get in Touch."
          element="h2"
          className="justify-start text-pretty text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl"
          duration={ANIMATION_DURATION}
        />
        {/* description */}
        <AnimatedText
          text="Need assistance? Feel free to reach out to us."
          element="p"
          className="max-w-prose justify-start text-start text-xs font-medium uppercase tracking-wide text-black/70 lg:text-sm"
          duration={ANIMATION_DURATION}
        />
      </div>
    </header>
  );
};

export default Contact;
