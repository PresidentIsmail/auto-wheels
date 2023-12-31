import React from "react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";
import { Phone, MapPin } from "lucide-react";

import {
    BUSINESS_TELEPHONE_NUMBER,
    BUSINESS_ADDRESS_ON_GOOGLE_MAPS,
    BUSINESS_WORKING_HOURS,
    BUSINESS_ADDRESS
} from "@/constants";

const formatPhoneNumber = (phoneNumberString: string) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
};

const ContactInfo: React.FC = () => {
    const businessTel = formatPhoneNumber(BUSINESS_TELEPHONE_NUMBER);

    return (
        <div className="flex flex-col gap-y-8 text-white">
            <div>
                <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
                {BUSINESS_WORKING_HOURS.map((hours, index) => (
                    <p key={index} className="text-sm text-white/80">{hours}</p>
                ))}
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-1 py-2">
                    <Phone className="h-4 w-4 text-brand" />
                    <Link
                        href={`tel:${BUSINESS_TELEPHONE_NUMBER}`}
                        className="text-sm text-white/80"
                        aria-label="Business Telephone Number"
                    >
                        {businessTel}
                    </Link>
                </div>

                <Separator className="my-1 h-[1px] bg-grayBorder" />

                <div className="flex items-center gap-1 py-2">
                    <MapPin className="h-4 w-4 text-brand" />
                    <Link
                        href={BUSINESS_ADDRESS_ON_GOOGLE_MAPS}
                        className="text-sm text-white/80"
                        aria-label="Business Address"
                    >
                        {BUSINESS_ADDRESS}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;