import React from "react";
import Link from "next/link";
import Dynamic from "next/dynamic";

import NavItems from "./NavItems";
import ContactButton from "./ContactButton";
import HeaderInformation from "../HeaderInformation";
const MobileNavItems = Dynamic(() => import("./mobile-nav/MobileNavItems"), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full inset-x-0 z-20">
      <HeaderInformation />

      <div className="relative h-navbar-mobile md:h-navbar-desktop bg-special border-b border-b-[#1212125c]">
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
          <ContactButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
