"use client";

import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

import { SERVICES_DATA } from "@/constants";

interface DropDownProps {
  isDropdownVisible: boolean;
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

const DropDown: React.FC<DropDownProps> = ({ isDropdownVisible }) => {
  // Implement your component logic here

  return (
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
              key={service.label}
              href={`#`}
              role="menuitem"
              className="flex w-full max-w-[224px] flex-col gap-2 rounded-md px-3 py-3 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none "
            >
              <h3 className="font-bold text-white">{service.label}</h3>
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
  );
};

export default DropDown;
