"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { NAV_ITEMS, SERVICES_DATA } from "@/constants";

import { ChevronRight } from "lucide-react";


type LinkItemProps = {
  type: "link";
  navItem: (typeof NAV_ITEMS)[number] | (typeof SERVICES_DATA)[number];
};

type ButtonItemProps = {
  type: "button";
  navItem: (typeof NAV_ITEMS)[number] | (typeof SERVICES_DATA)[number];
  onClick: () => void;
};

type MobileNavItemProps = LinkItemProps | ButtonItemProps;

const MobileNavItem: React.FC<MobileNavItemProps> = (props) => {
  if (props.type === "link") {
    return (
      <Link
        href={"#"}
        className="flex w-full items-center gap-x-1.5 p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10 "
        aria-label={props.navItem.label}
      >
        {"icon" in props.navItem && (
          <Image
            src={props.navItem.icon as string}
            alt={props.navItem.label}
            width={16}
            height={16}
          />
        )}
        {props.navItem.label}
      </Link>
    );
  }

  if (props.type === "button") {
    return (
      <button
        onClick={props.onClick}
        className={`block w-full p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10`}
        aria-label={props.navItem.label}
      >
        <span className="flex items-center justify-between gap-1">
          {props.navItem.label}
          <ChevronRight />
        </span>
      </button>
    );
  }

  return null;
};

export default MobileNavItem;
