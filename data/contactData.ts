import { generateId, generateWhatsAppLink } from "@/lib/helper";
import { BUSINESS_ADDRESS_ON_GOOGLE_MAPS } from "@/constants";

import { Phone, CalendarClock, MapPin } from "lucide-react";

export const contactInfo = [
  {
    id: generateId(),
    type: "Phone & WhatsApp",
    value: ["Tel: 018 381 7451"],
    Icon: Phone,
    link: null,
  },
  {
    id: generateId(),
    type: "Address",
    value: ["23 Nelson Mandela, Golf View, Mahikeng, 2745"],
    Icon: MapPin,
    link: BUSINESS_ADDRESS_ON_GOOGLE_MAPS,
  },
  {
    id: generateId(),
    type: "Working Hours",
    value: [
      "Monday - Friday: 7:30AM - 5:00PM",
      "Saturday: 8:00AM - 1:00PM",
      "Sunday: Closed",
    ],
    Icon: CalendarClock,
    link: null,
  },
];
