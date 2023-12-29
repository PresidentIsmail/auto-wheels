import React from "react";
import Link from "next/link";

import NavItems from "./NavItems";
import ContactButton from "./ContactButton";
import HeaderInformation from "../HeaderInformation";

const Navbar: React.FC = () => {
  return (
    <nav>
      <HeaderInformation />

      <div className="h-navbar-desktop bg-special relative">
        <div className="flex master-container h-full items-center justify-between">
          {/* Business Name */}
          <Link
            href="/"
            aria-label="Home"
            className="capitalize font-black tracking-wide text-start text-xl md:text-lg lg:text-xl text-white"
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
