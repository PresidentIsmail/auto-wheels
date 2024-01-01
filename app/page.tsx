import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import Statistics from "@/components/ui/statistic-section/Statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="
        mt-[calc(var(--navbar-mobile-height)+var(--header-info-height))] 
        flex 
        min-h-[200vh] flex-col items-center bg-white md:mt-[calc(var(--navbar-desktop-height)+var(--header-info-height))] w-full relative
      "
      >
        <Hero />
        <Statistics />
      </main>
    </>
  );
}
