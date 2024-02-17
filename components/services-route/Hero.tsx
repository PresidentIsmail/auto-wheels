import React from "react";
import Image from "next/image";
import Link from "next/link";

// import bg image
import bgImage from "@/public/images/services-route/service-01.png";

import { ArrowDown } from "lucide-react";
import AnimatedText from "../AnimatedText";
import SlideInContent from "../SlideInContent";
import { Button } from "../ui/button";

const ANIMATION_DURATION = 0.05;

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex h-[60vh] w-full flex-col"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #E71D00",
      }}
    >
      {/* Section Title And Subtitle */}

      <header className="master-container  relative z-[1] order-2 flex h-full w-full flex-col justify-center md:order-1 ">
        {/* Heading */}
        <AnimatedText
          element="h1"
          text="Service Hub"
          duration={ANIMATION_DURATION}
          className="text-[32px] font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
        />

        {/* Subtitle */}
        <AnimatedText
          element="p"
          text="Discover a Spectrum of Services Tailored for Your Vehicle's Peak Performance."
          duration={ANIMATION_DURATION}
          className="mt-4 max-w-prose text-sm font-medium tracking-wide text-white/70 md:max-w-[30%] md:tracking-wider"
        />

        {/* Button */}
        <SlideInContent
          direction="slideDown"
          delay={
            "Discover a Spectrum of Services Tailored for Your Vehicle's Peak Performance."
              .length * ANIMATION_DURATION
          }
        >
          <Button
            variant={"outline"}
            className="group relative mt-6 w-max rounded-md border-slate-300 text-white duration-300 hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link
              href={"#services-accordion"}
              role="button"
              aria-label="Discover Services"
            >
              Discover Services
              <ArrowDown className="ml-2 h-4 w-4 text-white transition-transform  group-hover:scale-125 group-focus-visible:scale-125" />
            </Link>
          </Button>
        </SlideInContent>
      </header>

      {/* Section bg image */}
      <div className="relative right-0 z-0 h-full w-full md:absolute md:top-0 md:w-[60%] md:justify-self-end">
        <Image
          src={bgImage}
          alt="Services background image"
          placeholder="blur"
          priority
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="h-full w-full object-cover object-center brightness-75"
        />
      </div>
    </section>
  );
};

export default Hero;
