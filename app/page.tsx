import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="
        mt-[calc(var(--navbar-mobile-height)+var(--header-info-height))] 
        flex 
        min-h-[200vh] flex-col items-center bg-neutral-400 md:mt-[calc(var(--navbar-desktop-height)+var(--header-info-height))]
      "
      >
        <h1 className="mt-[100px] ">Wassup Big Dog</h1>
      </main>
    </>
  );
}
