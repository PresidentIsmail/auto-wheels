"use client";

import React from "react";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

type LinkItemProps = {
  type: "link";
  label: string;
  href: string;
  onClick?: () => void;
};

type ButtonItemProps = {
  type: "button";
  label: string;
  onClick: () => void;
};

type MobileNavItemProps = LinkItemProps | ButtonItemProps;

const MobileNavItem: React.FC<MobileNavItemProps> = (props) => {
  if (props.type === "link") {
    return (
      <Link
        href={props.href}
        className="block w-full p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10 "
        aria-label={props.label}
        onClick={props.onClick}
      >
        {props.label}
      </Link>
    );
  }

  if (props.type === "button") {
    return (
      <button
        onClick={props.onClick}
        className={`block w-full p-2 transition-colors hover:bg-white/10 focus-visible:bg-white/10`}
        aria-label={props.label}
      >
        <span className="flex items-center justify-between gap-1">
          {props.label}
          <ChevronRight />
        </span>
      </button>
    );
  }

  return null;
};

export default MobileNavItem;
