import React from "react";

import { FOOTER_ITEMS } from "@/constants";

import { Separator } from "../ui/separator";
import AnimatedText from "../AnimatedText";
import FooterItem from "./FooterItem";

const ANIMATION_DURATION = 0.05;

const Footer: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="Footer"
      className="border border-black py-16"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #E71D00",
      }}
    >
      <article className="master-container flex h-full flex-col lg:flex-row">
        <Heading />

        {/* Separator */}
        <Separator className="my-4 bg-grayBorder lg:hidden" />
        <div
          data-orientation="vertical"
          role="none"
          className="me-8 ms-6 hidden w-[2px] shrink-0 bg-grayBorder lg:block"
        />

        {/* Footer Items */}
        <ul className="relative flex w-full flex-col md:flex-row md:justify-between lg:max-w-[65%]">
          {FOOTER_ITEMS.map((item) => (
            <FooterItem key={item.title} item={item} />
          ))}
        </ul>
      </article>
    </section>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="relative z-10  flex h-full w-full flex-col gap-y-4 lg:max-w-[35%]">
      {/* title */}
      <AnimatedText
        text="Auto Wheels & Exhaust."
        element="h2"
        className="text-2xl font-bold tracking-tight text-white lg:text-3xl"
        duration={ANIMATION_DURATION}
      />
      {/* description */}
      <AnimatedText
        text="A leading auto repair shop dedicated to providing exceptional services and customer satisfaction."
        element="p"
        className="max-w-prose text-sm font-normal tracking-wide text-white/80"
        duration={ANIMATION_DURATION}
      />
    </header>
  );
};

export default Footer;
