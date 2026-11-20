import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function isMobileViewport() {
  return typeof window !== "undefined" && window.innerWidth < 640;
}

export const EASE = {
  out: "power2.out",
  outStrong: "power3.out",
  outExpo: "expo.out",
};

export const BREAKPOINTS = {
  mobile: "(max-width: 639px)",
  desktop: "(min-width: 640px)",
};

/**
 * True for an element already on screen in the prerendered HTML during the
 * first hydration. Hiding it to replay a scroll reveal would make it blink, so
 * reveal hooks leave such elements visible.
 */
export function wasPaintedByServer(el: Element) {
  if (typeof document === "undefined" || document.documentElement.dataset.psPrerendered !== "1") return false;
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}
