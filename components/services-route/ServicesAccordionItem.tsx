import React from "react";

import { cn } from "@/lib/utils";
import { SERVICES_DATA } from "@/data/servicesData";
import { normalizeString } from "@/lib/helper";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import ServiceCard from "../services-section/ServiceCard";

interface ServicesAccordionItemProps {
  serviceGroup: (typeof SERVICES_DATA)[0];
  className?: string;
}

const ServicesAccordionItem: React.FC<ServicesAccordionItemProps> = ({
  serviceGroup,
  className,
}) => {
  return (
    <AccordionItem
      value={normalizeString(serviceGroup.sectionTitle)}
      className={cn(
        "border-b-2 border-[#6F7682] bg-transparent p-0 text-[#6F7682] transition-all duration-0 hover:border-black hover:text-black data-[state=open]:border-black",
        className,
      )}
    >
      <AccordionTrigger
        as={"h2"}
        arrowType="right"
        className={cn(
          "text-start text-lg font-bold tracking-wide hover:no-underline focus-visible:text-black data-[state=open]:border-b-2 data-[state=open]:text-black sm:text-xl md:text-2xl lg:text-3xl",
        )}
      >
        {serviceGroup.sectionTitle}
      </AccordionTrigger>
      <AccordionContent className="text-normal flex flex-wrap justify-center gap-8 px-0 py-6 text-base sm:justify-start md:flex-row lg:py-8">
        {/* Service cards of services in the group */}
        {serviceGroup.subsections.map((service) => (
          <ServiceCard
            key={service.title}
            serviceGroupTitle={serviceGroup.sectionTitle}
            service={service}
            className="max-w-[350px] shrink-0 bg-white/50"
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default ServicesAccordionItem;
