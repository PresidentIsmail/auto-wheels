"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, ArrowDown, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  className?: string;
  children?: React.ReactNode;
  arrowType?: "down" | "right";
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, arrowType = "down", ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
        className,
        {
          "[&[data-state=open]>svg]:rotate-180": arrowType === "down",
          "[&[data-state=open]>svg]:rotate-90": arrowType === "right",
        },
      )}
      {...props}
    >
      {children}

      {/* Option of picking an arrow */}
      {arrowType === "down" ? (
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      ) : null}
      {arrowType === "right" ? (
        <ArrowRight
          className="h-6 w-6 shrink-0 rounded-full p-1 ring-[1.5px] ring-current transition-transform duration-200 md:h-8 md:w-8 lg:h-10 lg:w-10"
          strokeWidth={1.5}
        />
      ) : null}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
