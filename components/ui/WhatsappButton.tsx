"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/helper";

import whatsappWhite from "@/public/icons/whatsapp-white.png";
import { BUSINESS_TELEPHONE_NUMBER } from "@/constants";
import { Button } from "./button";

interface WhatsappButtonProps {
  children: React.ReactNode;
  variant?: "whatsappSecondary" | "whatsappPrimary";
  className?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  children,
  variant = "whatsappPrimary",
  className,
}) => {
  const handleButtonClick = () => {
    // Implement your logic here
  };

  return (
    <>
      <Button variant={variant} asChild>
        <Link
          href={`tel:${BUSINESS_TELEPHONE_NUMBER}`}
          aria-label={`Call us at ${BUSINESS_TELEPHONE_NUMBER}`}
          className={cn("gap-x-2", className)}
        >
          <Image
            src={whatsappWhite}
            alt="Whatsapp"
            height={40}
            width={40}
            sizes="64px"
            className="h-4 w-4 lg:h-5 lg:w-5"
          />
          {children}
        </Link>
      </Button>
    </>
  );
};

export default WhatsappButton;
