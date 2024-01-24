import { FC } from "react";

import { top5AutoRepairServices } from "@/data/servicesData";

import ServiceCard from "@/components/services-section/ServiceCard";
import AnimatedText from "../AnimatedText";
import ScaleInContent from "../ScaleInContent";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Services: FC = () => {
  return (
    <section
      aria-label="Services"
      id="services"
      role="region"
      className="master-container grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:py-[72px] xl:grid-cols-3"
    >
      {/* Heading */}
      <header className="flex w-full flex-col gap-y-6 md:gap-y-8">
        {/* subtitle */}
        <AnimatedText
          text="Services"
          element="h3"
          className="text-xs font-bold uppercase text-[#92959a] md:text-sm"
          duration={0.05}
        />
        {/* title */}
        <AnimatedText
          text="Explore our auto repair services in detail"
          element="h2"
          className="text-3xl font-bold tracking-tight text-[#222020] md:text-4xl lg:text-5xl"
          duration={0.05}
        />

        {/* View all services btn */}
        <Button
          variant={"outline"}
          className="group hidden w-max rounded-md border-none ring-1 ring-brand bg-brand capitalize text-white/80 hover:bg-brand hover:text-white sm:flex"
          asChild
        >
          <Link href={"/services"} role="link" aria-label="View all services">
            View all services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-45 group-hover:scale-125" />
          </Link>
        </Button>
      </header>

      {/* Services */}
      {top5AutoRepairServices.map((service) => (
        <ServiceCard key={service.heading} service={service} />
      ))}

      {/* View all services btn */}
      <Button
        variant={"outline"}
        className="group flex w-full rounded-md border-none ring-1 ring-brand bg-brand capitalize text-white/80 hover:bg-brand hover:text-white sm:hidden"
        asChild
      >
        <Link href={"/services"} role="link" aria-label="View all services">
          View all services
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-45 group-hover:scale-125" />
        </Link>
      </Button>
    </section>
  );
};

export default Services;
