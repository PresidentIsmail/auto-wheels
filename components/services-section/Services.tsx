import React from "react";

import { top5AutoRepairServices } from "@/data/servicesData";

import ServiceItem from "@/components/services-section/ServiceItem";

const Services: React.FC = () => {
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
        <h3 className="text-xs font-bold uppercase text-[#92959a] md:text-sm">
          Services
        </h3>
        {/* title */}
        <h2 className="text-3xl font-bold tracking-tight text-[#222020] md:text-4xl lg:text-5xl">
          Explore our auto repair services in detail
        </h2>
      </header>

      {/* Services */}
      {top5AutoRepairServices.map((service) => (
        <ServiceItem key={service.heading} service={service} />
      ))}
    </section>
  );
};

export default Services;
