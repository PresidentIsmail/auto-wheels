import React from "react";

import Hero from "@/components/hero-section/Hero";
// import Statistics from "@/components/statistic-section/Statistics";
// import TireSelection from "@/components/tire-selection-section/TireSelection";
import Services from "@/components/services-section/Services";
import Promotions from "@/components/promotions-section/Promotions";
import Testimonials from "@/components/testimonials-section/Testimonial";
import Faq from "@/components/faq-section/Faq";
import Contact from "@/components/contact-section/Contact";
import InfiniteSlider from "@/components/InfiniteSlider";
import BrandLogoDisplay from "@/components/BrandLogoDisplay";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      {/* not displaying tire selection and stats anymore */}
      {/* <Statistics />
      <TireSelection /> */}
      <InfiniteSlider>
        <BrandLogoDisplay />
      </InfiniteSlider>
      <Services />
      <Promotions />
      <Testimonials />
      <Faq />
      <Contact />
    </React.Fragment>
  );
}
