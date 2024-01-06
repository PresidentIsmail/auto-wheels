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

// common tire widths. unique widths from tireData
let uniqueWidths = new Set<number>();
for (let tireSize in tireData) {
  tireData[tireSize].widths.forEach((width) => uniqueWidths.add(width));
}
export const DEFAULT_TIRE_WIDTHS = Array.from(uniqueWidths).sort();

// common tire profiles
let uniqueProfiles = new Set<number>();
for (let tireSize in tireData) {
  tireData[tireSize].profiles.forEach((profile) => uniqueProfiles.add(profile));
}
export const DEFAULT_TIRE_PROFILES = Array.from(uniqueProfiles).sort();

// common tire diameters
export const DEFAULT_TIRE_DIAMETERS = Object.keys(tireData).sort();
