import React from "react";
import Image from "next/image";

import tireBg from "@/public/images/tyre-bg-01.webp";

import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import TireSelectionInput from "./TireSelectionInput";

const TireSelection: React.FC = () => {
  return (
    <section
      aria-label="Section for selecting the tire size for your vehicle"
      className="relative  w-full pb-16 pt-8 text-white lg:pb-32"
    >
      <BackgroundImageWithOverlay />

      {/* Content */}
      <article className="master-container relative z-10 flex flex-col gap-y-6">
        {/* Header */}
        <header className="">
          <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-4xl">
            Find the Perfect Tires for Your Vehicle.
          </h2>
        </header>

        <section className="relative flex w-full flex-col gap-y-8 rounded-none bg-[#323236]/80 px-4 py-6">
          <div className="">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Tell us your tire size
            </h3>
            <TireSizePopover />
          </div>

          <TireSelectionInput />
        </section>
      </article>
    </section>
  );
};

const BackgroundImageWithOverlay: React.FC = () => (
  <>
    <Image
      src={tireBg}
      alt="Tire Selection Background"
      fill
      sizes="100vw"
      quality={70}
      placeholder="blur"
      className="absolute left-0 top-0 z-0 h-full w-full object-cover object-center brightness-[25%]"
      style={{
        clipPath: "var(--clip-path)",
      }}
    />
    <div
      className="absolute left-0 top-0 z-0 h-full w-full bg-brand opacity-[5%]"
      style={{
        clipPath: "var(--clip-path)",
      }}
    />
  </>
);

const TireSizePopover: React.FC = () => (
  <Dialog>
    <DialogTrigger className="decoration-white/80 underline-offset-2 hover:underline">
      <p className="text-xs font-normal italic text-white/80 ">
        <span className="inline-block translate-y-[3px]">
          <Info className="h-4 w-4" />
        </span>{" "}
        Need help with your tire size?
      </p>
    </DialogTrigger>
    <DialogContent>Place content for the Dialog here.</DialogContent>
  </Dialog>
);

export default TireSelection;
