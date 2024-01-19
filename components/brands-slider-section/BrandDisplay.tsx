import React from "react";
import Image from "next/image";

import { BRANDS } from "@/constants";

const BrandDisplay: React.FC = () => {
  return (
    <div
      className={
        "flex h-max flex-row gap-x-8 pe-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-32"
      }
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
};

export default React.memo(BrandDisplay);
