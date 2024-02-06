"use client";

import React from "react";

import HackerEffect from "@/components/HackerEffect";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardHeader } from "@/components/ui/card";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center overflow-hidden">
      <Dialog>
        <DialogTrigger className="rounded border px-3 py-2">Open</DialogTrigger>
        <DialogContent className="gap-8">
          {/* ===== Title and description ===== */}
          <div className="flex flex-col gap-2 md:gap-4">
            <HackerEffect
              tag="h2"
              displayText="Find out More About Brake Services"
              className="text-xl font-bold capitalize leading-none tracking-tight md:text-2xl"
            />

            <p className="text-xs text-muted-foreground md:text-sm">
              For any questions or information requests regarding Brake
              Services, contact us through the following methods.
            </p>
          </div>

          {/* ===== Contact methods ===== */}
          <div className="flex flex-col gap-6">
            {/* whatsapp */}
            <Card>
              <div className="flex flex-col gap-y-2 p-6">
                <h3 className="text-base font-bold">Chat on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with us effortlessly on WhatsApp by tapping the button
                  below (if WhatsApp is installed on your current device).
                  Alternatively, you can message us at 018-381-5505
                </p>
                <WhatsappButton
                  className="w-full"
                  message="I'm interested in your brake services"
                >
                  Chat on WhatsApp
                </WhatsappButton>
              </div>
            </Card>

            {/* phone */}

            {/* location */}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
