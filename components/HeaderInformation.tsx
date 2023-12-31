import React from "react";
import Link from "next/link";

import { BUSINESS_ADDRESS_ON_GOOGLE_MAPS } from "@/constants";

import { MapPin, Phone, Clock } from "lucide-react";

const HeaderInformation: React.FC = () => {
  return (
    <header className="bg-brand sm:h-header-info">
      <div className="master-container flex h-full justify-between py-1.5 font-light text-white sm:py-0">
        {/* hours */}
        <div
          className="flex items-center gap-x-2 text-sm "
          role="contentinfo"
          aria-label="Business hours"
        >
          <Clock className="h-4 w-4" aria-hidden />
          <p>
            Mon-Fri : 07:00 - 17:00{" "}
            <span className="hidden sm:inline-block">|</span>{" "}
            <br className="sm:hidden" /> Sat: 08:00 - 13:00
          </p>
        </div>

        {/* contact (seen until md) */}
        <div
          className="flex items-center gap-x-2 text-sm md:hidden"
          role="contentinfo"
          aria-label="Phone number"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <p>018 381 7456</p>
        </div>

        {/* location (seen after md)*/}
        <address
          className="hidden text-sm md:flex "
          role="contentinfo"
          aria-label="Location"
        >
          <Link
            href={BUSINESS_ADDRESS_ON_GOOGLE_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            <p>23 Nelson Mandela Dr, Mahikeng</p>
          </Link>
        </address>
      </div>
    </header>
  );
};

export default HeaderInformation;
