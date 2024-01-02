import React from "react";
import Image from "next/image";

import tireBg from "@/public/images/tyre-bg-01.webp";

const TireSelection: React.FC = () => {
  return (
    <section
      aria-label="Tire Selection Section"
      className="relative min-h-[500px] w-full pb-24 text-white lg:pb-0"
      style={{
        clipPath: "var(--clip-path)",
      }}
    >
      {/* background image */}
      <Image
        src={tireBg}
        alt="Tire Selection Background"
        fill
        sizes="100vw"
        quality={70}
        placeholder="blur"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover object-center brightness-[25%]"
      />
      {/* overlay on background image */}
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-brand opacity-[5%]" />

      {/* Header */}
      <header className="master-container relative z-10 pt-6">
        <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
          Find the Perfect Tires for Your Vehicle.
        </h2>
      </header>
    </section>
  );
};

export default TireSelection;
