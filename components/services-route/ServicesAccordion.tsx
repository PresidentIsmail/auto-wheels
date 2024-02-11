"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { SERVICES_DATA, sectionTitleExists } from "@/data/servicesData";

import { Accordion } from "../ui/accordion";
import FadeInContent from "../FadeInContent";
import ServicesAccordionItem from "./ServicesAccordionItem";
import { normalizeString } from "@/lib/helper";

const ServicesAccordion: React.FC = () => {
  const searchParams: string | null = useSearchParams().get("service-group");

  // Normalize the searchParams once and reuse it
  const normalizedSearchParams = normalizeString(searchParams as string);

  // Determines the accordion item to open initially. If a service group is selected (indicated by search parameters) and exists in 'SERVICES_DATA',
  // that accordion item is opened. Otherwise, the first accordion item is opened by default.
  const openAccordionItemId = sectionTitleExists(normalizedSearchParams)
    ? normalizedSearchParams
    : normalizeString(SERVICES_DATA[0].sectionTitle);

  useEffect(() => {
    const accordionItem = document.getElementById(openAccordionItemId);

    if (accordionItem) {
      accordionItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [openAccordionItemId]);

  return (
    <Accordion
      id="services-accordion"
      key={openAccordionItemId}
      type="single"
      defaultValue={openAccordionItemId}
      collapsible
      className="w-full space-y-2 lg:space-y-4"
    >
      {SERVICES_DATA.map((serviceGroup, index) => (
        <FadeInContent
          id={normalizeString(serviceGroup.sectionTitle)}
          key={serviceGroup.sectionTitle}
          delay={index * 0.25}
        >
          <ServicesAccordionItem serviceGroup={serviceGroup} />
        </FadeInContent>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
