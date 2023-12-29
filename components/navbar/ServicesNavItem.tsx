"use client";

import React from "react";

import { NAV_ITEMS } from "@/constants";

import { ChevronDown } from "lucide-react";

interface NavItemWithDropDownProps {
  navItem: (typeof NAV_ITEMS)[number];
  toggleServicesDropdown: () => void;
  showServicesDropdown: boolean;
}

const NavItemWithDropDown: React.FC<NavItemWithDropDownProps> = ({
  navItem,
  toggleServicesDropdown,
  showServicesDropdown,
}) => {

  return (
    <li>
      <button onClick={toggleServicesDropdown}>
        <span className="flex items-center ">
          {navItem.label}
          <ChevronDown className="ml-1" />
        </span>
      </button>

      {/* Dropdown */}
      {showServicesDropdown && (
        <div className="px-12 py-8 bg-special absolute top-full translate-y-2">
          <div></div>
        </div>
      )}
    </li>
  );
};

export default NavItemWithDropDown;
