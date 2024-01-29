import React from "react";

import { faqData } from "@/data/faqData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqItem from "./FaqItem";
import SlideInContent from "../SlideInContent";

const FaqList: React.FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:w-[60%]"
      defaultValue={faqData[0].id}
    >
      {faqData.map((faq, index) => (
        <SlideInContent key={faq.id} delay={index * 0.25} direction="slideUp">
          <FaqItem value={faq.id} question={faq.question} answer={faq.answer} />
        </SlideInContent>
      ))}
    </Accordion>
  );
};

export default FaqList;
