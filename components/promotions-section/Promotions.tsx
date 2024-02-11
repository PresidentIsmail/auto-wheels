"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { promoData } from "@/data/promoData";

import dealsBg from "@/public/images/deals.webp";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import AnimatedText from "../AnimatedText";
import PromoCard from "./PromoCard";
import Carousel from "../carousel/Carousel";
import HackerEffect from "../HackerEffect";

const ANIMATION_DURATION = 0.05;

const Promotions: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="Promotions"
      className="relative flex flex-col overflow-hidden border border-black py-16 md:flex-row lg:py-[72px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #E71D00",
      }}
    >
      {/* background image */}
      <BackgroundImageWithOverlay />
      <BackgroundImageWithOverlayMobile />

      {/* Content */}
      <div className="z-10 shrink-0 text-center md:w-1/2 md:ps-8 md:text-start">
        {/* Heading */}
        <header className="master-container relative z-10 flex flex-col items-center gap-y-4 md:items-start md:gap-y-4">
          {/* subtitle */}
          <AnimatedText
            text="promotions"
            element="h3"
            className=" text-xs font-medium uppercase text-[#92959a] md:text-sm"
            duration={ANIMATION_DURATION}
          />
          <div className="flex flex-col gap-y-4">
            {/* title */}
            <HackerEffect
              tag="h2"
              displayText="Special offers and promotions exclusively for you."
              className="text-3xl font-bold text-white md:text-3xl lg:text-4xl"
            />

            {/* description */}
            <p className="max-w-prose text-sm tracking-wide text-white/90">
              Discover our exclusive specials and deals, seasonal offers, and
              bundle packages available to keep your car running smoothly all
              year round.
            </p>
          </div>

          {/* View all promos btn */}
          <Button
            variant={"outline"}
            className="group hidden mt-2 w-max rounded-md border-white text-white hover:bg-white/10 hover:text-white md:flex"
            asChild
          >
            <Link href={"#"} role="button" aria-label="View all promotions">
              View all promotions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-45 group-hover:scale-125 group-hover:text-brand" />
            </Link>
          </Button>
        </header>
      </div>

      {/* Promos - standard display */}
      <div className="master-container relative mt-12 flex w-full flex-col items-center justify-center gap-y-8 md:hidden">
        {promoData.map((promo) => (
          <PromoCard key={promo.title} promo={promo} />
        ))}
      </div>

      {/* Promos on large screens - displayed in a carousel */}
      <Carousel className="relative hidden w-[40%] min-w-[410px] flex-col pe-4 md:flex lg:w-1/2 lg:pe-8">
        {promoData.map((promo) => (
          <PromoCard key={promo.title} promo={promo} />
        ))}
      </Carousel>
    </section>
  );
};

const BackgroundImageWithOverlay: React.FC = () => (
  <div className="absolute top-1/2 z-0 hidden h-[60%] w-[70%] -translate-y-1/2 md:block">
    <Image
      src={dealsBg}
      alt="Promotions Section Background"
      fill
      sizes="(max-width: 768px) 0vw, (min-width: 769px) 70vw"
      quality={70}
      placeholder="blur"
      className="absolute left-0 top-0 z-0 hidden object-contain object-center opacity-90 md:block"
    />
    <div
      className="absolute left-0 top-0 z-0 hidden h-full md:block"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), lightgray 50% / cover no-repeat",
      }}
    />
  </div>
);

const BackgroundImageWithOverlayMobile: React.FC = () => (
  <>
    {/* Position to the top */}
    <div className="absolute top-0 z-0 h-[15%] w-[100%] md:hidden">
      <Image
        src={dealsBg}
        alt="Promotions Section Background"
        fill
        sizes="(max-width: 768px) 70vw, (min-width: 769px) 0vw"
        quality={70}
        placeholder="blur"
        className="absolute left-0 top-0 z-0 object-contain object-center opacity-90 md:hidden"
      />
      <div
        className="absolute left-0 top-0 z-0 h-full md:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), lightgray 50% / cover no-repeat",
        }}
      />
    </div>

    {/* Position to the middle */}
    <div className="absolute top-1/2 z-0 h-[15%] w-[100%] -translate-y-1/2 md:hidden">
      <Image
        src={dealsBg}
        alt="Promotions Section Background"
        fill
        sizes="(max-width: 768px) 70vw, (min-width: 769px) 0vw"
        quality={70}
        placeholder="blur"
        className="z-0 object-contain object-center opacity-90 md:hidden"
      />
      <div
        className="absolute left-0 top-0 z-0 h-full md:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), lightgray 50% / cover no-repeat",
        }}
      />
    </div>

    {/* Position to the bottom */}
    <div className="absolute top-full z-0 h-[15%] w-[100%] -translate-y-full md:hidden">
      <Image
        src={dealsBg}
        alt="Promotions Section Background"
        fill
        sizes="(max-width: 768px) 70vw, (min-width: 769px) 0vw"
        quality={70}
        placeholder="blur"
        className="z-0 object-contain object-center opacity-90 md:hidden"
      />
      <div
        className="absolute left-0 top-0 z-0 h-full md:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), lightgray 50% / cover no-repeat",
        }}
      />
    </div>
  </>
);

export default Promotions;
