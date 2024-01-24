import React from "react";

import { SERVICES_DATA_GROUPED } from "@/data/servicesData";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import SlideInContent from "../SlideInContent";
import ServicesAccordionItem from "./ServicesAccordionItem";

// =================================================================================
// TODO: Seperate the accordionItem into its own component and dynamically import it
// =================================================================================

const ServicesAccordion: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
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
