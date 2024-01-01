import React from "react";

import HeroCopy from "./HeroCopy";
import VideoLoader from "../VideoLoader";

const promoVideoPath = "/videos/promo-video-1.mp4";
const promoVideoTwoPath = "/videos/promo-video-2.webm";
const testPromoVideoPath = "/videos/test-promo-video.mp4";

const Hero = () => {
  return (
    <section
      className="flex max-h-[var(--hero-mobile-height)] w-full overflow-x-hidden border-b-[1px] border-b-grayBorder
       lg:h-hero-desktop
    "
    >
      <div className="flex flex-1 ">
        <div className="grid grid-rows-5 gap-x-4 lg:grid-cols-5 lg:grid-rows-1">
          {/* Hero Copy */}
          <HeroCopy className="order-2 col-span-2 row-span-3 ps-4 lg:order-1" />

          {/* Promo Video */}
          <div className="relative order-1 col-span-3 row-span-2 h-auto lg:order-2">
            <div className="absolute left-auto h-full w-[200%] overflow-hidden lg:w-[150%]">
              <VideoLoader
                webm={promoVideoTwoPath}
                videoTitle="Promotional video"
                imageSrc={undefined}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
