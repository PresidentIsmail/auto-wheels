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
    <Accordion type="single" collapsible className="w-full lg:w-[60%]">
      {faqData.map((faq, index) => (
        <SlideInContent key={faq.id} delay={index * 0.25} direction="slideUp">
          <FaqItem
            value={index.toString()}
            question={faq.question}
            answer={faq.answer}
            // give a border-t to the first item
            className={index === 0 ? "border-t-2 border-grayBorder" : ""}
          />
        </SlideInContent>
      ))}
    </Accordion>
  );
};

export default FaqList;
