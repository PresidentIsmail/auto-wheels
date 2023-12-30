"use client";

import React from "react";

import { NAV_ITEMS, SERVICES_DATA } from "@/constants";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface NavItemWithDropDownProps {
  navItem: (typeof NAV_ITEMS)[number];
  toggleServicesDropdown: () => void;
  showServicesDropdown: boolean;
}

const NavItemWithDropdown: React.FC<NavItemWithDropDownProps> = ({
  navItem,
  toggleServicesDropdown,
  showServicesDropdown,
}) => {
  return (
    <li>
      <button
        aria-haspopup="true"
        aria-expanded={showServicesDropdown}
        onClick={toggleServicesDropdown}
      >
        <span className="flex items-center gap-1 ">
          {navItem.label}
          <ChevronDown
            className={`${
              showServicesDropdown ? "transform rotate-180" : ""
            } transition-transform duration-300`}
          />
        </span>
      </button>

      {/* Dropdown */}
      {showServicesDropdown ? (
        <nav
          role="menu"
          className="px-12 py-8 bg-special absolute left-1/2 w-max rounded-md -translate-x-1/2  top-full translate-y-2 grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4"
        >
          {/* Dropdown Items */}
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.title}
              // href={`/services/${service.title.toLowerCase()}`}
              href={`#`}
              role="menuitem"
              className="flex flex-col gap-2 max-w-[224px] w-full hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none px-3 py-3 rounded-md transition-colors "
            >
              <h3 className="text-white font-bold">{service.title}</h3>
              <ul className="text-white/80 text-sm flex flex-col gap-1">
                {service.services.map((service) => (
                  <li key={service}>
                    <p>{service}</p>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </nav>
      ) : null}
    </li>
  );
};

export default NavItemWithDropdown;
