export default function Loading() {
  return (
    <div className="mb-96 h-[40vh] bg-black/90">
      <div
        className="master-container flex h-full animate-pulse flex-col justify-center"
        style={{
          animationDuration: "1s",
        }}
      >
        {/* header animation */}
        <div
          className="w-fit select-none rounded bg-gray-500 text-[32px] font-extrabold leading-none text-white text-opacity-0 md:text-5xl xl:text-6xl"
          aria-hidden="true"
        >
          Service Hub
        </div>

        {/* subtitle animation */}
        <div
          className="mt-4 w-fit select-none rounded bg-gray-500 text-sm font-medium leading-none tracking-wide text-white text-opacity-0 md:text-base"
          aria-hidden="true"
        >
          Discover a Spectrum of Services Tailored for Your Vehicle&apos;s Peak
          Performance.
        </div>
      </div>
    </div>
  );
}
