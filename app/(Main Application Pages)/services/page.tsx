import React from "react";

import Hero from "@/components/services-route/Hero";
import ServicesAccordion from "@/components/services-route/ServicesAccordion";
import Contact from "@/components/contact-section/Contact";

export default function Services() {
  return (
    <React.Fragment>
      <Hero />

      {/* Services */}
      <section className="grainy">
        <article className="master-container pb-16 pt-8 md:py-16">
          <ServicesAccordion />
        </article>
      </section>
      <Contact />
    </React.Fragment>
  );
}
