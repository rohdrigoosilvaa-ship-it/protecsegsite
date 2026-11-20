import { useLayoutEffect, useRef } from "react";
import { EASE, ScrollTrigger, gsap, isMobileViewport, prefersReducedMotion } from "./gsapConfig";

interface FadeUpOptions {
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
}

export function animateFadeUp(el: Element, options: FadeUpOptions = {}) {
  const { delay = 0, y = 30, duration = 0.7, start = "top 80%" } = options;

  if (prefersReducedMotion()) {
    gsap.set(el, { opacity: 1, y: 0 });
    return () => {};
  }

  const mobile = isMobileViewport();
  const distance = mobile ? y * 0.6 : y;
  const dur = mobile ? duration * 0.85 : duration;

  gsap.set(el, { opacity: 0, y: distance });

  const trigger = ScrollTrigger.create({
    trigger: el,
    start,
    once: true,
    onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: dur, delay, ease: EASE.outStrong }),
  });

  return () => trigger.kill();
}

/** Reveals an element (fade + translateY) once it scrolls ~20% into the viewport. */
export function useScrollReveal<T extends HTMLElement>(options: FadeUpOptions = {}) {
  const ref = useRef<T | null>(null);
  const { delay, y, duration, start } = options;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      animateFadeUp(el, { delay, y, duration, start });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, y, duration, start]);

  return ref;
}

interface ScaleFadeOptions {
  delay?: number;
  scaleFrom?: number;
  duration?: number;
  start?: string;
}

/** Reveals an element with a subtle scale-up + fade (e.g. photos, dashboard mockups). */
export function useScaleReveal<T extends HTMLElement>(options: ScaleFadeOptions = {}) {
  const ref = useRef<T | null>(null);
  const { delay = 0, scaleFrom = 0.95, duration = 0.7, start = "top 80%" } = options;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, scale: scaleFrom });
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => gsap.to(el, { opacity: 1, scale: 1, duration, delay, ease: EASE.outStrong }),
      });
    }, el);

    return () => ctx.revert();
  }, [delay, scaleFrom, duration, start]);

  return ref;
}
