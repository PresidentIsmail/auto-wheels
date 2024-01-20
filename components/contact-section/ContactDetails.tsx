import React from "react";
import Link from "next/link";

import { contactInfo } from "@/data/contactData";

import { Card, CardHeader } from "@/components/ui/card";

const ANIMATION_DURATION = 0.05;

const ContactDetails: React.FC = () => {
  return (
    <article
      aria-label="Contact Details"
      className="master-container mb-8 grid min-h-[400px] w-full justify-between gap-x-4 gap-y-4 sm:grid-cols-2 lg:col-span-5 lg:mb-0 lg:grid-cols-1"
    >
      {contactInfo.map((info, index) =>
        info.link ? (
          <LinkCard key={info.id} info={info} index={index} />
        ) : (
          <NormalCard key={index} info={info} index={index} />
        ),
      )}
    </article>
  );
};

type ContactInfo = {
  info: (typeof contactInfo)[0];
  index: number;
};

const NormalCard: React.FC<ContactInfo> = ({ info, index }) => {
  return (
    <Card
      className={`${
        index === contactInfo.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
      }  lg:max-w-[30%]`}
    >
      <CardContent info={info} />
    </Card>
  );
};

const LinkCard: React.FC<ContactInfo> = ({ info, index }) => {
  return (
    <Link
      href={info.link as string}
      className={`${
        index === contactInfo.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
      }  rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-lg lg:max-w-[30%]`}
    >
      <CardContent info={info} />
    </Link>
  );
};

const CardContent: React.FC<{ info: (typeof contactInfo)[0] }> = ({ info }) => {
  return (
    <CardHeader className="flex flex-row gap-x-4 space-y-0 p-4">
      {/* icon */}
      <info.Icon
        aria-hidden="true"
        focusable="false"
        aria-label={info.type}
        className="h-6 w-6 shrink-0 translate-y-[2px] text-brand"
      />

      <div className="flex flex-col gap-y-2">
        {/* type (eg: Phone) */}
        <h3 className="text-lg  font-bold uppercase text-black">{info.type}</h3>

        {/* value (eg: 123-456-7890) */}
        {info.value.map((text) => (
          <p
            key={text}
            className="text-pretty text-sm font-medium text-black/70"
          >
            {text}
          </p>
        ))}
      </div>
    </CardHeader>
  );
};

export default ContactDetails;
