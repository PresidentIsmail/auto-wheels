import React from "react";

import HackerEffect from "@/components/HackerEffect";

import { Card } from "@/components/ui/card";
import WhatsappButton from "@/components/ui/WhatsappButton";
import ContactButton from "@/components/ui/ContactButton";

interface ContactModalBodyProps {
  // Define your component props here
}

const ContactModalBody: React.FC<ContactModalBodyProps> = (props) => {
  // Implement your component logic here

  return (
    <React.Fragment>
      {/* ===== Title and description ===== */}
      <div className="flex flex-col gap-2 pt-6 md:gap-4">
        <HackerEffect
          tag="h2"
          displayText="Find out More About Brake Services"
          className="text-xl font-bold capitalize leading-none tracking-tight md:text-2xl"
        />

        <p className="text-xs text-muted-foreground md:text-sm">
          For any questions or information requests regarding Brake Services,
          contact us through the following methods.
        </p>
      </div>

      {/* ===== Contact methods ===== */}
      <div className="flex flex-col gap-6">
        {/* == Group phone and location == */}
        <div className="flex h-max flex-col gap-6 lg:flex-row">
          {/* phone card on mobile */}
          <Card className="grow lg:hidden">
            <div className="flex flex-col gap-y-4 p-4">
              <h3 className="text-base font-bold">Call or WhatsApp Us</h3>
              <p className="text-sm text-muted-foreground">
                Tel:&nbsp;
                <span className="text-nowrap underline underline-offset-2">
                  018-381-5505.
                </span>
              </p>
              {/* Contact Buttons */}
              <div className="flex flex-col gap-y-2">
                <ContactButton contactType="phone" />

                <WhatsappButton
                  className="w-fit text-xs font-bold tracking-wider xl:text-xs"
                  message="I'm interested in your brake services"
                >
                  Chat on WhatsApp
                </WhatsappButton>
              </div>
            </div>
          </Card>

          {/* phone card on desktop */}
          <Card className="hidden grow lg:block">
            <div className="flex h-full flex-col justify-between p-4">
              <h3 className="text-base font-bold">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                Call us at{" "}
                <span className="text-nowrap underline underline-offset-2">
                  018-381-5505
                </span>
              </p>
              <ContactButton contactType="phone" />
            </div>
          </Card>

          {/* location */}
          <Card className="grow">
            <div className="flex flex-col gap-y-2 p-4">
              <h3 className="text-base font-bold">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                23 Nelson Mandela Dr, <br className="md:hidden lg:block" />
                Golf View, Mahikeng.
              </p>
              <ContactButton contactType="maps" />
            </div>
          </Card>
        </div>

        {/* whatsapp */}
        <Card className="hidden lg:block">
          <div className="flex flex-col gap-y-2 p-4">
            <h3 className="text-base font-bold">Chat on WhatsApp</h3>
            <p className="text-sm text-muted-foreground">
              Tap below to WhatsApp us (if installed), or message us at{" "}
              <span className="text-nowrap underline underline-offset-2">
                018-381-5505
              </span>
              .
            </p>
            <WhatsappButton
              className="mt-2 w-fit text-xs font-bold tracking-wider xl:text-xs"
              message="I'm interested in your brake services"
            >
              Chat on WhatsApp
            </WhatsappButton>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ContactModalBody;
