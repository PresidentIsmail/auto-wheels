type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Promotions",
    href: "#",
  },
  {
    label: "Tires",
    href: "#",
  },
  {
    label: "Batteries",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
];

type Service = {
  title: string;
  services: string[];
};

export const SERVICES_DATA: Service[] = [
  {
    title: "Brake Services",
    services: [
      "Brake fluid flush",
      "Brake pad replacement",
      "Brake inspection",
    ],
  },
  {
    title: "Tires and Wheels",
    services: [
      "Tire fitting and replacement",
      "3D Wheel alignment",
      "Wheel balancing",
    ],
  },
  {
    title: "ECU Diagnostics",
    services: [
      "Computerized system analysis",
      "ECU Diagnostics",
    ],
  },
  {
    title: "Cooling System Services",
    services: [
      "Radiator repair and replacement",
      "Cooling System Services",
    ],
  },
  {
    title: "Wipers and Lights",
    services: [
      "Headlight and taillight inspection and replacement",
      "Windshield wiper sales and fitting",
    ],
  },
  {
    title: "Battery Services",
    services: [
      "Battery replacement",
      "Battery testing",
      "Battery Services",
    ],
  },
  {
    title: "Exhaust System Services",
    services: [
      "Muffler replacement",
      "Exhaust system inspection and repair",
      "Exhaust System Services",
    ],
  },
  {
    title: "Oil Services",
    services: [
      "Fluid checks and top-ups",
      "Oil changes",
      "Oil Services",
    ],
  },
  {
    title: "Scheduled Maintenance",
    services: [
      "Manufacturer recommended services",
      "Minor and major scheduled maintenance",
      "Scheduled Maintenance",
    ],
  },
  {
    title: "Fuel System Services",
    services: [
      "Fuel pump replacement",
      "Fuel System Services",
    ],
  },
  {
    title: "Engine Services",
    services: [
      "Engine overhaul (may include piston replacement, cylinder head work, etc.)",
      "Engine Services",
    ],
  },
  {
    title: "Suspension Services",
    services: [
      "Suspension system inspection and repair",
      "Shock absorber replacement",
      "Suspension Services",
    ],
  },
];

