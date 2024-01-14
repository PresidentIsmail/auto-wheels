import { generateId } from "@/lib/helper";
import { Phone, CalendarClock, MapPin } from "lucide-react";

export const contactInfo = [
  {
    id: generateId(),
    type: "Phone",
    value: ["018 381 7451"],
    Icon: Phone,
  },
  {
    id: generateId(),
    type: "Address",
    value: ["23 Nelson Mandela, Golf View, Mahikeng, 2745"],
    Icon: MapPin,
  },
  {
    id: generateId(),
    type: "Working Hours",
    value: [
      "Monday - Friday: 8:00AM - 6:00PM",
      "Saturday: 9:00AM - 4:00PM",
      "Sunday: Closed",
    ],
    Icon: CalendarClock,
  },
];
