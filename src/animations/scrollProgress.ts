import { useLayoutEffect, type RefObject } from "react";
import { ScrollTrigger, gsap } from "./gsapConfig";

/** Drives a fixed bar's scaleX (transform, not width) to track overall page scroll progress. */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { scaleX: 0, transformOrigin: "left center" });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => gsap.set(el, { scaleX: self.progress }),
    });

    return () => trigger.kill();
  }, [ref]);
}
