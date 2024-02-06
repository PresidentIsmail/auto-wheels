import { FC } from "react";
import Link from "next/link";

import { TOP_5_SERVICES } from "@/data/servicesData";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import ServiceCard from "@/components/services-section/ServiceCard";
import AnimatedText from "../AnimatedText";
import HackerEffect from "../HackerEffect";

const Services: FC = () => {
  return (
    <section
      aria-label="Services"
      id="services"
      role="region"
      className="master-container grid gap-x-8 gap-y-12 pb-16 pt-4 sm:grid-cols-2 lg:py-[72px] xl:grid-cols-3"
    >
      {/* Heading */}
      <header className="flex w-full flex-col gap-y-3 md:gap-y-6">
        {/* subtitle */}
        <AnimatedText
          text="Services"
          element="h3"
          className="text-xs font-medium uppercase text-[#92959a] md:text-sm"
          duration={0.05}
        />
        {/* title */}
        <HackerEffect
          tag="h2"
          displayText="Explore our auto repair services in detail"
          className="text-2xl font-black tracking-tight text-[#222020] md:text-3xl lg:text-4xl"
        />

        {/* View all services btn */}
        <Button
          variant={"outline"}
          className="group mt-2 flex w-max rounded-md border-none bg-brand capitalize text-white ring-1 ring-brand hover:bg-[#ff0800] hover:text-white"
          asChild
        >
          <Link href={"/services"} role="link" aria-label="View all services">
            View all services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-45 group-hover:scale-125" />
          </Link>
        </Button>
      </header>

      {/* Services */}
      {TOP_5_SERVICES.map((serviceGroup, index) => (
        <ServiceCard
          serviceGroupTitle={serviceGroup.serviceGroupTitle}
          key={index}
          service={serviceGroup.service!}
          displayOption="services"
        />
      ))}
    </section>
  );
};

export default Services;
