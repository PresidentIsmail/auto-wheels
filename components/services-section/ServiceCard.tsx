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

interface ServiceCardProps {
  service: (typeof top5AutoRepairServices)[number];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card role="article">
      <CardHeader>
        {/* icon */}
        <Image
          src={service.icon}
          alt={service.heading}
          width={64}
          height={64}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        {/* title */}
        <CardTitle>{service.heading}</CardTitle>
        {/* description */}
        <CardDescription>{service.description}</CardDescription>
      </CardContent>

      <CardFooter>
        {/* button */}
        <Button
          variant={"outline"}
          className="group rounded-md hover:bg-black/10"
          asChild
        >
          <Link
            href={"#"}
            role="button"
            aria-label="Learn more about our services"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-45 group-hover:text-brand" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
