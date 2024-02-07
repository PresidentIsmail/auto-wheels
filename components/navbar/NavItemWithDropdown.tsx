"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";
import { useOnClickOutside } from "@/hooks/use-on-click-outiside";

import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
// import DropDown from "./DropDown";
const DropDown = dynamic(() => import("./DropDown"), { ssr: false });

interface NavItemWithDropDownProps {
  navItem: (typeof NAV_ITEMS)[number];
}

const NavItemWithDropdown: React.FC<NavItemWithDropDownProps> = ({
  navItem,
}) => {
  const navRef = useRef<HTMLLIElement | null>(null);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  // Simplified the toggle function
  const toggleDropdownVisibility = () => setDropdownVisibility((prev) => !prev);

  // Close the dropdown if the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && isDropdownVisible) {
        toggleDropdownVisibility();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDropdownVisible]);

  // Only show dropdown if the user hovers over the nav item and the dropdown is not visible
  const handleMouseEnter = () => {
    if (!isDropdownVisible) {
      toggleDropdownVisibility();
    }
  };

  useOnClickOutside([navRef], () => {
    if (isDropdownVisible) {
      toggleDropdownVisibility();
    }
  });

  return (
    <li ref={navRef}>
      <Button
        aria-haspopup="true"
        aria-expanded={isDropdownVisible}
        // onMouseEnter={handleMouseEnter}
        onClick={toggleDropdownVisibility}
        variant="ghost"
        className={cn(
          "rounded-sm text-sm hover:bg-white/10 hover:text-white focus-visible:bg-white/10 xl:text-sm",
          isDropdownVisible ? "bg-white/10 text-white" : "",
        )}
      >
        <span className="flex items-center gap-1 ">
          {navItem.label}
          <ChevronDown
            className={`${
              isDropdownVisible ? "rotate-180 transform" : ""
            } transition-transform duration-300`}
          />
        </span>
      </Button>

      <DropDown isDropdownVisible={isDropdownVisible} />
    </li>
  );
};

export default NavItemWithDropdown;
