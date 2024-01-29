"use client";

import React, { useState, useCallback } from "react";

import { NAV_ITEMS } from "@/constants";
import { SERVICES_DATA_SORTED } from "@/data/servicesData";

import { ChevronLeft } from "lucide-react";
import MobileNavItem from "./MobileNavItem";
import ContactInfo from "./CantactInfo";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavItems: React.FC = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState<boolean | undefined>(undefined);

  const closeDropdown = useCallback(() => {
    setDropdownVisibility(false);
  }, []);

  const toggleDropdownVisibility = useCallback(() => {
    setDropdownVisibility((prev) => !prev);
  }, []);

  // function to close sheet
  const closeSheet = useCallback(() => {
    setSheetOpen(false);
  }, []);

  return (
    <Sheet open={isSheetOpen}>
      <SheetTrigger
        onClick={() => {
          setSheetOpen(undefined);
          closeDropdown();
        }}
        className="flex flex-col items-end justify-center p-2 text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10 md:hidden"
        aria-label="Toggle Navigation"
      >
        <div className="mb-1 h-0.5 w-6 bg-white"></div>
        <div className="mb-1 h-0.5 w-4 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
      </SheetTrigger>
      <SheetContent
        showCloseIcon={!isDropdownVisible}
        className="flex flex-col justify-between overflow-y-scroll border-l-grayBorder bg-special px-[32px] pt-[48px]"
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
          <div className="flex flex-col ">
            <button
              onClick={toggleDropdownVisibility}
              className="-ms-1 mb-7 flex w-full gap-x-1 p-1 text-white transition-colors"
              aria-label="Go Back"
            >
              <ChevronLeft className="-translate-y-[1px] " />
              <span className="ps-3 text-start">Back</span>
            </button>

            <ServicesDropdown closeSheet={closeSheet} />
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
              label={item.label}
              onClick={toggleDropdownVisibility}
            />
          ) : (
            <MobileNavItem type="link" label={item.label} href={item.href} />
          )}
        </li>
      ))}
    </ul>
  );
};

type ServicesDropdownProps = {
  closeSheet: () => void;
};

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ closeSheet }) => {
  // Force refresh the page
  const clickOutsideMenuToClose = () => {
    console.log("clicked outside");
    // router.refresh();
  };

  return (
    <ul className="flex flex-col gap-y-2">
      <h2 className="mb-3 w-full p-2 text-start text-2xl font-medium text-white">
        Services
      </h2>
      {SERVICES_DATA_SORTED.map((item) => (
        <li
          key={item.sectionTitle}
          className="w-full border-b border-b-grayBorder text-base font-semibold capitalize text-white/80"
        >
          <MobileNavItem
            type="link"
            label={item.sectionTitle}
            href={`/services#${item.sectionId}`}
            onClick={closeSheet}
          />
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;
