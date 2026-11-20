import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger, gsap, prefersReducedMotion } from "./gsapConfig";

interface CounterOptions {
  duration?: number;
  start?: string;
}

/** Animates a number from 0 to `target`, triggered once the element enters the viewport. */
export function useCounter<T extends HTMLElement>(target: number, options: CounterOptions = {}) {
  const { duration = 1.6, start = "top 85%" } = options;
  const ref = useRef<T | null>(null);
  const [display, setDisplay] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setDisplay(target);
      return;
    }

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () =>
          gsap.to(counter, {
            value: target,
            duration,
            ease: "power2.out",
            onUpdate: () => setDisplay(Math.round(counter.value)),
          }),
      });
    }, el);

    return () => ctx.revert();
  }, [target, duration, start]);

  return { ref, display };
}
