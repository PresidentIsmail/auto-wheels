import Link from "next/link";
import Image from "next/image";

import warningTriangle from "@/public/images/warning-triangle.webp";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grainy grid flex-1 select-none items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-12 p-8">
        {/* Image */}
        <Image
          src={warningTriangle}
          alt="Warning Triangle"
          placeholder="blur"
          width={250}
          className="w-[150px] md:w-[200px] lg:w-[250px]"
        />

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="grid gap-4">
            {/* Heading */}
            <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
              Oops! Lost in the Garage!
            </h1>
            {/* Description */}
            <p className="max-w-md text-pretty text-center text-sm text-muted-foreground md:text-base">
              We couldn&apos;t find the page you&apos;re looking for. Let&apos;s
              steer you back to the main road
            </p>
          </div>

          {/* Link */}
          <Button asChild variant={"secondary"} className="w-max rounded-md">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
