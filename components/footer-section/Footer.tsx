import React from "react";

import { FOOTER_ITEMS } from "@/constants";

import { Separator } from "../ui/separator";
import AnimatedText from "../AnimatedText";
import FooterItem from "./FooterItem";
import WhatsappButton from "../ui/WhatsappButton";

const ANIMATION_DURATION = 0.05;

const Footer: React.FC = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer
      className="border border-black pb-4 pt-16"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #E71D00",
      }}
    >
      <article className="master-container flex h-full flex-col pb-4 lg:flex-row">
        <Heading />

        {/* Separator */}
        <Separator className="my-4 bg-grayBorder lg:hidden" />
        <div
          data-orientation="vertical"
          role="none"
          className="me-8 ms-6 hidden w-[2px] shrink-0 bg-grayBorder lg:block"
        />

        {/* Footer Items */}
        <ul className="relative flex w-full flex-col gap-y-4 capitalize sm:grid sm:grid-cols-2 lg:flex lg:max-w-[65%] lg:flex-row lg:justify-between">
          {FOOTER_ITEMS.map((item) => (
            <FooterItem key={item.title} item={item} />
          ))}
        </ul>
      </article>
      <section className="master-container mt-4">
        <Separator className="mb-4 bg-grayBorder" />
        {/* Footer Credits */}
        <p className="text-start text-xs font-medium tracking-wide text-white sm:font-bold">
          Copyright &copy; {year} Auto Wheels &amp; Exhaust.{" "}
          <span className="block sm:inline-block">All rights reserved.</span>
        </p>
      </section>
    </footer>
  );
};

const Heading: React.FC = () => {
  return (
    <header className="relative z-10  flex h-full w-full flex-col gap-y-4 lg:max-w-[35%]">
      {/* title */}
      <AnimatedText
        text="Auto Wheels & Exhaust."
        element="h2"
        className="text-2xl font-medium text-white lg:text-3xl"
        duration={ANIMATION_DURATION}
      />
      {/* description */}
      <p className="max-w-prose text-sm font-normal tracking-wide text-white/80">
        A leading auto repair shop dedicated to providing exceptional services
        and customer satisfaction.
      </p>
      {/* WhatsApp */}
      <WhatsappButton
        className="mt-2 w-max xl:text-sm"
        aria-label="WhatsApp Us"
      >
        WhatsApp Us
      </WhatsappButton>
    </header>
  );
};

export default Footer;
