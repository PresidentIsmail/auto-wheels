import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { Phone } from "lucide-react";

const ContactButton: React.FC = () => {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}#contact`}
      aria-label="Talk to us"
      className={`hidden items-center gap-x-2 rounded-full border border-white bg-white px-3 py-2 text-sm font-medium capitalize tracking-wide text-black ring-offset-2 transition duration-300 ease-in-out hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-black active:bg-white/90 md:flex lg:px-4 lg:py-2 `}
      role="button"
      tabIndex={0}
    >
      <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
      Talk to us
    </Link>
  );
};

export default ContactButton;
