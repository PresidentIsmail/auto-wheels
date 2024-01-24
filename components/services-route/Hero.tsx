import React from "react";

// import video and poster
const serviceVideoMp4 = "/videos/mp4/service-hero.mp4";
const serviceVideoWebm = "/videos/webm/service-hero.webm";
import serviceVideoPoster from "@/public/videos/posters/poster-03.png";

import VideoLoader from "../VideoLoader";
import AnimatedText from "../AnimatedText";
import SlideInContent from "../SlideInContent";

const ANIMATION_DURATION = 0.05;

const Hero: React.FC = () => {
  return (
    <section className="hero relative h-[40vh]">
      {/* Section Title And Subtitle */}
      <header className="master-container relative z-[1]  flex h-full flex-col justify-center">
        {/* Heading */}
        <AnimatedText
          element="h1"
          text="Service Hub"
          duration={ANIMATION_DURATION}
          className="text-[32px] font-extrabold leading-tight text-white md:text-5xl xl:text-6xl"
        />

        {/* Subtitle */}
        <SlideInContent
          direction="slideUp"
          delay={"Service Hub".length * ANIMATION_DURATION + 0.25}
        >
          <p className="mt-4 max-w-prose text-sm font-medium tracking-wide text-white/90 md:text-base">
            Discover a Spectrum of Services Tailored for Your Vehicle&apos;s
            Peak Performance.
          </p>
        </SlideInContent>
      </header>

      {/* Section bg video */}
      <VideoLoader
        videoTitle="Service Hero Video"
        videoSources={{
          mp4: { desktop: serviceVideoMp4, mobile: serviceVideoMp4 },
          webm: { desktop: serviceVideoWebm, mobile: serviceVideoWebm },
        }}
        posterSources={{
          desktop: serviceVideoPoster,
          mobile: serviceVideoPoster,
        }}
        imageSizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-50"
      />
    </section>
  );
};

export default Hero;
