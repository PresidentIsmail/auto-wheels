// =========== HERO BACKGROUND VIDEO AND POSTER ================
const HERO_MP4_MOBILE_PATH = "/videos/mp4/promo-01-mobile.mp4";
const HERO_MP4_DESKTOP_PATH = "/videos/mp4/promo-01-desktop.mp4";
const HERO_WEBM_MOBILE_PATH = "/videos/webm/promo-01-mobile.webm";
const HERO_WEBM_DESKTOP_PATH = "/videos/webm/promo-01-desktop.webm";
import HERO_POSTER_MOBILE from "@/public/videos/posters/poster-01.png";
import HERO_POSTER_DESKTOP from "@/public/videos/posters/poster-01.png";
// Exporting the imported images and videos
export const heroMedia = {
  mp4: {
    mobile: HERO_MP4_MOBILE_PATH,
    desktop: HERO_MP4_DESKTOP_PATH,
  },
  webm: {
    mobile: HERO_WEBM_MOBILE_PATH,
    desktop: HERO_WEBM_DESKTOP_PATH,
  },
  poster: {
    mobile: HERO_POSTER_MOBILE,
    desktop: HERO_POSTER_DESKTOP,
  },
};

// =========== BRANDS ================
import bfgoodrich from "@/public/images/brands/BFGoodrich.png";
import bridgestone from "@/public/images/brands/Bridgestone.png";
import continental from "@/public/images/brands/continental.png";
import dunlop from "@/public/images/brands/dunlop.png";
import bosal from "@/public/images/brands/bosal.png";
import monroe from "@/public/images/brands/monroe.png";
import gabriel from "@/public/images/brands/gabriel.png";
import bosch from "@/public/images/brands/Bosch.png";

export const BRANDS = [
  {
    name: "BFGoodrich",
    image: bfgoodrich,
  },
  {
    name: "Bridgestone",
    image: bridgestone,
  },
  {
    name: "Continental",
    image: continental,
  },
  {
    name: "Dunlop",
    image: dunlop,
  },
  {
    name: "Bosal",
    image: bosal,
  },
  {
    name: "Monroe",
    image: monroe,
  },
  {
    name: "Gabriel",
    image: gabriel,
  },
  {
    name: "Bosch",
    image: bosch,
  },
];

// =========== BUSINESS ================
export const BUSINESS_TELEPHONE_NUMBER = "0183817451";
export const BUSINESS_WORKING_HOURS = [
  "Mon-Fri : 07:00 - 17:00",
  "Sat: 08:00 - 13:00",
];
export const BUSINESS_ADDRESS = "23 Nelson Mandela Dr, Mahikeng";
export const BUSINESS_ADDRESS_ON_GOOGLE_MAPS =
  "https://www.google.com/maps/place/Auto+Wheels+%26+Exhausts/@-25.8632276,25.6459493,17z/data=!3m1!4b1!4m6!3m5!1s0x1ea2cac697680bb7:0x2ad30578d491e15a!8m2!3d-25.8632276!4d25.6459493!16s%2Fg%2F1pzr6fdt5?entry=ttu";

// =========== AUTO WHEELS STATS ================
export const AUTO_WHEELS_STATS = [
  {
    label: "Vehicles Serviced Monthly",
    value: 100,
  },
  {
    label: "Quality tyres Installed Yearly",
    value: 1000,
  },
  {
    label: "Satisfied Customers Weekly",
    value: 100,
  },
  {
    label: "Square Feet of State-of-the-Art Service Facilities",
    value: 6000,
  },
  {
    label: "Successful Repairs Completed Weekly",
    value: 200,
  },
];

// =========== NAVBAR ================
type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

// =========== FOOTER ================
type FooterItem = {
  title: string;
  links: string[];
};

export const FOOTER_ITEMS: FooterItem[] = [
  {
    title: "Products",
    links: ["tyres", "batteries", "wipers"],
  },
  {
    title: "Services",
    links: ["suspension", "exhaust", "wheel alignment"],
  },
  {
    title: "Company",
    links: ["about us", "contact us"],
  },
];
