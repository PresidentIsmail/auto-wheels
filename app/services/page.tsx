import React from "react";

import Hero from "@/components/services-route/Hero";
import AnimatedText from "@/components/AnimatedText";
import SlideInContent from "@/components/SlideInContent";
import ServicesAccordion from "@/components/services-route/ServicesAccordion";
import Contact from "@/components/contact-section/Contact";

export default function Services() {
  return (
    <React.Fragment>
      <Hero />
      <section className="master-container pb-[60px]">
        <header className=" max-w-screen-sm py-[60px]">
          <AnimatedText
            element="h2"
            text="Discover Our Range of " // the space at the end is intentional
            className="inline-block select-text text-[28px] font-bold leading-tight text-black md:text-4xl xl:text-5xl"
          />
          <SlideInContent
            direction="slideUp"
            delay={"Discover Our Range of ".length * 0.05}
            className="inline-block text-brand"
          >
            <h2 className="text-[28px] inline-block font-bold leading-tight md:text-4xl xl:text-5xl">
              Services
            </h2>
          </SlideInContent>
        </header>

        <ServicesAccordion />
      </section>
      <Contact />
    </React.Fragment>
  );
}
