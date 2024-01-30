import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SERVICES_DATA } from "@/data/servicesData";

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
import { buildSearchQuery } from "@/lib/helper";

interface ServiceCardProps {
  service: (typeof SERVICES_DATA)[0]["subsections"][0];
  className?: string;
  serviceGroupTitle: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, serviceGroupTitle, className }) => {

  // prepare search query for the services page, e.g. services?service-group=brake-sevices
  const searchQuery = buildSearchQuery(serviceGroupTitle);

  return (
    <Card role="article" className={cn("max-w-[375px]", className)}>
      <CardHeader>
        {/* icon */}
        <Image
          src={service.icon}
          alt={service.title}
          quality={100}
          placeholder="blur"
          width={64}
          height={64}
          sizes="64px"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-y-3">
        {/* title */}
        <CardTitle className="capitalize">{service.title}</CardTitle>
        {/* description */}
        <CardDescription>{service.description}</CardDescription>
      </CardContent>

      <CardFooter>
        {/* button */}
        <Button
          variant={"outline"}
          className="group relative w-full rounded-md border-none ring-1 ring-grayBorder duration-300 hover:bg-black/10 hover:text-black"
          asChild
        >
          <Link
            href={`/services?${searchQuery}`}
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
