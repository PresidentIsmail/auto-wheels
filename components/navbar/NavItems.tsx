"use client";

import { useOnClickOutside } from "@/hooks/use-on-click-outiside";
import { useEffect, useRef, useState, useCallback } from "react";

import { NAV_ITEMS } from "@/constants";

import NavItem from "./NavItem";
import NavItemWithDropdown from "./NavItemWithDropdown";

const NavItems: React.FC = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const navRef = useRef<HTMLUListElement | null>(null);

  const toggleServicesDropdown = useCallback(() => {
    setShowServicesDropdown(!showServicesDropdown);
  }, [showServicesDropdown]);

  useOnClickOutside(navRef, () => setShowServicesDropdown(false));

  return (
    <ul
      className="hidden gap-x-8 text-sm text-white md:flex lg:text-base"
      ref={navRef}
    >
      {NAV_ITEMS.map((item) => {
        if (item.label === "Services") {
          return (
            <NavItemWithDropdown
              key={item.label}
              navItem={item}
              toggleServicesDropdown={toggleServicesDropdown}
              showServicesDropdown={showServicesDropdown}
            />
          );
        }
        return (
          <NavItem
            key={item.label}
            navItem={item}
          />
        );
      })}
    </ul>
  );
};

export default NavItems;
