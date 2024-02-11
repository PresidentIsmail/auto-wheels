import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  BUSINESS_TELEPHONE_NUMBER,
  BUSINESS_ADDRESS_ON_GOOGLE_MAPS,
} from "@/constants";

import { Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import WhatsappButton from "../ui/WhatsappButton";
import AnimatedText from "../AnimatedText";
import SlideInContent from "../SlideInContent";
import Stars from "../ui/Stars";

type HeroCopyProps = React.HTMLAttributes<HTMLDivElement>;
// master-container flex w-[30%] flex-col items-start justify-between py-8
const HeroCopy: React.FC<HeroCopyProps> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        "mt-4 flex flex-col items-start justify-center gap-y-10 pb-4 lg:gap-y-16",
        className,
      )}
      {...props}
    >
      {/* Heading and Buttons */}
      <div className="flex max-w-prose flex-col gap-y-6 lg:gap-y-8">
        {/* Heading */}
        <AnimatedText
          element="h1"
          text="Welcome to Auto Wheels & Exhaust"
          className="font-header text-3xl font-extrabold leading-tight tracking-wider text-black md:text-4xl xl:text-5xl"
        />

        {/* Buttons Contact */}
        <div className="flex gap-x-4 ">
          {/* Whatsapp */}
          <SlideInContent direction="slideRight" delay={0.5}>
            <WhatsappButton aria-label="WhatsApp" className="w-max text-xs">
              WhatsApp{" "}
              <span className="hidden md:inline-block" aria-hidden>
                Us
              </span>
            </WhatsappButton>
          </SlideInContent>

          {/* Location */}
          <SlideInContent direction="slideLeft" delay={0.75}>
            <Button variant={"default"} asChild className="w-max text-xs">
              <Link
                href={BUSINESS_ADDRESS_ON_GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Our Workshop"
                className="flex gap-x-2"
              >
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                Visit Our Workshop
              </Link>
            </Button>
          </SlideInContent>
        </div>
      </div>

      {/* Description and Ratings*/}
      <div className="flex max-w-prose flex-col gap-y-2 lg:gap-y-4">
        {/* Description */}
        <SlideInContent direction="slideRight" delay={1}>
          <p className="text-sm font-medium text-[#323236] md:text-base">
            Revitalize your ride at Auto Wheels! Expert auto care, unbeatable
            specials, and top-tier tyres for a confident drive. Elevate your
            journey with us!
          </p>
        </SlideInContent>

        {/* Ratings */}
        <SlideInContent direction="slideRight" delay={1.25}>
          <div className="flex items-center gap-x-1 ">
            {/* stars */}
            <Stars rating={4.6} />

            {/* review from google */}
            <p className="ml-1 text-xs font-medium text-[#323236] md:text-sm">
              4.6 (<span className="text-[#4285F4]">G</span>
              <span className="text-[#DB4437]">o</span>
              <span className="text-[#F4B400]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#0F9D58]">l</span>
              <span className="text-[#DB4437]">e</span>
              <span>&nbsp;Reviews</span>)
            </p>
          </div>
        </SlideInContent>
      </div>
    </section>
  );
};

export default HeroCopy;
