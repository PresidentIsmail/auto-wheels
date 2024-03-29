"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import HeaderInformation from "../ui/HeaderInformation";
import ContactButton from "./ContactButton";
import MobileNavItems from "./mobile-nav/MobileNavItems";

const navbarVariants: Variants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

const Navbar: React.FC = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const delta = latest - previous;

    // Check if the tire-selection section is in the viewport
    const tireSelectionSection = document.querySelector("#tire-selection");
    const rect = tireSelectionSection?.getBoundingClientRect();

    const isInViewport =
      rect &&
      rect.top <= window.innerHeight &&
      rect.bottom >= window.innerHeight / 4;

    if (isInViewport && latest > 100) {
      setNavbarVisibility(false);
    } else if (delta > 0 && latest > 100) {
      setNavbarVisibility(false);
    } else {
      setNavbarVisibility(true);
    }
  });

  return (
    <motion.nav
      variants={navbarVariants}
      animate={isNavbarVisible ? "visible" : "hidden"}
      className="fixed inset-x-0 top-0 z-20 w-full"
    >
      <HeaderInformation />
      <Separator className="bg-gray-400" />
      <div className="relative h-navbar-mobile bg-special md:h-navbar-desktop">
        <div className="master-container flex h-full items-center justify-between">
          {/* Business Name */}
          <Link
            href="/"
            aria-label="Auto Wheels & Exhaust"
            className="text-start text-xl font-black capitalize tracking-wide text-white md:text-lg lg:text-xl"
          >
            Auto Wheels &amp;{" "}
            <br className="inline-block sm:hidden md:inline-block" /> Exhaust
          </Link>

          {/* Nav Items */}
          <NavItems />

          {/* Mobile Menu */}
          <MobileNavItems />

          {/* Contact */}
          {/* <ContactButton /> */}
        </div>
      </div>
      <Separator className="bg-gray-500" />
    </motion.nav>
  );
};

export default Navbar;
