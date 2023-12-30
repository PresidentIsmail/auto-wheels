"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, SERVICES_DATA } from "@/constants";
import { useOnClickOutside } from "@/hooks/use-on-click-outiside";
import { ChevronDown } from "lucide-react";

interface NavItemWithDropDownProps {
  navItem: (typeof NAV_ITEMS)[number];
}

const dropDownVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: "-50%" },
  visible: {
    opacity: 1,
    y: 8,
    x: "-50%",
    transition: { duration: 0.25, ease: "easeInOut", when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    y: -50,
    x: "-50%",
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const dropDownItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeInOut", duration: 0.1 } },
};

const NavItemWithDropdown: React.FC<NavItemWithDropDownProps> = ({
  navItem,
}) => {
  const navRef = useRef<HTMLLIElement | null>(null);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  // Simplified the toggle function
  const toggleDropdownVisibility = () => setDropdownVisibility((prev) => !prev);

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

  useOnClickOutside(navRef, () => {
    if (isDropdownVisible) {
      toggleDropdownVisibility();
    }
  });

  return (
    <li ref={navRef}>
      <button
        aria-haspopup="true"
        aria-expanded={isDropdownVisible}
        onMouseEnter={handleMouseEnter}
        onClick={toggleDropdownVisibility}
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

      <AnimatePresence>
        {isDropdownVisible && (
          <motion.nav
            variants={dropDownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="menu"
            className="absolute left-1/2 top-full grid w-max grid-cols-3  gap-2 rounded-md bg-special px-12 py-8 lg:grid-cols-4 lg:gap-4"
          >
            {SERVICES_DATA.map((service) => (
              <motion.a
                variants={dropDownItemVariants}
                key={service.title}
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
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavItemWithDropdown;
