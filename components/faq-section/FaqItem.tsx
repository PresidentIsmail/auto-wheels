import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItemProps = {
  value: string;
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ value, question, answer }) => {
  return (
    <AccordionItem
      value={value}
      className=" border-b-2 border-grayBorder bg-transparent p-0  "
    >
      <AccordionTrigger className="font-medium tracking-wide text-white hover:bg-white/10 hover:no-underline focus-visible:bg-white/10">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-0  text-white/80">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
