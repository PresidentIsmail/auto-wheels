"use client";

import React from "react";

import { NAV_ITEMS, SERVICES_DATA } from "@/constants";

import { ChevronDown } from "lucide-react";

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
      <button onClick={toggleServicesDropdown}>
        <span className="flex items-center ">
          {navItem.label}
          <ChevronDown className="ml-1" />
        </span>
      </button>

      {/* Dropdown */}
      {showServicesDropdown && (
        <div className="px-12 py-8 bg-special absolute top-full translate-y-2 grid grid-cols-3 gap-x-4">

          {/* Dropdown Items */}
          {SERVICES_DATA.map((service) => (
            <div key={service.title} className="mb-4">
              <h3 className="text-white font-bold mb-2">{service.title}</h3>
              <ul className="text-white/80">
                {service.services.map((service) => (
                  <li key={service}>
                    <p>
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          

        </div>
      )}
    </li>
  );
};

export default NavItemWithDropdown;
