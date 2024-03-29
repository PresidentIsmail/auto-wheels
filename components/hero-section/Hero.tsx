import React from "react";

import HeroCopy from "./HeroCopy";
import HomeScreenVideoLoader from "../HomeScreenVideoLoader";

const Hero = () => {
  return (
    <section
      className="flex h-hero-mobile w-full flex-shrink-0 overflow-x-hidden
       lg:h-hero-desktop "
      aria-label="Hero section"
    >
      <div className="grid w-full grid-rows-5 gap-x-4 lg:grid-cols-6 lg:grid-rows-1">
        {/* Hero Copy */}
        <HeroCopy className="master-container order-2 col-span-3 row-span-3 pb-4 pt-2 lg:order-1 lg:pb-0 lg:pt-0" />

        {/* Promo Video */}
        <section className="relative order-1 col-span-3 row-span-2 h-auto lg:order-2">
          <HomeScreenVideoLoader className="absolute inset-0 h-full w-full object-cover object-center" />
        </section>
      </div>
    </section>
  );
};

export default Hero;
