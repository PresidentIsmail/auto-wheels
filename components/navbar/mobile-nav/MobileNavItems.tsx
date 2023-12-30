"use client";

import React, { useState, useCallback } from "react";

import { NAV_ITEMS, SERVICES_DATA } from "@/constants";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNavItem from "./MobileNavItem";
import MobileNavItemWithDropdown from "./MobileNavItemWithDropdown";

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

  const toggleDropdownVisibility = useCallback(() => {
    setDropdownVisibility((prev) => !prev);
  }, []);

  return (
    <Sheet>
      <SheetTrigger className="flex flex-col items-end justify-center p-2 text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10">
        <div className="mb-1 h-0.5 w-6 bg-white"></div>
        <div className="mb-1 h-0.5 w-4 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
      </SheetTrigger>
      <SheetContent
        showCloseIcon={!isDropdownVisible}
        className="border-l-grayBorder bg-special px-[32px] pt-[40px]"
      >
        {!isDropdownVisible ? (
          //  {/* Navigation Items */}
          <NavigationItems
            isDropdownVisible={isDropdownVisible}
            toggleDropdownVisibility={toggleDropdownVisibility}
          />
        ) : (
          // {/* Services Dropdown */}
          <div className="flex flex-col gap-y-12">
            <Button onClick={toggleDropdownVisibility}>
              <ChevronLeft />
              <span>Back</span>
            </Button>

            <ServicesDropdown />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

type NavigationItemsProps = {
  isDropdownVisible: boolean;
  toggleDropdownVisibility: () => void;
};

const NavigationItems: React.FC<NavigationItemsProps> = ({
  isDropdownVisible,
  toggleDropdownVisibility,
}) => {
  return (
    <ul className="flex flex-col gap-y-2">
      {NAV_ITEMS.map((item) => (
        <li
          key={item.label}
          className="w-full py-2 text-lg font-semibold capitalize text-white"
        >
          {item.label === "Services" ? (
            <MobileNavItemWithDropdown
              navItem={item}
              isDropdownVisible={isDropdownVisible}
              toggleDropdownVisibility={toggleDropdownVisibility}
            />
          ) : (
            <MobileNavItem navItem={item} />
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
          key={item.title}
          className="w-full py-2 text-lg font-semibold capitalize text-white"
        >
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;
