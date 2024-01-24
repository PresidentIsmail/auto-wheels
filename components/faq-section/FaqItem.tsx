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
        "group border-grayBorder bg-transparent p-0  transition-all hover:border-white data-[state=open]:border-white",
        className,
      )}
    >
      <AccordionTrigger className="text-start text-sm font-medium tracking-wide text-white/70 hover:no-underline focus-visible:text-white group-hover:text-white data-[state=open]:text-white lg:text-base">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-0  text-white/80">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
