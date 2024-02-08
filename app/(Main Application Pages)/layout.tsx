import React from "react";

import Footer from "@/components/footer-section/Footer";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      {children}

      <Footer />
    </React.Fragment>
  );
}
