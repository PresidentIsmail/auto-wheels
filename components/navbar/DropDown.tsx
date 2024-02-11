"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

import { SERVICES_DATA } from "@/data/servicesData";
import { buildSearchQuery } from "@/lib/helper";

import { Button } from "../ui/button";

interface DropDownProps {
  isDropdownVisible: boolean;
}

const dropDownVariants: Variants = {
  hidden: { opacity: 0, y: -50, x: "-50%" },
  visible: {
    opacity: 1,
    y: 0,
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

const serviceGroupSubsectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { ease: "easeInOut", duration: 0.1 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { ease: "easeInOut", duration: 0.1 },
  },
};

const DropDown = React.forwardRef<HTMLDivElement, DropDownProps>(
  ({ isDropdownVisible }, ref) => {
    // track the current selected service group, will be the first one by default
    const [selectedServiceGroup, setSelectedServiceGroup] = useState<string>(
      SERVICES_DATA[0].sectionTitle,
    );

    // prepare search query for the services page, e.g. services?service-group=brake-sevices
    const searchQuery = buildSearchQuery(selectedServiceGroup);

    return (
      <AnimatePresence>
        {isDropdownVisible && (
          <motion.div
            ref={ref}
            variants={dropDownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="navigation"
            aria-label="Service dropdown"
            className="absolute left-1/2 top-full p-2"
          >
            <nav className="flex w-max flex-col gap-y-4 rounded-md border border-grayBorder bg-special px-12 py-8">
              <h2 className="translate-x-3 text-2xl  font-medium tracking-widest  text-white underline decoration-2 underline-offset-4">
                Services
              </h2>

              {/* service groups as btns in the first column */}
              {/* Heading */}
              <div className="flex gap-x-8 gap-y-4">
                {/* Service group uttons */}
                <motion.ul
                  variants={dropDownItemVariants}
                  className="flex flex-col gap-2 border-e-2 border-e-white/10 pr-8"
                >
                  {SERVICES_DATA.map((serviceGroup) => (
                    <motion.li
                      key={serviceGroup.sectionTitle}
                      variants={dropDownItemVariants}
                    >
                      <Button
                        variant={"outline"}
                        onClick={() =>
                          setSelectedServiceGroup(serviceGroup.sectionTitle)
                        }
                        className={`flex w-full items-center justify-start rounded-md border-none px-3 py-3 font-medium tracking-wider text-white/80 ring-2 ring-transparent hover:bg-white/10 hover:text-white hover:ring-white/20 focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-white/20
                   ${
                     selectedServiceGroup === serviceGroup.sectionTitle
                       ? "bg-white/10 text-white ring-white/20"
                       : ""
                   }`}
                        aria-label={`Select ${serviceGroup.sectionTitle}`}
                        tabIndex={0}
                      >
                        <p className="font-bold">{serviceGroup.sectionTitle}</p>
                      </Button>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* services in subsections of the service group that is selected */}
                <AnimatePresence mode="wait">
                  {SERVICES_DATA.map((serviceGroup) =>
                    serviceGroup.sectionTitle === selectedServiceGroup ? (
                      <motion.div
                        variants={serviceGroupSubsectionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key={serviceGroup.sectionTitle}
                        className="flex flex-col gap-4"
                      >
                        {/* Heading */}
                        <h3 className="text-xl font-medium text-white/80">
                          {serviceGroup.sectionTitle}
                        </h3>

                        <div className="grid gap-x-4 gap-y-4 lg:grid-cols-2">
                          {serviceGroup.subsections.map((service) => (
                            <motion.a
                              key={service.title}
                              href={`/services?${searchQuery}`}
                              role="menuitem"
                              className="group flex h-max w-full max-w-[250px] shrink-0 gap-2 rounded-md px-4 py-3 ring-2 ring-white/10
                    hover:bg-white/10 hover:ring-2 hover:ring-white focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-white"
                            >
                              <section className="flex flex-col gap-2">
                                {/* Service Title and Services */}
                                <p className="text-sm font-medium text-white underline-offset-4 group-hover:underline group-focus-visible:underline">
                                  {service.title}
                                </p>
                                <ul className="flex flex-col gap-1 text-sm text-white/70">
                                  {service.services.map((service) => (
                                    <li key={service}>
                                      <p>&ndash; {service}</p>
                                    </li>
                                  ))}
                                </ul>
                              </section>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    ) : null,
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

DropDown.displayName = "DropDown";

export default DropDown;
