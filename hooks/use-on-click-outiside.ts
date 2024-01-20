import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      for (const ref of refs) {
        const el = ref?.current;
        if (el && el.contains((event?.target as Node) || null)) {
          return; // If the event target is inside any of the elements, do not call the handler
        }
      }

      handler(event); // Call the handler only if the click is outside of all the elements
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]); // Reload only if refs or handler changes
};
