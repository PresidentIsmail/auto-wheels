import React from "react";
import Image from "next/image";

import { BRANDS } from "@/constants";

const BrandLogoDisplay: React.FC = () => {
  return (
    <div
      className={
        "flex h-max select-none flex-row gap-x-12 pe-12 md:gap-x-16 md:pe-16 lg:gap-x-24 lg:pe-24 xl:gap-x-32 xl:pe-32"
      }
    >
      {BRANDS.map((brand, index) => (
        <div key={index} className="w-max">
          <Image
            src={brand.image}
            alt={`Logo of ${brand.name}`}
            quality={100}
            sizes=" (max-width: 1024px) 33vw, (min-width: 1025px) 25vw"
            className={"h-[24px] w-auto md:h-[32px] lg:h-[40px]"}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(BrandLogoDisplay);
