"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { SERVICES_DATA, sectionTitleExists } from "@/data/servicesData";

import { Accordion } from "../ui/accordion";
import FadeInContent from "../FadeInContent";
import ServicesAccordionItem from "./ServicesAccordionItem";
import { normalizeString } from "@/lib/helper";

const ServicesAccordion: React.FC = () => {
  const searchParams: string | null = useSearchParams().get("service-group");

  // if the user has selected a service group, open the corresponding accordion item. if not, open the first one by default. first check if the search params exist in SERVICES_DATA, if not, open the first one by default
  const openAccordionItemId = sectionTitleExists(searchParams as string)
    ? (searchParams as string)
    : normalizeString(SERVICES_DATA[0].sectionTitle);

  // rearrange the with the openAccordionItem as the first in the array
  // find the item that needs to be first
  const openItemObject = SERVICES_DATA.find(
    (item) => normalizeString(item.sectionTitle) === openAccordionItemId,
  )!;

  // filter out the openItem from the original array
  const remainingItems = SERVICES_DATA.filter(
    (item) => normalizeString(item.sectionTitle) !== openAccordionItemId,
  );

  // combine the openItem and the remainingItems to get the rearranged array
  const rearrangedServicesData = [openItemObject, ...remainingItems];

  return (
    <Accordion
      id="services-accordion"
      key={openAccordionItemId}
      type="single"
      defaultValue={openAccordionItemId}
      collapsible
      className="w-full space-y-2 lg:space-y-4"
    >
      {rearrangedServicesData.map((serviceGroup, index) => (
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
