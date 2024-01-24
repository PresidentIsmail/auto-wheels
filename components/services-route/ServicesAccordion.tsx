import React from "react";

import { SERVICES_DATA_GROUPED } from "@/data/servicesData";

import { Accordion } from "../ui/accordion";
import SlideInContent from "../SlideInContent";
import ServicesAccordionItem from "./ServicesAccordionItem";

const ServicesAccordion: React.FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-2 lg:space-y-4"
    >
      {SERVICES_DATA_GROUPED.map((serviceGroup, index) => (
        <SlideInContent
          key={serviceGroup.id}
          delay={index * 0.25}
          direction="slideUp"
        >
          <ServicesAccordionItem serviceGroup={serviceGroup} />
        </SlideInContent>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
