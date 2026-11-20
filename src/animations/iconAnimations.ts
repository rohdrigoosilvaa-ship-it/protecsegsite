import { useLayoutEffect, type RefObject } from "react";
import { gsap, prefersReducedMotion } from "./gsapConfig";

interface FloatOptions {
  delay?: number;
  distance?: number;
  duration?: number;
}

/** Subtle, continuous vertical bobbing — used for icon badges and hero chips. */
export function useIconFloat<T extends HTMLElement>(ref: RefObject<T | null>, options: FloatOptions = {}) {
  const { delay = 0, distance = 5, duration = 3 } = options;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -distance,
        duration,
        delay,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, distance, duration]);
}

interface DriftOptions {
  delay?: number;
  x?: number;
  y?: number;
  duration?: number;
}

/** Slow independent drift on both axes, used for the hero's floating chips. */
export function useFloatDrift<T extends HTMLElement>(ref: RefObject<T | null>, options: DriftOptions = {}) {
  const { delay = 0, x = 4, y = 14, duration = 6 } = options;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -y,
        x,
        duration,
        delay,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, x, y, duration]);
}

/** Extremely subtle continuous pulse (scale), e.g. for a "featured" badge. */
export function usePulse<T extends HTMLElement>(ref: RefObject<T | null>, scale = 1.06, duration = 2.2) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, { scale, duration, ease: "sine.inOut", repeat: -1, yoyo: true });
    }, el);

    return () => ctx.revert();
  }, [ref, scale, duration]);
}

/** One-shot wobble (rotation) for an attention/urgency icon. */
export function useIconWobble<T extends HTMLElement>(ref: RefObject<T | null>, degrees = 8, duration = 2.5) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        rotate: degrees,
        duration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, el);

    return () => ctx.revert();
  }, [ref, degrees, duration]);
}
