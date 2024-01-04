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
    widths: [185, 195, 205],
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
