import React from "react";
import Image from "next/image";
import Link from "next/link";

import { top5AutoRepairServices } from "@/data/servicesData";

import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: (typeof top5AutoRepairServices)[number];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  return (
    <Card role="article" className={cn("max-w-[375px]", className)}>
      <CardHeader>
        {/* icon */}
        <Image
          src={service.icon}
          alt={service.heading}
          quality={100}
          placeholder="blur"
          width={64}
          height={64}
          sizes="64px"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        {/* title */}
        <CardTitle className="capitalize">{service.heading}</CardTitle>
        {/* description */}
        <CardDescription>{service.description}</CardDescription>
      </CardContent>

      <CardFooter>
        {/* button */}
        <Button
          variant={"outline"}
          className="group relative w-full rounded-md border-none ring-1 ring-grayBorder duration-300 hover:bg-black hover:text-white"
          asChild
        >
          <Link
            href={"#"}
            role="button"
            aria-label="Learn more about our services"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 text-brand transition-transform group-hover:-rotate-45 group-hover:scale-125 group-focus-visible:-rotate-45 group-focus-visible:scale-125" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
