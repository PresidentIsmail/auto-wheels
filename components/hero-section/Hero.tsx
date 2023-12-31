import React from "react";

import HeroCopy from "./HeroCopy";
import VideoLoader from "../VideoLoader";

const promoVideoPath = "/videos/promo-video-1.mp4";
const testPromoVideoPath = "/videos/test-promo-video.mp4";

const Hero = () => {
  return (
    <section
      className="min-h-hero-mobile md:min-h-hero-desktop flex h-full overflow-hidden
      border-b-[1px] border-b-grayBorder
    "
    >
      <div className="flex flex-1 px-[100px]">
        <div className="grid grid-cols-3 gap-x-4">
          {/* Hero Copy */}
          <HeroCopy className="" />

          {/* Promo Video */}
          <div className="relative col-span-2">
            <div className="absolute bottom-auto left-0 right-auto top-0 h-full w-[115%] overflow-hidden">
              <VideoLoader
                mp4={testPromoVideoPath}
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
