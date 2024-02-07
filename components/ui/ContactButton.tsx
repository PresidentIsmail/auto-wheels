"use client";

import React from "react";
import Link from "next/link";

import {
  BUSINESS_TELEPHONE_NUMBER,
  BUSINESS_ADDRESS_ON_GOOGLE_MAPS,
} from "@/constants";

import { Phone, MapPin } from "lucide-react";
import { Button } from "./button";

interface ContactButtonProps {
  contactType: "phone" | "maps";
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  contactType,
  className,
}) => {
  // prepare the link href based on the contact type
  let linkHref = "";
  if (contactType === "phone") {
    linkHref = `tel:${BUSINESS_TELEPHONE_NUMBER}`;
  } else if (contactType === "maps") {
    linkHref = BUSINESS_ADDRESS_ON_GOOGLE_MAPS;
  }

  return contactType === "phone" ? (
    <Button
      asChild
      className="w-fit border border-[#0C8CE9] bg-[#0C8CE9] text-xs font-bold tracking-wider text-white hover:bg-[#0C8CE9]/80 xl:text-xs"
    >
      <Link href={linkHref} rel="noopener noreferrer">
        <Phone className="mr-2 inline-block h-4 w-4" />
        Open Phone App
      </Link>
    </Button>
  ) : contactType === "maps" ? (
    <Button className="mt-2 w-fit text-xs font-bold tracking-wider xl:text-xs">
    <Link href={linkHref} target="_blank" rel="noopener noreferrer">
      <MapPin className="mr-2 inline-block h-4 w-4" /> Open In Google Maps
    </Link>
  </Button>
    ) : null;
};

export default ContactButton;
