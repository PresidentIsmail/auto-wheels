"use client";

import { ReactNode, useEffect, useRef, useState, useCallback } from "react";

import { cn } from "@/lib/utils";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderButton from "./SliderButton";

type Props = {
  className?: string;
  children: ReactNode;
};

const Carousel = ({ className, children }: Props) => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
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
      left: window.innerWidth * 0.25,
      behavior: "smooth",
    });
  }, []);

  const scrollToPrevious = useCallback(() => {
    if (!scrollContainerRef.current) {
      console.error("No reference to scroll container.");
      return;
    }

    scrollContainerRef.current.scrollBy({
      left: window.innerWidth * -0.25,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={cn("relative", className)}>
      <ul
        ref={scrollContainerRef}
        className=" flex gap-x-2 overflow-y-hidden overflow-x-scroll py-1 pe-8"
        style={{
          scrollSnapType: "x mandatory",
          scrollPadding: "0 24px",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </ul>

      {/* Previous and Next Buttons */}
      <div className="hidden  md:flex">
        {/* left btn */}
        {
          <SliderButton
            disabled={!scrollState.canScrollLeft}
            handleClick={scrollToPrevious}
            aria-label="previous slide"
            className={`absolute left-0 top-full z-10 translate-y-1/2 `}
          >
            <IoIosArrowBack className=" h-[80%] w-[80%] -translate-x-0.5" />
          </SliderButton>
        }

        {/* right btn */}
        {
          <SliderButton
            disabled={!scrollState.canScrollRight}
            handleClick={scrollToNext}
            aria-label="next slide"
            className={`absolute left-16 top-full z-10 flex translate-y-1/2`}
          >
            <IoIosArrowForward className=" h-[80%] w-[80%] translate-x-0.5 transition-transform group-hover:scale-110" />
          </SliderButton>
        }
      </div>
    </div>
  );
};

export default Carousel;
