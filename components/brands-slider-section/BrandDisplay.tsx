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
      <div
        ref={ref}
        className={cn(
          "flex h-max flex-row gap-x-8 md:gap-x-16 lg:gap-x-24 xl:gap-x-32",
          className,
        )}
      >
        {BRANDS.map((brand, index) => (
          <div key={index} className="w-max">
            <Image
              src={brand.image}
              alt={`Logo of ${brand.name}`}
              placeholder="blur"
              sizes=" (max-width: 1024px) 33vw, (min-width: 1025px) 25vw"
              className={"h-[35px] w-auto md:h-[40px] lg:h-[45px] xl:h-[50px]"}
            />
          </div>
        ))}
      </div>
    );
  },
);

BrandDisplay.displayName = "BrandDisplay";

export default React.memo(BrandDisplay);
