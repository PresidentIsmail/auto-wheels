import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  BUSINESS_TELEPHONE_NUMBER,
  BUSINESS_ADDRESS_ON_GOOGLE_MAPS,
} from "@/constants";

import { Phone, Star, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import AnimatedText from "../AnimatedText";
import SlideInContent from "../SlideInContent";

type HeroCopyProps = React.HTMLAttributes<HTMLDivElement>;
// master-container flex w-[30%] flex-col items-start justify-between py-8
const HeroCopy: React.FC<HeroCopyProps> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        "col-span-1 mt-4 flex max-w-prose flex-col items-start pb-4 pe-6 lg:justify-between lg:pb-6",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-6 lg:gap-y-12">
        {/* Heading */}
        {/* <h1 className="text-[32px] font-extrabold leading-tight md:text-5xl xl:text-6xl">
          Welcome to Auto Wheels & Exhaust
        </h1> */}
        <AnimatedText
          element="h1"
          text="Welcome to Auto Wheels & Exhaust"
          className="text-[32px] font-extrabold leading-tight text-black md:text-5xl xl:text-6xl"
        />

        {/* Buttons */}
        <div className="flex gap-x-4 ">
          {/* Contact */}
          <SlideInContent direction="slideRight" delay={0.5}>
            <Button variant={"default"} asChild className="w-max">
              <Link
                href={`tel:${BUSINESS_TELEPHONE_NUMBER}`}
                aria-label={`Call us at ${BUSINESS_TELEPHONE_NUMBER}`}
                className="flex gap-x-2"
              >
                <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
                Call Us
              </Link>
            </Button>
          </SlideInContent>

          {/* Location */}
          <SlideInContent direction="slideLeft" delay={0.75}>
            <Button variant={"outline"} asChild className="w-max">
              <Link
                href={BUSINESS_ADDRESS_ON_GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="flex gap-x-2"
              >
                <MapPin className="h-4 w-4 xl:h-5 xl:w-5" />
                Location
              </Link>
            </Button>
          </SlideInContent>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-y-6 lg:mt-0">
        {/* Description */}
        <SlideInContent direction="slideRight" delay={1}>
          <p className="text-sm font-medium text-[#323236] md:text-base">
            Revitalize your ride at Auto Wheels! Expert auto care, unbeatable
            specials, and top-tier tires for a confident drive. Elevate your
            journey with us!
          </p>
        </SlideInContent>

        {/* Start Ratings */}
        {/* <div className="flex items-center gap-x-1 ">
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroCopy;
