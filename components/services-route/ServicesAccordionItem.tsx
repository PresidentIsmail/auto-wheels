import React from 'react';

import { cn } from '@/lib/utils';
import { SERVICES_DATA_GROUPED } from '@/data/servicesData';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";
import ServiceCard from '../services-section/ServiceCard';

interface ServicesAccordionItemProps {
    serviceGroup: typeof SERVICES_DATA_GROUPED[0];
    className?: string;
}

const ServicesAccordionItem: React.FC<ServicesAccordionItemProps> = ({serviceGroup, className}) => {

    return (
        <AccordionItem
        value={serviceGroup.title}
        className={cn(
          "group border-grayBorder bg-transparent p-0 transition-all hover:border-black data-[state=open]:border-black",
        )}
      >
        <AccordionTrigger className="text-start text-sm font-medium tracking-wide text-black/70 hover:no-underline focus-visible:text-black group-hover:text-black data-[state=open]:text-black lg:text-base">
          {serviceGroup.title}
        </AccordionTrigger>
        <AccordionContent className="text-normal flex flex-col md:flex-row  gap-8 px-0 text-base">
          {/* Service cards of services in the group */}
          {serviceGroup.services.map((service) => (
            <ServiceCard key={service.heading} service={service} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
};

export default ServicesAccordionItem;
