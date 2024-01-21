import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer-section/Footer";

const inter = Inter({ subsets: ["latin"] });

// 👇 configure local font
const gothamSans = localFont({
  src: [
    {
      path: "../public/fonts/woff2/Gotham-Black.woff2",
      style: "normal",
      weight: "900",
    },
    {
      path: "../public/fonts/woff2/Gotham-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/fonts/woff2/Gotham-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/woff2/Gotham-Book.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/woff2/Gotham-Light.woff2",
      style: "normal",
      weight: "300",
    },
  ],
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: "Auto Wheels & Exhaust",
  description:
    "Auto Wheels & Exhaust is a business that has been serving the community for over 30 years. We specialize in custom exhaust, wheels, tires, and accessories. We also offer a wide variety of services including brakes, suspension, alignments, and more. We are located in the heart of Mafikeng, North West.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${gothamSans.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
