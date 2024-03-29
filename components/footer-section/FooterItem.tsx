import React from "react";
import Link from "next/link";

import { FOOTER_ITEMS } from "@/constants";

import AnimatedText from "../AnimatedText";

interface FooterItemProps {
  item: (typeof FOOTER_ITEMS)[number];
}

const FooterItem: React.FC<FooterItemProps> = ({ item }) => {
  return (
    <li className="flex shrink-0 flex-col gap-y-2 lg:w-1/3 lg:gap-y-4 ">
      <AnimatedText
        text={item.title}
        element="h3"
        className="text-pretty text-xl font-medium tracking-wider text-white"
        duration={0.05}
      />
      <ul className="flex flex-col gap-y-1">
        {item.links.map((link, index) => {
          return (
            <li
              key={index}
              className="w-max text-sm font-normal tracking-wide text-[#E6E6E6] underline-offset-2 transition hover:text-white hover:underline"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default FooterItem;
