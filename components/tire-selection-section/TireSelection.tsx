import React from "react";
import Image from "next/image";

import tireBg from "@/public/images/tyre-bg-01.webp";

const TireSelection: React.FC = () => {
  return (
    <section
      aria-label="Tire Selection Section"
      className="relative min-h-[500px] w-full text-white "
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
        className="absolute left-0 top-0 z-0 h-full w-full object-cover object-center"
        style={{
          filter: "brightness(0.3)",
        }}
      />

      {/* Header */}
      <div className="master-container relative z-10 pt-6">
        <h2 className="text-2xl font-extrabold">
          Find the Perfect Tires for Your Vehicle.
        </h2>
      </div>
    </section>
  );
};

export default TireSelection;
