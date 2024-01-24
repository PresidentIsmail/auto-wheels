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

      {/* Services */}

      <section className="grainy">
        <article className="master-container py-16">
          <header className=" max-w-screen-sm pb-4 lg:max-w-screen-md lg:pb-8">
            <AnimatedText
              element="h2"
              text="Browse our Comprehensive " // the space at the end is intentional
              className="inline-block select-text text-[28px] font-bold leading-tight text-black md:text-4xl xl:text-5xl"
            />
            <SlideInContent
              direction="slideUp"
              delay={"Browse our comprehensive ".length * 0.05}
              className="inline-block text-brand"
            >
              <h2 className="inline-block text-[28px] font-bold leading-tight md:text-4xl xl:text-5xl">
                Services
              </h2>
            </SlideInContent>
          </header>
          <ServicesAccordion />
        </article>
      </section>
      <Contact />
    </React.Fragment>
  );
}
