import React from "react";

import { SERVICES_DATA_GROUPED } from "@/data/servicesData";

import { Accordion } from "../ui/accordion";
import SlideInContent from "../SlideInContent";
import FadeInContent from "../FadeInContent";
import ServicesAccordionItem from "./ServicesAccordionItem";

const ServicesAccordion: React.FC = () => {
  return (
    <Accordion
      id="services-accordion"
      type="single"
      defaultValue={SERVICES_DATA_GROUPED[0].title}
      collapsible
      className="w-full space-y-2 lg:space-y-4"
    >
      {SERVICES_DATA_GROUPED.map((serviceGroup, index) => (
        <FadeInContent key={serviceGroup.id} delay={index * 0.25}>
          <ServicesAccordionItem serviceGroup={serviceGroup} />
        </FadeInContent>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
