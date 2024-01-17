"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/helper";

import whatsappWhite from "@/public/icons/whatsapp-white.png";
import { BUSINESS_TELEPHONE_NUMBER } from "@/constants";
import { Button } from "./button";

interface WhatsappButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "whatsappSecondary" | "whatsappPrimary";
  message?: string;
  className?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  children,
  variant = "whatsappPrimary",
  className,
  message = "Hello, I'm interested in your auto repair services.",
  ...props
}) => {
  const whatsappLink = generateWhatsAppLink(message);

  return (
    <>
      <Button variant={variant} asChild {...props}>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("gap-x-2", className)}
        >
          <Image
            src={whatsappWhite}
            alt="Whatsapp Logo"
            height={40}
            width={40}
            priority
            className="h-4 w-4 lg:h-5 lg:w-5"
          />
          {children}
        </Link>
      </Button>
    </>
  );
};

export default WhatsappButton;
