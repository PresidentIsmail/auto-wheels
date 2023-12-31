"use client";

import React, { useState, useCallback } from "react";

import { NAV_ITEMS, SERVICES_DATA } from "@/constants";

import { ChevronLeft } from "lucide-react";
import MobileNavItem from "./MobileNavItem";
import ContactInfo from "./CantactInfo";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavItems: React.FC = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const closeDropdown = useCallback(() => {
    setDropdownVisibility(false);
  }, []);

  const toggleDropdownVisibility = useCallback(() => {
    setDropdownVisibility((prev) => !prev);
  }, []);

  return (
    <Sheet>
      <SheetTrigger
        onClick={closeDropdown}
        className="flex flex-col items-end justify-center p-2 text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
        aria-label="Toggle Navigation"
      >
        <div className="mb-1 h-0.5 w-6 bg-white"></div>
        <div className="mb-1 h-0.5 w-4 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
      </SheetTrigger>
      <SheetContent
        showCloseIcon={!isDropdownVisible}
        className="flex flex-col justify-between border-l-grayBorder bg-special px-[32px] pt-[48px]"
      >
        {!isDropdownVisible ? (
          // Navigation Items
          <>
            <NavigationItems
              toggleDropdownVisibility={toggleDropdownVisibility}
            />
            {/* Contact Info */}
            <SheetFooter>
              <ContactInfo />
            </SheetFooter>
          </>
        ) : (
          // Services Dropdown
          <div className="flex flex-col gap-y-12">
            <button
              onClick={toggleDropdownVisibility}
              className="flex w-full items-center gap-x-1 p-2 text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10"
              aria-label="Go Back"
            >
              <ChevronLeft className="-translate-y-[1px]" />
              <span>Back</span>
            </button>

            <ServicesDropdown />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

type NavigationItemsProps = {
  toggleDropdownVisibility: () => void;
};

const NavigationItems: React.FC<NavigationItemsProps> = ({
  toggleDropdownVisibility,
}) => {
  return (
    <ul className="flex flex-col gap-y-2">
      {NAV_ITEMS.map((item) => (
        <li
          key={item.label}
          className="w-full border-b border-b-grayBorder text-lg font-semibold capitalize text-white"
        >
          {item.label === "Services" ? (
            <MobileNavItem
              type="button"
              navItem={item}
              onClick={toggleDropdownVisibility}
            />
          ) : (
            <MobileNavItem type="link" navItem={item} />
          )}
        </li>
      ))}
    </ul>
  );
};

const ServicesDropdown: React.FC = () => {
  return (
    <ul className="flex flex-col gap-y-2">
      {SERVICES_DATA.map((item) => (
        <li
          key={item.label}
          className="w-full border-b border-b-grayBorder text-base font-semibold capitalize text-white"
        >
          <MobileNavItem type="link" navItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;
