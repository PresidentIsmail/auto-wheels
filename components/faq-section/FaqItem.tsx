import React from "react";

import { cn } from "@/lib/utils";

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
  className?: string;
};

const FaqItem: React.FC<FaqItemProps> = ({
  value,
  question,
  answer,
  className,
}) => {
  return (
    <AccordionItem
      value={value}
      className={cn(
        " border-b-2 border-grayBorder bg-transparent p-0 ",
        className,
      )}
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
