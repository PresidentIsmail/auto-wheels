"use client";

import React from "react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactModalBody from "@/components/ContactModalBody";

export default function TestPage() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center overflow-hidden">
      <Dialog>
        <DialogTrigger className="rounded border px-3 py-2">Open</DialogTrigger>
        <DialogContent className="max-w-xl gap-8">
          <ContactModalBody />
        </DialogContent>
      </Dialog>
    </section>
  );
}
