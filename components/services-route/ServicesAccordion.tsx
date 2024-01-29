import React from "react";

import { SERVICES_DATA } from "@/data/servicesData";

import { Accordion } from "../ui/accordion";
import SlideInContent from "../SlideInContent";
import FadeInContent from "../FadeInContent";
import ServicesAccordionItem from "./ServicesAccordionItem";

const ServicesAccordion: React.FC = () => {
  return (
    <Accordion
      id="services-accordion"
      type="single"
      defaultValue={SERVICES_DATA[0].sectionId}
      collapsible
      className="w-full space-y-2 lg:space-y-4"
    >
      {SERVICES_DATA.map((serviceGroup, index) => (
        <FadeInContent key={serviceGroup.sectionId} delay={index * 0.25}>
          <ServicesAccordionItem serviceGroup={serviceGroup} />
        </FadeInContent>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
