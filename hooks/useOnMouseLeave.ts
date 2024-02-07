import { RefObject, useEffect } from "react";

type Event = MouseEvent;

export const useOnMouseLeave = (
  refs: RefObject<HTMLElement>[],
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      for (const ref of refs) {
        const el = ref?.current;
        if (el && el.contains((event?.target as Node) || null)) {
          //   console.log("mouseleft");
          handler(event); // Call the handler only if the mouse leaves all the elements
          return; // If the event target is inside any of the elements, do not call the handler
        }
      }
    };

    for (const ref of refs) {
      ref.current?.addEventListener("mouseleave", listener);
    }

    return () => {
      for (const ref of refs) {
        ref.current?.removeEventListener("mouseleave", listener);
      }
    };
  }, [refs, handler]); // Reload only if refs or handler changes
};
