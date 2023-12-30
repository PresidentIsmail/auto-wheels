"use client";

import React from "react";
import Link from "next/link";

import { NAV_ITEMS } from "@/constants";

type MobileNavItemProps = {
  navItem: (typeof NAV_ITEMS)[number];
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({ navItem }) => {
  return <Link href={"#"} className="w-full block p-2 focus-visible:bg-white/10 transition-colors hover:bg-white/10 ">{navItem.label}</Link>;
};

export default MobileNavItem;
