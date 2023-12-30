import React from "react";
import Link from "next/link";

import NavItems from "./NavItems";
import ContactButton from "./ContactButton";
import HeaderInformation from "../HeaderInformation";

const Navbar: React.FC = () => {
  return (
    <nav>
      <HeaderInformation />

      <div className="relative h-navbar-desktop bg-special">
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

          {/* Contact */}
          <ContactButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
