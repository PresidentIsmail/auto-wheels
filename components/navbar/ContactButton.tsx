import Link from "next/link";
import React from "react";

import { Phone } from "lucide-react";

const tel = "0183817456";

const ContactButton: React.FC = () => {
  return (
    <Link
      href={`tel:${tel}`}
      aria-label={`Call us at ${tel}`}
      className={`hidden md:flex rounded-full gap-x-2 items-center bg-white lg:px-4 lg:py-2 px-3 py-2 tracking-wide text-sm font-medium text-black transition duration-300 ease-in-out hover:bg-white/90  focus:outline-none focus:ring-brand focus:ring-2 active:bg-white/90 `}
      role="button"
      tabIndex={0}
    >
      <Phone className="lg:w-5 lg:h-5 h-4 w-4" />
      Call Us
    </Link>
  );
};

export default ContactButton;