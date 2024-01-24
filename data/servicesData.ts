import { StaticImageData } from "next/image";

// =========== SERVICES ================
type Service = {
  label: string;
  services: string[];
  href: string;
};

export const SERVICES_DATA: Service[] = [
  {
    label: "Brake Services",
    services: [
      "Brake fluid flush",
      "Brake pad replacement",
      "Brake inspection",
    ],
    href: "/brake-services",
  },
  {
    label: "Tyres and Wheels",
    services: [
      "Tire fitting and replacement",
      "3D Wheel alignment",
      "Wheel balancing",
    ],
    href: "/tyres-and-wheels",
  },
  {
    label: "ECU Diagnostics",
    services: ["Computerized system analysis", "ECU Diagnostics"],
    href: "/ecu-diagnostics",
  },
  {
    label: "Cooling System Services",
    services: ["Radiator repair and replacement", "Cooling System Services"],
    href: "/cooling-system-services",
  },
  {
    label: "Wipers and Lights",
    services: [
      "Headlight and taillight inspection and replacement",
      "Windshield wiper sales and fitting",
    ],
    href: "/wipers-and-lights",
  },
  {
    label: "Battery Services",
    services: ["Battery replacement", "Battery testing", "Battery Services"],
    href: "/battery-services",
  },
  {
    label: "Exhaust System Services",
    services: [
      "Muffler replacement",
      "Exhaust system inspection and repair",
      "Exhaust System Services",
    ],
    href: "/exhaust-system-services",
  },
  {
    label: "Oil Services",
    services: ["Fluid checks and top-ups", "Oil changes", "Oil Services"],
    href: "/oil-services",
  },
  {
    label: "Scheduled Maintenance",
    services: [
      "Manufacturer recommended services",
      "Minor and major scheduled maintenance",
      "Scheduled Maintenance",
    ],
    href: "/scheduled-maintenance",
  },
  {
    label: "Fuel System Services",
    services: ["Fuel pump replacement", "Fuel System Services"],
    href: "/fuel-system-services",
  },
  {
    label: "Engine Services",
    services: [
      "Engine overhaul (may include piston replacement, cylinder head work, etc.)",
      "Engine Services",
    ],
    href: "/engine-services",
  },
  {
    label: "Suspension Services",
    services: [
      "Suspension system inspection and repair",
      "Shock absorber replacement",
      "Suspension Services",
    ],
    href: "/suspension-services",
  },
];

// Sorting the array alphabetically based on the 'label' property using the localeCompare() method and the .toSorted() method
export const SERVICES_DATA_SORTED = SERVICES_DATA.sort((a, b) =>
  a.label.localeCompare(b.label),
);

// =======================================
// data for the top 5 auto repair services
// =======================================
import suspensionServicesIcon from "@/public/icons/suspension.png"
import tyresAndWheelsIcon from "@/public/icons/tyres.png"
import scheduledMaintenanceIcon from "@/public/icons/maintainance.png"
import brakeServicesIcon from "@/public/icons/brakes.png"
import oilServicesIcon from "@/public/icons/engine-oil.png"
import ecuDiagnosticsIcon from "@/public/icons/ecu-diagnostics.png"
import engineServicesIcon from "@/public/icons/engine.png"
import transmissionServicesIcon from "@/public/icons/transmission.png"
import batteryIcon from "@/public/icons/battery.png"
import wipersIcon from "@/public/icons/wipers.png"
import lightsIcon from "@/public/icons/lights.png"
import fuelSystemIcon from "@/public/icons/feul.png"
import exhaustSystemIcon from "@/public/icons/exhaust.png"
import coolingSystemIcon from "@/public/icons/coolant.png"

type ServiceGroup = {
  id: string;
  title: string;
  services: {
      icon: StaticImageData;
      heading: string;
      description: string;
      href: string;
  }[];
};

