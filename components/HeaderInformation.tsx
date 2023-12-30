import React from "react";
import Link from "next/link";

import { MapPin, Phone, Clock } from "lucide-react";

const googleMapsLink =
  "https://www.google.com/maps/place/Auto+Wheels+%26+Exhausts/@-25.8632276,25.6459493,17z/data=!3m1!4b1!4m6!3m5!1s0x1ea2cac697680bb7:0x2ad30578d491e15a!8m2!3d-25.8632276!4d25.6459493!16s%2Fg%2F1pzr6fdt5?entry=ttu";

const HeaderInformation: React.FC = () => {
  return (
    <header className="sm:h-header-info bg-brand">
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
            href={googleMapsLink}
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
