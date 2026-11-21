import { useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "./gsapConfig";

/** Tracks whether the page has scrolled past a threshold, via ScrollTrigger instead of a raw scroll listener. */
export function useScrolledState(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      start: threshold,
      end: threshold + 1,
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });

    return () => trigger.kill();
  }, [threshold]);

  return scrolled;
}
