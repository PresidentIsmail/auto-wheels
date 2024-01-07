import { FC } from "react";

import { top5AutoRepairServices } from "@/data/servicesData";

import ServiceItem from "@/components/services-section/ServiceItem";
import AnimatedText from "../AnimatedText";

const Services: FC = () => {
  return (
    <section
      aria-label="Services"
      id="services"
      role="region"
      className="master-container grid gap-x-8 gap-y-16 pt-16 sm:grid-cols-2 lg:pt-[72px] xl:grid-cols-3"
    >
      {/* Heading */}
      <header className="flex w-full flex-col gap-y-3 md:gap-y-4">
        {/* subtitle */}
        <AnimatedText
          text="Services"
          element="h3"
          className="text-xs font-bold uppercase text-[#92959a] md:text-sm"
          duration={0.075}
        />
        {/* title */}
        <AnimatedText
          text="Explore our auto repair services in detail"
          element="h2"
          className="text-3xl font-bold tracking-tight text-[#222020] md:text-4xl lg:text-5xl"
          duration={0.075}
        />
      </header>

      {/* Services */}
      {top5AutoRepairServices.map((service, index) => (
        <ServiceItem key={service.heading} service={service} />
      ))}
    </section>
  );
};

export default Services;
