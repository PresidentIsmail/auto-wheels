import React from "react";

import { cn } from "@/lib/utils";
import { SERVICES_DATA_GROUPED } from "@/data/servicesData";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import ServiceCard from "../services-section/ServiceCard";

interface ServicesAccordionItemProps {
  serviceGroup: (typeof SERVICES_DATA_GROUPED)[0];
  className?: string;
}

const ServicesAccordionItem: React.FC<ServicesAccordionItemProps> = ({
  serviceGroup,
  className,
}) => {
  return (
    <AccordionItem
      value={serviceGroup.title}
      className={cn(
        "border-b-2 border-[#6F7682] bg-transparent p-0 text-[#6F7682] transition-all duration-0 hover:border-black hover:text-black data-[state=open]:border-black",
        className,
      )}
    >
      <AccordionTrigger
        arrowType="right"
        className={cn(
          "text-start text-lg font-bold tracking-wide hover:no-underline focus-visible:text-black data-[state=open]:border-b-2 data-[state=open]:text-black sm:text-xl md:text-2xl lg:text-3xl",
        )}
      >
        {serviceGroup.title}
      </AccordionTrigger>
      <AccordionContent className="text-normal flex flex-col gap-8 px-0 py-6 text-base md:flex-row lg:py-8">
        {/* Service cards of services in the group */}
        {serviceGroup.services.map((service) => (
          <ServiceCard
            key={service.heading}
            service={service}
            className="bg-white/50"
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default ServicesAccordionItem;
