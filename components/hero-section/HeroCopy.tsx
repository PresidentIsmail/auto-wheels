import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { BUSINESS_TELEPHONE_NUMBER } from "@/constants";

import { Phone, Star } from "lucide-react";
import { Button } from "../ui/button";

type HeroCopyProps = React.HTMLAttributes<HTMLDivElement>;
// master-container flex w-[30%] flex-col items-start justify-between py-8
const HeroCopy: React.FC<HeroCopyProps> = ({className, ...props}) => {
  return (
    <section
      className={cn(
        "flex flex-col items-start justify-between pe-6 pb-6 col-span-1 mt-4",
        className,
      )}
      {...props}
    >
      {/* Heading */}
      <h1 className="text-6xl font-extrabold">
        Welcome to Auto Wheels & Exhaust
      </h1>
      <div className="flex flex-col gap-y-6">
        {/* Description */}
        <p className="text-base font-medium text-[#323236]">
          Your destination for precision auto services. From essential repairs
          to quality tires, our experts ensure top-notch care. Explore exclusive
          specials. Elevate your driving experience &mdash; contact us today.
        </p>

        {/* Button */}
        <Button variant={"secondary"} asChild className="w-max">
          <Link
            href={`tel:${BUSINESS_TELEPHONE_NUMBER}`}
            aria-label={`Call us at ${BUSINESS_TELEPHONE_NUMBER}`}
            className="hidden gap-x-2 md:flex"
          >
            <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
            Call Us
          </Link>
        </Button>

        {/* Start Ratings */}
        {/* <div className="flex items-center gap-x-1 ">
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
          <Star className="h-4 w-4 fill-[#f8b700] text-[#f8b700]" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroCopy;
