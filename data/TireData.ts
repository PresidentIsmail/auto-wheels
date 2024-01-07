interface TireInformation {
  widths: number[];
  profiles: number[];
}

interface TireSizeData {
  [diameter: number]: TireInformation;
}

export const tireData: TireSizeData = {
  13: {
    widths: [175, 185, 195, 205, 215],
    profiles: [60, 65, 70, 75, 80],
  },

  14: {
    widths: [185, 195, 205, 215, 225],
    profiles: [60, 65, 70, 75, 80],
  },

  15: {
    widths: [195, 205, 215, 225, 235],
    profiles: [60, 65, 70, 75, 80],
  },

  16: {
    widths: [205, 215, 225, 235, 245],
    profiles: [55, 60, 65, 70, 75],
  },

  17: {
    widths: [215, 225, 235, 245, 255],
    profiles: [50, 55, 60, 65, 70],
  },

  18: {
    widths: [225, 235, 245, 255, 265],
    profiles: [45, 50, 55, 60, 65],
  },

  19: {
    widths: [235, 245, 255, 265, 275],
    profiles: [40, 45, 50, 55, 60],
  },

  20: {
    widths: [245, 255, 265, 275, 285],
    profiles: [35, 40, 45, 50, 55],
  },

  21: {
    widths: [285, 295],
    profiles: [45, 50],
  },
};

export type TireSize = {
  width: number;
  profile: number;
  diameter: number;
};

export const tireSizes: TireSize[] = [
  { width: 155, profile: 80, diameter: 13 },
  { width: 165, profile: 70, diameter: 13 },
  { width: 175, profile: 65, diameter: 13 },
  { width: 185, profile: 60, diameter: 13 },
  { width: 175, profile: 70, diameter: 14 },
  { width: 185, profile: 65, diameter: 14 },
  { width: 195, profile: 60, diameter: 14 },
  { width: 205, profile: 55, diameter: 14 },
  { width: 185, profile: 65, diameter: 15 },
  { width: 195, profile: 60, diameter: 15 },
  { width: 205, profile: 55, diameter: 15 },
  { width: 215, profile: 50, diameter: 15 },
  { width: 195, profile: 60, diameter: 16 },
  { width: 205, profile: 55, diameter: 16 },
  { width: 215, profile: 50, diameter: 16 },
  { width: 225, profile: 45, diameter: 16 },
  { width: 205, profile: 65, diameter: 17 },
  { width: 215, profile: 50, diameter: 17 },
  { width: 225, profile: 45, diameter: 17 },
  { width: 235, profile: 40, diameter: 17 },
  { width: 215, profile: 50, diameter: 18 },
  { width: 225, profile: 45, diameter: 18 },
  { width: 235, profile: 40, diameter: 18 },
  { width: 245, profile: 35, diameter: 18 },
  { width: 225, profile: 35, diameter: 19 },
  { width: 235, profile: 35, diameter: 19 },
  { width: 245, profile: 35, diameter: 19 },
  { width: 255, profile: 35, diameter: 19 },
  { width: 225, profile: 30, diameter: 20 },
  { width: 235, profile: 30, diameter: 20 },
  { width: 245, profile: 30, diameter: 20 },
  { width: 255, profile: 30, diameter: 20 },
];

// Extract all widths from the array
const allWidths = tireSizes.map((tireSize) => tireSize.width);
// Use Set to eliminate duplicates
export const DEFAULT_TIRE_WIDTHS = [...new Set(allWidths)].sort();

// common tire profiles
const allProfiles = tireSizes.map((tireSize) => tireSize.profile);
export const DEFAULT_TIRE_PROFILES = [...new Set(allProfiles)].sort();

// common tire diameters
const allDiameters = tireSizes.map((tireSize) => tireSize.diameter);
export const DEFAULT_TIRE_DIAMETERS = [...new Set(allDiameters)].sort();
