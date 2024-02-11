import { StaticImageData } from "next/image";
import { normalizeString } from "@/lib/helper";

// =========== SERVICES ================

import suspensionServicesIcon from "@/public/icons/suspension.png";
import tyresAndWheelsIcon from "@/public/icons/tyres.png";
import scheduledMaintenanceIcon from "@/public/icons/maintainance.png";
import brakeServicesIcon from "@/public/icons/brakes.png";
import oilServicesIcon from "@/public/icons/engine-oil.png";
import ecuDiagnosticsIcon from "@/public/icons/ecu-diagnostics.png";
import engineServicesIcon from "@/public/icons/engine.png";
import transmissionServicesIcon from "@/public/icons/transmission.png";
import batteryIcon from "@/public/icons/battery.png";
import wipersIcon from "@/public/icons/wipers.png";
import lightsIcon from "@/public/icons/lights.png";
import fuelSystemIcon from "@/public/icons/feul.png";
import exhaustSystemIcon from "@/public/icons/exhaust.png";
import coolingSystemIcon from "@/public/icons/coolant.png";

export const SERVICES_DATA = [
  {
    sectionTitle: "Brake and Wheel Services",
    subsections: [
      {
        icon: brakeServicesIcon,
        title: "Brake Services",
        services: [
          "Brake fluid flush",
          "Brake pad replacement",
          "Brake inspection",
        ],
        description:
          "Drive confidently with our brake services. Fluid flush, pad replacements, and inspections for reliable and responsive braking.",
      },
      {
        icon: tyresAndWheelsIcon,
        title: "Tyres and Wheels",
        services: [
          "Tire fitting and replacement",
          "3D Wheel alignment",
          "Wheel balancing",
        ],
        description:
          "Explore our Tyres and Wheels services. Fitting, alignment, balancing - we've got your wheels covered for a stable and safe journey.",
      },
    ],
  },
  {
    sectionTitle: "Vehicle Diagnostics",
    subsections: [
      {
        icon: ecuDiagnosticsIcon,
        title: "ECU Diagnostics",
        services: ["Computerized system analysis", "ECU Diagnostics"],
        description:
          "Uncover the heart of your vehicle's performance with our ECU Diagnostics service. Through advanced computerized system analysis, we decode your car's language, providing precise ECU diagnostics for optimal functionality and reliability.",
      },
    ],
  },
  {
    sectionTitle: "Engine and Transmission",
    subsections: [
      {
        icon: engineServicesIcon,
        title: "Engine Services",
        services: [
          "Engine overhaul (may include piston replacement, cylinder head work, etc.)",
          "General Engine Services",
        ],
        description:
          "Experience peak performance with our comprehensive Engine Services. From thorough overhauls to specialized repairs, we ensure your engine runs smoothly for a reliable ride.",
      },
      {
        icon: transmissionServicesIcon,
        title: "Transmission Services",
        services: [
          "Transmission fluid flush",
          "Transmission replacement",
          "General Transmission Services",
        ],
        description:
          "Ensure seamless gear shifts and extend the life of your vehicle with our Transmission Services. From fluid flushes to expert replacements, we keep your transmission in top-notch condition.",
      },
    ],
  },
  {
    sectionTitle: "Lights, Wipers, and Battery",
    subsections: [
      {
        icon: lightsIcon,
        title: "Lights Inspection and Replacement",
        services: [
          "Headlight and taillight inspection and replacement",
          "General Lights Inspection and Replacement",
        ],
        description:
          "Illuminate the way with our Lights Services. From inspecting and replacing headlights to ensuring your taillights shine, we keep you visible and safe.",
      },
      {
        icon: wipersIcon,
        title: "Wipers Inspection and Sales",
        services: [
          "Windshield wiper sales and fitting",
          "General Wipers Inspection and Sales",
        ],
        description:
          "See clearly on the road with our Wipers Services. From inspecting headlights and taillights to fitting quality windshield wipers, we keep your vision sharp.",
      },
      {
        icon: batteryIcon,
        title: "Battery Services",
        services: [
          "Battery replacement",
          "Battery testing",
          "General Battery Services",
        ],
        description:
          "Power up your vehicle with our Battery Services. Whether it's a replacement or a test, we ensure your battery is reliable for every journey.",
      },
    ],
  },
  {
    sectionTitle: "Oil and Maintenance",
    subsections: [
      {
        icon: oilServicesIcon,
        title: "Oil Services",
        services: [
          "Fluid checks and top-ups",
          "Oil changes",
          "General Oil Services",
        ],
        description:
          "Keep your engine running smoothly with our Oil Services. Fluid checks, top-ups, and regular changes for optimal engine health.",
      },
      {
        icon: scheduledMaintenanceIcon,
        title: "Scheduled Maintenance",
        services: [
          "Manufacturer recommended services",
          "Minor and major scheduled maintenance",
          "General Scheduled Maintenance",
        ],
        description:
          "Stay ahead with Scheduled Maintenance. Manufacturer-recommended services ensure peak performance. Drive worry-free, we've got you covered.",
      },
    ],
  },
  {
    sectionTitle: "Fuel and Suspension",
    subsections: [
      {
        icon: fuelSystemIcon,
        title: "Fuel System Services",
        services: ["Fuel pump replacement", "General Fuel System Services"],
        description:
          "Keep your engine running smoothly with our Fuel System Services. From fuel pump replacements to comprehensive diagnostics, we ensure your vehicle's fuel system is in top-notch condition. Trust us for reliable and efficient service that keeps your journey worry-free.",
      },
      {
        icon: suspensionServicesIcon,
        title: "Suspension Services",
        services: [
          "Suspension system inspection and repair",
          "Shock absorber replacement",
          "General Suspension Services",
        ],
        description:
          "Elevate your ride with expert Suspension Services. From shock replacements to precision handling, trust us for a smooth journey.",
      },
    ],
  },
  {
    sectionTitle: "Exhaust and Cooling",
    subsections: [
      {
        icon: exhaustSystemIcon,
        title: "Exhaust System Services",
        services: [
          "Muffler replacement",
          "Exhaust system inspection and repair",
          "General Exhaust System Services",
        ],
        description:
          "Breathe easy with our Exhaust System Services. From muffler replacements to thorough inspections and repairs, we ensure your vehicle's exhaust system runs smoothly for a quiet and efficient ride.",
      },
      {
        icon: coolingSystemIcon,
        title: "Cooling System Services",
        services: [
          "Radiator repair and replacement",
          "General Cooling System Services",
        ],
        description:
          "Keep your engine cool with our expert Cooling System Services. Whether it's radiator repair or replacement, we've got your back. Trust us for a well-maintained cooling system that ensures a smooth and reliable drive.",
      },
    ],
  },
];

