import { useState, useEffect } from "react";

export const useScrollSpeed = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    const calculateScrollSpeed = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const speed = Math.abs(scrollTop - lastScrollTop);
      setScrollSpeed(speed);
      setLastScrollTop(scrollTop);
    };

    const timer = setInterval(calculateScrollSpeed, 100); // 100ms interval for speed calculation

    return () => {
      clearInterval(timer);
    };
  }, [lastScrollTop]);

  return scrollSpeed;
};
