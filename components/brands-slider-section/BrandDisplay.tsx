import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { BRANDS } from "@/constants";

type BrandDisplayProps = {
  className?: string;
};

const BrandDisplay = React.forwardRef<HTMLDivElement, BrandDisplayProps>(
  ({ className }, ref) => {
    return (
      <div className={cn("flex flex-row gap-x-10", className)}>
        {BRANDS.map((brand, index) => (
          <div key={index} className="w-max">
            <Image
              src={brand.image}
              alt={`Logo of ${brand.name}`}
              placeholder="blur"
              sizes=" (max-width: 1024px) 33vw, (min-width: 1025px) 25vw"
              className={
                "h-[25px] sm:h-[30px] md:h-[35px] lg:h-[45px] xl:h-[50px]"
              }
            />
          </div>
        ))}
      </div>
    );
  },
);

BrandDisplay.displayName = "BrandDisplay";

export default BrandDisplay;
