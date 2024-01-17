"use client";

import { ReactNode, useEffect, useRef, useState, useCallback } from "react";

import { cn } from "@/lib/utils";

import { ArrowRight, ArrowLeft } from "lucide-react";
import SliderButton from "./SliderButton";

type Props = {
  className?: string;
  children: ReactNode;
};

const Carousel = ({ className, children }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });

  const checkScrollability = useCallback(() => {
    if (!scrollContainerRef.current) {
      console.error("No reference to scroll container.");
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setScrollState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft < scrollWidth - clientWidth,
    });
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    checkScrollability();
    scrollContainer?.addEventListener("scroll", checkScrollability);
    return () => {
      scrollContainer?.removeEventListener("scroll", checkScrollability);
    };
  }, [checkScrollability]);

  const scrollToNext = useCallback(() => {
    if (!scrollContainerRef.current) {
      console.error("No reference to scroll container.");
      return;
    }

    scrollContainerRef.current.scrollBy({
      left: scrollContainerRef.current.scrollWidth * 0.5,
      behavior: "smooth",
    });
  }, []);

  const scrollToPrevious = useCallback(() => {
    if (!scrollContainerRef.current) {
      console.error("No reference to scroll container.");
      return;
    }

    scrollContainerRef.current.scrollBy({
      left: scrollContainerRef.current.scrollWidth * -0.5,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollContainerRef}
        className="carousel-list me-8 flex gap-x-8 overflow-y-hidden overflow-x-scroll py-1"
        style={{
          scrollSnapType: "x mandatory",
          scrollPadding: "0 24px",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </div>

      {/* Previous and Next Buttons */}
      <div className="flex gap-8">
        {/* left btn */}
        {
          <SliderButton
            disabled={!scrollState.canScrollLeft}
            handleClick={scrollToPrevious}
            aria-label="previous slide"
            className={`left-0 top-full z-10 translate-y-1/2 ${
              !scrollState.canScrollLeft && "invisible"
            }`}
          >
            <ArrowLeft className=" h-[80%] w-[80%]" />
          </SliderButton>
        }

        {/* right btn */}
        {
          <SliderButton
            disabled={!scrollState.canScrollRight}
            handleClick={scrollToNext}
            aria-label="next slide"
            className={`left-16 top-full z-10 flex translate-y-1/2 ${
              !scrollState.canScrollRight && "invisible"
            }`}
          >
            <ArrowRight className=" h-[80%] w-[80%] transition-transform group-hover:scale-110" />
          </SliderButton>
        }
      </div>
    </div>
  );
};

export default Carousel;
