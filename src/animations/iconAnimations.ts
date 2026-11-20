import { useLayoutEffect, type RefObject } from "react";
import { prefersReducedMotion } from "./gsapConfig";

// Ambient loops run on the compositor via the Web Animations API instead of
// GSAP tweens: a JS tween writes a style every frame on the main thread, and
// with ~30 of them on the page scroll dropped to ~20fps on mid-range phones.
const EASE_SINE_IN_OUT = "cubic-bezier(0.37, 0, 0.63, 1)";

export function startLoop(
  el: HTMLElement,
  from: string,
  to: string,
  { duration, delay = 0, easing = EASE_SINE_IN_OUT, direction = "alternate" }: {
    duration: number;
    delay?: number;
    easing?: string;
    direction?: PlaybackDirection;
  },
) {
  const animation = el.animate([{ transform: from }, { transform: to }], {
    duration: duration * 1000,
    delay: delay * 1000,
    easing,
    direction,
    iterations: Infinity,
  });
  return () => animation.cancel();
}

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
    return startLoop(el, "translate3d(0, 0, 0)", `translate3d(0, ${-distance}px, 0)`, { duration, delay });
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
    return startLoop(el, "translate3d(0, 0, 0)", `translate3d(${x}px, ${-y}px, 0)`, { duration, delay });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, x, y, duration]);
}

/** Extremely subtle continuous pulse (scale), e.g. for a "featured" badge. */
export function usePulse<T extends HTMLElement>(ref: RefObject<T | null>, scale = 1.06, duration = 2.2) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    return startLoop(el, "scale(1)", `scale(${scale})`, { duration });
  }, [ref, scale, duration]);
}

/** Continuous gentle rotation back and forth for an attention/urgency icon. */
export function useIconWobble<T extends HTMLElement>(ref: RefObject<T | null>, degrees = 8, duration = 2.5) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    return startLoop(el, "rotate(0deg)", `rotate(${degrees}deg)`, { duration });
  }, [ref, degrees, duration]);
}
