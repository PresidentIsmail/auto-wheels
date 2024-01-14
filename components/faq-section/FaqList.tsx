import React from "react";

import { faqData } from "@/data/faqData";
import SlideInContent from "../SlideInContent";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqItem from "./FaqItem";

const FaqList: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full lg:w-[60%]">
      {faqData.map((faq, index) => (
        <SlideInContent key={faq.id} delay={index * 0.25} direction="slideLeft">
          <FaqItem
            value={index.toString()}
            question={faq.question}
            answer={faq.answer}
          />
        </SlideInContent>
      ))}
    </Accordion>
  );
};

export default FaqList;
