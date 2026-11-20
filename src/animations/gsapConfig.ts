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
