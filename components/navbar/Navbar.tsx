"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dynamic from "next/dynamic";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { BUSINESS_TELEPHONE_NUMBER } from "@/constants";

import { Phone } from "lucide-react";
import NavItems from "./NavItems";
import HeaderInformation from "../ui/HeaderInformation";
import { Button } from "../ui/button";

const MobileNavItems = Dynamic(() => import("./mobile-nav/MobileNavItems"), {
  ssr: false,
});

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

    if (delta > 0 && latest > 100) {
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

      <div className="relative h-navbar-mobile border-b border-b-[#1212125c] bg-special md:h-navbar-desktop">
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
          <Button variant={"secondary"} asChild>
            <Link
              href={`tel:${BUSINESS_TELEPHONE_NUMBER}`}
              aria-label={`Call us at ${BUSINESS_TELEPHONE_NUMBER}`}
              className="hidden gap-x-2 md:flex"
            >
              <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
              Call Us
            </Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
