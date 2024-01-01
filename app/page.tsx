import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import Statistics from "@/components/statistic-section/Statistics";
import TireSelection from "@/components/tire-selection-section/TireSelection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="
        relative 
        mt-[calc(var(--navbar-mobile-height)+var(--header-info-height))] 
        flex min-h-[200vh] w-full flex-col items-center bg-white md:mt-[calc(var(--navbar-desktop-height)+var(--header-info-height))]
      "
      >
        <Hero />
        <Statistics />
        <TireSelection />
      </main>
    </>
  );
}
