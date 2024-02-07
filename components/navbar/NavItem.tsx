"use client";

import React from "react";
import Link from "next/link";

import { NAV_ITEMS } from "@/constants";

import { Button } from "../ui/button";

interface NavItemProps {
  navItem: (typeof NAV_ITEMS)[number];
}

const NavItem: React.FC<NavItemProps> = ({ navItem }) => {
  // Implement component logic here

  return (
    <li>
      <Button
        asChild
        variant={"ghost"}
        className="rounded-sm text-sm hover:bg-white/10 hover:text-white focus-visible:bg-white/10 xl:text-sm capitalize"
      >
        <Link href={navItem.href} aria-label={navItem.label}>
          {<>{navItem.label}</>}
        </Link>
      </Button>
    </li>
  );
};

export default NavItem;
