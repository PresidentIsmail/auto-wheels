import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import Statistics from "@/components/statistic-section/Statistics";
import TireSelection from "@/components/tire-selection-section/TireSelection";
import Services from "@/components/services-section/Services";
import Promotions from "@/components/promotions-section/Promotions";
import Testimonials from "@/components/testimonials-section/Testimonial";
import Faq from "@/components/faq-section/Faq";
import Contact from "@/components/contact-section/Contact";
import BrandsSlider from "@/components/brands-slider-section/BrandsSlider";
import BrandDisplay from "@/components/brands-slider-section/BrandDisplay";
import Footer from "@/components/footer-section/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="
        relative 
        mt-[calc(var(--navbar-mobile-height)+var(--header-info-height))]
         w-full overflow-x-hidden bg-white md:mt-[calc(var(--navbar-desktop-height)+var(--header-info-height))]
      "
      >
        <Hero />
        <Statistics />
        <TireSelection />
        <BrandsSlider>
          <BrandDisplay />
        </BrandsSlider>
        <Services />
        <Promotions />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
