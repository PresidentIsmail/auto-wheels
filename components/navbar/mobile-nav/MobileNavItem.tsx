"use client";

import React from "react";
import Link from "next/link";

import { NAV_ITEMS } from "@/constants";

import { ChevronRight } from "lucide-react";

type LinkItemProps = {
  type: "link";
  navItem: (typeof NAV_ITEMS)[number];
};

type ButtonItemProps = {
  type: "button";
  navItem: (typeof NAV_ITEMS)[number];
  onClick: () => void;
};

type MobileNavItemProps = LinkItemProps | ButtonItemProps;

const MobileNavItem: React.FC<MobileNavItemProps> = (props) => {
  if (props.type === "link") {
    return (
      <Link
        href={"#"}
        className="block w-full p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10 "
        aria-label={props.navItem.label}
      >
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