/* 
Top 5 services:
- Suspension Services
- tyres and Wheels
- Brake Services
- Scheduled Maintenance
- Oil Services
*/

//  top 5 services
export const TOP_5_SERVICES = [
  {
    serviceGroupTitle: "Feul and Suspension",
    service: getServiceByTitle("Suspension Services"),
  },
  {
    serviceGroupTitle: "Brake and Wheel Services",
    service: getServiceByTitle("Tyres and Wheels"),
  },
  {
    serviceGroupTitle: "Brake and Wheel Services",
    service: getServiceByTitle("Brake Services"),
  },
  {
    serviceGroupTitle: "Oil and Maintenance",
    service: getServiceByTitle("Oil Services"),
  },
  {
    serviceGroupTitle: "Oil and Maintenance",
    service: getServiceByTitle("Scheduled Maintenance"),
  },
];

// ===================================================
// ==================== FUNCTIONS ====================
// ===================================================

// Sorting the array alphabetically based on the 'label' property using the localeCompare() method and the .toSorted() method
export const SERVICES_DATA_SORTED = SERVICES_DATA.sort((a, b) =>
  a.sectionTitle.localeCompare(b.sectionTitle),
);

/**
 * This function returns the service object from the SERVICES_DATA array based on the title
 *
 * @param {string} title
 * @returns object
 */
function getServiceByTitle(title: string) {
  const services = SERVICES_DATA.map((service) => service.subsections).flat();
  return services.find(
    (service) => service.title.toLowerCase() === title.toLowerCase(),
  );
}

/**
 * This function that checks if a string exists as the sectionTitle in the SERVICES_DATA array
 *
 * @param {string} sectionTitle
 * @returns boolean
 */
export function sectionTitleExists(sectionTitle: string) {
  return SERVICES_DATA.some(
    (service) => normalizeString(service.sectionTitle) === sectionTitle,
  );
}
