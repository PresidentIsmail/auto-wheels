"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

import { SERVICES_DATA } from "@/data/servicesData";
import { normalizeString, buildSearchQuery } from "@/lib/helper";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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
  // track the current selected service group, will be the first one by default
  const [selectedServiceGroup, setSelectedServiceGroup] = useState<string>(
    SERVICES_DATA[0].sectionTitle,
  );

  // prepare search query for the services page, e.g. services?service-group=brake-sevices
  const searchQuery = buildSearchQuery(selectedServiceGroup);

  return (
    <AnimatePresence>
      {isDropdownVisible && (
        <motion.nav
          variants={dropDownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="navigation"
          aria-label="Service dropdown"
          className="absolute left-1/2 top-full flex w-max gap-x-8 rounded-md border border-grayBorder bg-special px-12 py-8"
        >
          {/* service groups as btns in the first column */}
          <motion.ul
            variants={dropDownItemVariants}
            className="flex flex-col gap-2"
          >
            {SERVICES_DATA.map((serviceGroup) => (
              <motion.li key={serviceGroup.sectionTitle}>
                <Button
                  variant={"outline"}
                  onClick={() =>
                    setSelectedServiceGroup(serviceGroup.sectionTitle)
                  }
                  className={`flex w-full items-center justify-start rounded-md border-none px-3 py-3 text-white hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none
                   ${
                     selectedServiceGroup === serviceGroup.sectionTitle
                       ? "bg-white/10 "
                       : ""
                   }`}
                  aria-label={`Select ${serviceGroup.sectionTitle}`}
                  tabIndex={0}
                >
                  <h3 className="font-bold">{serviceGroup.sectionTitle}</h3>
                </Button>
              </motion.li>
            ))}
          </motion.ul>

          <Separator
            orientation="vertical"
            className="flex h-[100] w-[2px] bg-white/10"
            aria-hidden="true"
          />

          {/* services in subsections of the service group that is selected */}
          {SERVICES_DATA.map((serviceGroup) =>
            serviceGroup.sectionTitle === selectedServiceGroup ? (
              <motion.div
                variants={dropDownItemVariants}
                key={serviceGroup.sectionTitle}
                className="grid gap-x-4 gap-y-2 lg:grid-cols-2"
              >
                {serviceGroup.subsections.map((service) => (
                  <motion.a
                    key={service.title}
                    href={`/services?${searchQuery}`}
                    role="menuitem"
                    className="flex h-max w-full max-w-[250px] shrink-0 gap-2 rounded-md px-3 py-3 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-grayBorder focus-visible:ring-offset-2 focus-visible:ring-offset-white "
                  >
                    <section className="flex gap-4">
                      {/* Service Icon */}
                      <div>
                        <Image
                          src={service.icon}
                          alt={service.title}
                          placeholder="blur"
                          width={40}
                          height={40}
                          sizes="40px"
                          className="h-10 w-10 translate-y-2 object-contain"
                          // grayscale image
                          style={{ filter: "grayscale(50%)" }}
                        />
                      </div>

                      {/* Service Title and Services */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-bold text-white">
                          {service.title}
                        </h3>
                        <ul className="flex flex-col gap-1 text-sm text-white/80">
                          {service.services.map((service) => (
                            <li key={service}>
                              <p>{service}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </motion.a>
                ))}
              </motion.div>
            ) : null,
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default DropDown;
