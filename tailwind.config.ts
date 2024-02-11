import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-gotham)", "Inter", "sans-serif"],
        header: ["var(--font-masterworks-header)", "Inter", "sans-serif"],
      },
      colors: {
        brand: "#de211b",
        special: "#230400",
        grayBorder: "#494952",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neutral: {
          50: "#fcfcfc",
          100: "#f7f7f7",
          200: "#f1f1f1",
          300: "#ddd",
          400: "#ccc",
          500: "#9e9e9e",
          600: "#707070",
          700: "#555",
          800: "#424242",
          900: "#323232",
          950: "#1f1f1f",
        },
        error: {
          50: "#fffbfa",
          100: "#fef3f2",
          200: "#fee4e2",
          300: "#fecdca",
          400: "#fda29b",
          500: "#f97066",
          600: "#f04438",
          700: "#d92d20",
          800: "#b42318",
          900: "#912018",
          950: "#7a271a",
        },
        warning: {
          50: "#fffcf5",
          100: "#fffaeb",
          200: "#fef0c7",
          300: "#fedf89",
          400: "#fec84b",
          500: "#fdb022",
          600: "#f79009",
          700: "#dc6803",
          800: "#b54708",
          900: "#93370d",
          950: "#7a2e0e",
        },
        success: {
          50: "#f6fef9",
          100: "#ecfdf3",
          200: "#d1fadf",
          300: "#a6f4c5",
          400: "#6ce9a6",
          500: "#32d583",
          600: "#12b76a",
          700: "#039855",
          800: "#027a48",
          900: "#05603a",
          950: "#054f31",
        },
        info: {
          50: "#f5faff",
          100: "#eff8ff",
          200: "#d1e9ff",
          300: "#b2ddff",
          400: "#84caff",
          500: "#53b1fd",
          600: "#2e90fa",
          700: "#1570ef",
          800: "#175cd3",
          900: "#1849a9",
          950: "#194185",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        "navbar-desktop": "var(--navbar-desktop-height)",
        "navbar-mobile": "var(--navbar-mobile-height)",
        "header-info": "var(--header-info-height)",
        "hero-desktop": "var(--hero-desktop-height)",
        "hero-mobile": "var(--hero-mobile-height)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

/* 
 {
    --brand_color_elect: #20b7fb;
    --brand_color_rosso_pirelli: #de211b;
    --primary_50: #fff8cc;
    --primary_100: #fff4aa;
    --primary_200: #ffee80;
    --primary_300: #ffe855;
    --primary_400: #ffe32b;
    --primary_500: #fd0;
    --primary_600: #d4b800;
    --primary_700: #aa9300;
    --primary_800: #806f00;
    --primary_900: #554a00;
    --primary_950: #332c00;

    --neutral_50: #fcfcfc;
    --neutral_100: #f7f7f7;
    --neutral_200: #f1f1f1;
    --neutral_300: #ddd;
    --neutral_400: #ccc;
    --neutral_500: #9e9e9e;
    --neutral_600: #707070;
    --neutral_700: #555;
    --neutral_800: #424242;
    --neutral_900: #323232;
    --neutral_950: #1f1f1f;
  
    --error_50: #fffbfa;
    --error_100: #fef3f2;
    --error_200: #fee4e2;
    --error_300: #fecdca;
    --error_400: #fda29b;
    --error_500: #f97066;
    --error_600: #f04438;
    --error_700: #d92d20;
    --error_800: #b42318;
    --error_900: #912018;
    --error_950: #7a271a;
    --warning_50: #fffcf5;
    --warning_100: #fffaeb;
    --warning_200: #fef0c7;
    --warning_300: #fedf89;
    --warning_400: #fec84b;
    --warning_500: #fdb022;
    --warning_600: #f79009;
    --warning_700: #dc6803;
    --warning_800: #b54708;
    --warning_900: #93370d;
    --warning_950: #7a2e0e;
    --success_50: #f6fef9;
    --success_100: #ecfdf3;
    --success_200: #d1fadf;
    --success_300: #a6f4c5;
    --success_400: #6ce9a6;
    --success_500: #32d583;
    --success_600: #12b76a;
    --success_700: #039855;
    --success_800: #027a48;
    --success_900: #05603a;
    --success_950: #054f31;
    --info_50: #f5faff;
    --info_100: #eff8ff;
    --info_200: #d1e9ff;
    --info_300: #b2ddff;
    --info_400: #84caff;
    --info_500: #53b1fd;
    --info_600: #2e90fa;
    --info_700: #1570ef;
    --info_800: #175cd3;
    --info_900: #1849a9;
    --info_950: #194185
}
*/
