import React from "react";

import { contactInfo } from "@/data/contactData";

import { Card, CardHeader } from "@/components/ui/card";

const ANIMATION_DURATION = 0.05;

const ContactDetails: React.FC = () => {
  return (
    <article
      aria-label="Contact Details"
      className="master-container mb-8 grid min-h-[400px] w-full justify-between gap-x-4 gap-y-4 sm:grid-cols-2 lg:col-span-5 lg:mb-0 lg:grid-cols-1"
    >
      {contactInfo.map((info, index) => (
        <Card
          key={info.id}
          className={`${
            index === contactInfo.length - 1
              ? "sm:col-span-2 lg:col-span-1"
              : ""
          } lg:max-w-[30%]`}
        >
          <CardHeader className="flex flex-row gap-x-4 space-y-0 p-4">
            {/* icon */}
              <info.Icon
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6 shrink-0 translate-y-[2px] text-brand"
              />

            <div className="flex flex-col gap-y-2">
              {/* type (eg: Phone) */}
              <h3 className="text-lg  font-bold uppercase text-black">
                {info.type}
              </h3>

              {/* value (eg: 123-456-7890) */}
              {info.value.map((text, index) => (
                <p
                  key={index}
                  className="text-pretty text-sm font-medium text-black/70"
                >
                  {text}
                </p>
              ))}
            </div>
          </CardHeader>
        </Card>
      ))}
    </article>
  );
};

export default ContactDetails;