export const SERVICES_DATA_GROUPED: ServiceGroup[] = [
  {
    id: "brake-and-wheel-services",
    title: "Brake and Wheel Services",
    services:[
      {
        icon: brakeServicesIcon,
    heading: "Brake Services",
    description:
      "Brake confidently with our services. Fluid flush, pad replacements, and inspections for reliable and responsive braking.",
        href: "/brake-services",
      },
      {
        icon: tyresAndWheelsIcon,
    heading: "tyres and Wheels",
    description:
      "Drive confidently with our tyres and Wheels services. Fitting, alignment, balancing – we've got your wheels covered for a stable and safe journey.",
        href: "/tyres-and-wheels",
      },
    ],
  },
  {
    id: "vehicle-system-diagnostics",
    title: "Vehicle System Diagnostics",
    services:[
      {
        icon: ecuDiagnosticsIcon,
        heading: "ECU Diagnostics",
        description:
          "Uncover the heart of your vehicle's performance with our ECU Diagnostics service. Through advanced computerized system analysis, we decode your car's language, providing precise ECU diagnostics for optimal functionality and reliability.",      
        href: "/ecu-diagnostics",
      },
    ],
  },
  {
    id: "engine-and-transmission-services",
    title: "Engine and Transmission Services",
    services:[
      {
        icon: engineServicesIcon,
        heading: "Engine Services",
        description:
          "Experience peak performance with our comprehensive Engine Services. From thorough overhauls to specialized repairs, we ensure your engine runs smoothly for a reliable ride.",
        href: "/engine-services",
      },
      {
        icon: transmissionServicesIcon,
        heading: "Transmission Services",
        description:
          "Ensure seamless gear shifts and extend the life of your vehicle with our Transmission Services. From fluid flushes to expert replacements, we keep your transmission in top-notch condition.",
        href: "/transmission-services",
      }      
    ],
  },
  {
    id: "lights-wipers-and-battery-services",
    title: "Lights, Wipers, and Battery Services",
    services:[
      {
        icon: batteryIcon,
        heading: "Battery Services",
        description:
          "Power up your vehicle with our Battery Services. Whether it's a replacement or a test, we ensure your battery is reliable for every journey.",
        href: "/battery-services",
    },    
    {
      icon: wipersIcon,
      heading: "Wipers Inspection and Sales",
      description:
        "See clearly on the road with our Wipers Services. From inspecting headlights and taillights to fitting quality windshield wipers, we keep your vision sharp.",
      href: "/wipers-and-lights",
  },
  {
    icon: lightsIcon,
    heading: "Lights Inspection and Replacement",
    description:
      "Illuminate the way with our Lights Services. From inspecting and replacing headlights to ensuring your taillights shine, we keep you visible and safe.",
    href: "/wipers-and-lights",
}  
    ],
  },
  {
    id: "oil-and-maintenance-services",
    title: "Oil and Maintenance Services",
    services:[
      {
        icon: oilServicesIcon,
    heading: "Oil Services",
    description:
      "Keep your engine running smoothly with our Oil Services. Fluid checks, top-ups, and regular changes for optimal engine health.",
        href: "/oil-services",
      },
      {
        icon: scheduledMaintenanceIcon,
    heading: "Scheduled Maintenance",
    description:
      "Stay ahead with Scheduled Maintenance. Manufacturer-recommended services ensure peak performance. Drive worry-free, we've got you covered.",
        href: "/scheduled-maintenance",
      },
    ],
  },
  {
    id: "fuel-and-suspension-services",
    title: "Fuel and Suspension Services",
    services:[
      {
        icon: fuelSystemIcon,
        heading: "Fuel System Services",
        description:
          "Keep your engine running smoothly with our Fuel System Services. From fuel pump replacements to comprehensive diagnostics, we ensure your vehicle's fuel system is in top-notch condition. Trust us for reliable and efficient service that keeps your journey worry-free.",
        href: "/fuel-system-services",
      },      
      {
        icon: suspensionServicesIcon,
    heading: "Suspension Services",
    description:
      "Elevate your ride with expert Suspension Services. From shock replacements to precision handling, trust us for a smooth journey.",
        href: "/suspension-services",
      },
    ],
  },
  {
    id: "exhaust-and-cooling-services",
    title: "Exhaust and Cooling Services",
    services: [
      {
        icon: exhaustSystemIcon,
        heading: "Exhaust System Services",
        description: "Breathe easy with our Exhaust System Services. From muffler replacements to thorough inspections and repairs, we ensure your vehicle's exhaust system runs smoothly for a quiet and efficient ride.",
        href: "/exhaust-system-services",
    },
    {
      icon: coolingSystemIcon,
      heading: "Cooling System Services",
      description: "Keep your engine cool with our expert Cooling System Services. Whether it's radiator repair or replacement, we've got your back. Trust us for a well-maintained cooling system that ensures a smooth and reliable drive.",
      href: "/cooling-system-services",
  },  
      
    ],
  },
]


export const top5AutoRepairServices = [
  {
    icon: suspensionServicesIcon,
    heading: "Suspension Services",
    description:
      "Elevate your ride with expert Suspension Services. From shock replacements to precision handling, trust us for a smooth journey.",
  },
  {
    icon: tyresAndWheelsIcon,
    heading: "tyres and Wheels",
    description:
      "Drive confidently with our tyres and Wheels services. Fitting, alignment, balancing – we've got your wheels covered for a stable and safe journey.",
  },
  {
    icon: scheduledMaintenanceIcon,
    heading: "Scheduled Maintenance",
    description:
      "Stay ahead with Scheduled Maintenance. Manufacturer-recommended services ensure peak performance. Drive worry-free, we've got you covered.",
  },
  {
    icon: brakeServicesIcon,
    heading: "Brake Services",
    description:
      "Brake confidently with our services. Fluid flush, pad replacements, and inspections for reliable and responsive braking.",
  },
  {
    icon: oilServicesIcon,
    heading: "Oil Services",
    description:
      "Keep your engine running smoothly with our Oil Services. Fluid checks, top-ups, and regular changes for optimal engine health.",
  },
];
