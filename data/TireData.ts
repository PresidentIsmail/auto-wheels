interface TireInformation {
  widths: number[];
  profiles: number[];
}

interface TireSizeData {
  [diameter: number]: TireInformation;
}

export const tireData: TireSizeData = {
  13: {
    widths: [175, 185, 195],
    profiles: [60, 65, 70],
  },
  14: {
    widths: [175, 185, 195, 205, 215],
    profiles: [65, 70, 75],
  },
  15: {
    widths: [195, 205, 215],
    profiles: [60, 65, 70],
  },
  16: {
    widths: [205, 215, 225],
    profiles: [65, 70, 75],
  },
  17: {
    widths: [215, 225, 235],
    profiles: [55, 60, 65],
  },
  18: {
    widths: [225, 235, 245],
    profiles: [60, 65, 70],
  },
  19: {
    widths: [235, 245, 255],
    profiles: [45, 50, 55],
  },
  20: {
    widths: [245, 255, 265],
    profiles: [50, 55, 60],
  },
  21: {
    widths: [255, 265, 275],
    profiles: [45, 50, 55],
  },
};

// common tire widths
export const DEFAULT_TIRE_WIDTHS = [
  155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275,
];

// common tire profiles
export const DEFAULT_TIRE_PROFILES = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85];

// common tire diameters
export const DEFAULT_TIRE_DIAMETERS = [13, 14, 15, 16, 17, 18, 19, 20, 21];
