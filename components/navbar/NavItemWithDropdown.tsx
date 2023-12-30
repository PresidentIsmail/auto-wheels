"use client";

import React, { useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

import { NAV_ITEMS, SERVICES_DATA } from "@/constants";

import { ChevronDown } from "lucide-react";

interface NavItemWithDropDownProps {
  navItem: (typeof NAV_ITEMS)[number];
  toggleDropdownVisibility: () => void;
  isDropdownVisible: boolean;
}

const dropDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    // translate x half of the width of the dropdown
    x: "-50%",
  },
  visible: {
    opacity: 1,
    y: 8,
    // keep the translate x to half of the width of the dropdown
    x: "-50%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
      // animate children after the dropdown is visible
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    // translate x half of the width of the dropdown
    x: "-50%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const dropDownItemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
};

const NavItemWithDropdown: React.FC<NavItemWithDropDownProps> = ({
  navItem,
  toggleDropdownVisibility,
  isDropdownVisible,
}) => {

  useEffect(() => {
    const handleScroll = () => {
      // Close the dropdown if the user scrolls more than 100 pixels
      if (window.scrollY > 100 && isDropdownVisible) {
        toggleDropdownVisibility();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownVisible, toggleDropdownVisibility]);

  const handleHover = () => {
    if (isDropdownVisible) {
      return;
    }
    toggleDropdownVisibility();
  };

  const handleClick = () => {
    toggleDropdownVisibility();
  };

  return (
    <li>
      <button
        aria-haspopup="true"
        aria-expanded={isDropdownVisible}
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
        <span className="flex items-center gap-1 ">
          {navItem.label}
          <ChevronDown
            className={`${
              isDropdownVisible ? "rotate-180 transform" : ""
            } transition-transform duration-300`}
          />
        </span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isDropdownVisible ? (
          <motion.nav
            variants={dropDownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="menu"
            className="absolute left-1/2 top-full grid w-max grid-cols-3  gap-2 rounded-md bg-special px-12 py-8 lg:grid-cols-4 lg:gap-4"
          >
            {/* Dropdown Items */}
            {SERVICES_DATA.map((service) => (
              <motion.a
                variants={dropDownItemVariants}
                key={service.title}
                // href={`/services/${service.title.toLowerCase()}`}
                href={`#`}
                role="menuitem"
                className="flex w-full max-w-[224px] flex-col gap-2 rounded-md px-3 py-3 transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none "
              >
                <h3 className="font-bold text-white">{service.title}</h3>
                <ul className="flex flex-col gap-1 text-sm text-white/80">
                  {service.services.map((service) => (
                    <li key={service}>
                      <p>{service}</p>
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </li>
  );
};

export default NavItemWithDropdown;
