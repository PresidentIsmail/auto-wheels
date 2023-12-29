"use client";

import React from "react";
import Link from "next/link";

import { NAV_ITEMS } from "@/constants";

interface NavItemProps {
  navItem: (typeof NAV_ITEMS)[number];
  toggleServicesDropdown: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  navItem,
  toggleServicesDropdown,
}) => {
  // Implement component logic here

  return (
    <li>
      <Link href={navItem.href} aria-label={navItem.label}>
        {<>{navItem.label}</>}
      </Link>
    </li>
  );
};

export default NavItem;
