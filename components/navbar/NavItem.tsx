"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";

import { Button } from "../ui/button";

interface NavItemProps {
  navItem: (typeof NAV_ITEMS)[number];
}

const NavItem: React.FC<NavItemProps> = ({ navItem }) => {
  const pathname = usePathname();
  const isActive = pathname === navItem.href;

  return (
    <li>
      <Button
        asChild
        variant={"ghost"}
        className={cn(
          "h-9 text-sm capitalize  text-white/70 hover:bg-white/10 hover:text-white focus-visible:bg-white/10",
          {
            "bg-white/10 text-white": isActive,
          },
        )}
      >
        <Link href={navItem.href} aria-label={navItem.label}>
          {<>{navItem.label}</>}
        </Link>
      </Button>
    </li>
  );
};

export default NavItem;
