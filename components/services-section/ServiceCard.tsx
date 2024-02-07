import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buildSearchQuery } from "@/lib/helper";
import { SERVICES_DATA } from "@/data/servicesData";

import { ArrowRight, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ContactModalBody from "@/components/ContactModalBody";

// type that gives an option to display the description or to display the list of serivices
type DisplayOption = "description" | "services";

interface ServiceCardProps {
  service: (typeof SERVICES_DATA)[0]["subsections"][0];
  className?: string;
  serviceGroupTitle: string;
  displayOption?: DisplayOption;
  openModal: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  serviceGroupTitle,
  displayOption = "description",
  openModal,
  className,
}) => {
  // prepare search query for the services page, e.g. services?service-group=brake-sevices. used to determine which accordion item to open
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
        {displayOption === "description" ? (
          <CardDescription>{service.description}</CardDescription>
        ) : (
          <ul className="flex flex-col gap-y-2">
            {service.services.map((service, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                &ndash; {service}
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter>
        {/* Either opens a modal or navigates the users to /services?... */}
        <ServiceButton openModal={openModal} searchQuery={searchQuery} />
      </CardFooter>
    </Card>
  );
};

interface ServiceButtonProps {
  openModal: boolean;
  searchQuery: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  openModal,
  searchQuery,
}) => {
  if (openModal) {
    return (
      <Dialog> 
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="group relative w-full rounded-md border-none ring-1 ring-black  duration-300 hover:bg-black/10 hover:text-black"
          >
            <Info className="mr-2 h-5 w-5 text-brand" />
            View Details
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl gap-8">
          <ContactModalBody />
        </DialogContent>
      </Dialog>
    );
  } else {
    return (
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
          Explore More
          <ArrowRight className="ml-2 h-4 w-4 text-brand transition-transform group-hover:-rotate-45 group-hover:scale-125 group-focus-visible:-rotate-45 group-focus-visible:scale-125" />
        </Link>
      </Button>
    );
  }
};

export default ServiceCard;
