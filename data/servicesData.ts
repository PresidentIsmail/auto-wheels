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


export const top5AutoRepairServices = [
  {
    icon: "/icons/suspension-01.png",
    heading: "Suspension Services",
    description:
      "Elevate your ride with expert Suspension Services. From shock replacements to precision handling, trust us for a smooth journey.",
  },
  {
    icon: "/icons/tyres-01.png",
    heading: "tyres and Wheels",
    description:
      "Drive confidently with our tyres and Wheels services. Fitting, alignment, balancing – we've got your wheels covered for a stable and safe journey.",
  },
  {
    icon: "/icons/maintainance-01.png",
    heading: "Scheduled Maintenance",
    description:
      "Stay ahead with Scheduled Maintenance. Manufacturer-recommended services ensure peak performance. Drive worry-free, we've got you covered.",
  },
  {
    icon: "/icons/brakes-01.png",
    heading: "Brake Services",
    description:
      "Brake confidently with our services. Fluid flush, pad replacements, and inspections for reliable and responsive braking.",
  },
  {
    icon: "/icons/engine-oil-01.png",
    heading: "Oil Services",
    description:
      "Keep your engine running smoothly with our Oil Services. Fluid checks, top-ups, and regular changes for optimal engine health.",
  },
];
