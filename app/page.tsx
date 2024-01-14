import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import Statistics from "@/components/statistic-section/Statistics";
import TireSelection from "@/components/tire-selection-section/TireSelection";
import Services from "@/components/services-section/Services";
import Promotions from "@/components/promotions-section/Promotions";
import Testimonials from "@/components/testimonials-section/Testimonial";
import Faq from "@/components/faq-section/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="
        relative 
        mt-[calc(var(--navbar-mobile-height)+var(--header-info-height))] 
         min-h-[200vh] w-full bg-white md:mt-[calc(var(--navbar-desktop-height)+var(--header-info-height))]
      "
      >
        <Hero />
        <Statistics />
        <TireSelection />
        <Services />
        <Promotions />
        <Testimonials />
        <Faq />
      </main>
    </>
  );
}
