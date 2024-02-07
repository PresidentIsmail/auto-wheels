import React from "react";
import Link from "next/link";

import { contactInfo } from "@/data/contactData";
import { cn } from "@/lib/utils";

import { Card, CardHeader } from "@/components/ui/card";
import WhatsappButton from "../ui/WhatsappButton";
import ContactButton from "../ui/ContactButton";

const ContactDetails: React.FC = () => {
  return (
    <article
      aria-label="Contact Details"
      className="master-container mb-8 grid w-full justify-between gap-x-4 gap-y-4 md:grid-cols-2 lg:mb-0 2xl:grid-cols-3"
    >
      {contactInfo.map((info, index) => (
        <NormalCard key={index} info={info} index={index} />
      ))}
    </article>
  );
};

type ContactInfo = {
  info: (typeof contactInfo)[0];
  index: number;
  className?: string;
};

const NormalCard: React.FC<ContactInfo> = ({ info, index, className }) => {
  return (
    <Card
      className={cn("", className, {
        "md:col-span-2 2xl:col-span-1": index === contactInfo.length - 1,
      })}
    >
      <CardContent info={info} />
    </Card>
  );
};


const CardContent: React.FC<{ info: (typeof contactInfo)[0] }> = ({ info }) => {
  return (
    <CardHeader className="flex h-full flex-row gap-x-4 space-y-0 p-4">
      {/* icon */}
      <info.Icon
        aria-hidden="true"
        focusable="false"
        aria-label={info.type}
        className="h-6 w-6 shrink-0 translate-y-[2px] text-brand"
      />

      <div className="relative flex flex-col gap-y-2">
        {/* type (eg: Phone) */}
        <h3 className="mb-2 text-lg font-bold uppercase text-black">
          {info.type}
        </h3>

        {/* value (eg: 123-456-7890) */}
        {info.value.map((text) => (
          <p key={text} className="text-pretty text-sm  text-muted-foreground">
            {text}
          </p>
        ))}

        {/* whatsapp button, if there is "phone" in the info.type */}
        {info.type.toLowerCase().includes("phone") && (
          <div className="mt-2 space-y-4">
            <p className="text-sm text-muted-foreground">
              Tap below to WhatsApp us (if installed), or message us at{" "}
              <span className="text-nowrap underline underline-offset-2">
                018-381-5505.
              </span>
            </p>
            <WhatsappButton>
              <span className="text-xs font-medium text-white">
                Chat on WhatsApp
              </span>
            </WhatsappButton>
          </div>
        )}

        {/* map button, if there is "address" in the info.type */}
        {info.type.toLowerCase().includes("address") && (
          <ContactButton contactType="maps" />
        )}
      </div>
    </CardHeader>
  );
};

export default ContactDetails;
