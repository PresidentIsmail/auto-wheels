import React from "react";
import AnimatedText from "../AnimatedText";
import dynamic from "next/dynamic";

import { contactInfo } from "@/data/contactData";

import FadeInContent from "../FadeInContent";
// import MapDisplay from "./MapDisplay";
const MapDisplay = dynamic(() => import("./MapDisplay"), { ssr: false });

const ANIMATION_DURATION = 0.05;

const Contact: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="Contact"
      className=" bg-[#f7f7fb] pt-16 lg:pt-[72px]"
    >
      <Heading />
      <div className="relative mt-12 grid gap-x-0  gap-y-8 lg:mt-14 lg:h-[400px] lg:grid-cols-12">
        <ContactDetails />
        <FadeInContent className="right-0 top-0 w-full lg:absolute lg:w-[60%]">
          <MapDisplay />
        </FadeInContent>
      </div>
    </section>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="master-container relative z-10 flex h-full w-full flex-col items-center justify-center gap-y-4">
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
          className="justify-center text-pretty text-2xl font-bold tracking-tight text-[#222020] sm:text-3xl lg:text-4xl"
          duration={ANIMATION_DURATION}
        />
        {/* description */}
        <AnimatedText
          text="Need assistance? Feel free to reach out to us."
          element="p"
          className="max-w-prose justify-center text-center text-xs font-medium uppercase tracking-wide text-[#323236] lg:text-sm"
          duration={ANIMATION_DURATION}
        />
      </div>
    </header>
  );
};

const ContactDetails: React.FC = () => {
  return (
    <article className="master-container grid h-max w-full gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
      {contactInfo.map((info, index) => (
        <div key={info.id} className="flex gap-x-4">
          {/* icon */}
          <FadeInContent delay={index * 0.5}>
            <info.Icon className="h-6 w-6 shrink-0 translate-y-[2px] text-brand" />
          </FadeInContent>

          <div className="flex flex-col gap-y-2">
            {/* type (eg: Phone) */}
            <AnimatedText
              text={info.type}
              element="h3"
              className="text-lg  font-bold uppercase text-black"
              duration={ANIMATION_DURATION}
            />

            {/* value (eg: 123-456-7890) */}
            {info.value.map((text, index) => (
              <AnimatedText
                key={index}
                text={text}
                element="p"
                className="text-pretty text-sm font-medium text-black/70"
                duration={ANIMATION_DURATION}
              />
            ))}
          </div>
        </div>
      ))}
    </article>
  );
};

export default Contact;
