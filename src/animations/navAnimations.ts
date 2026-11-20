import { useLayoutEffect, useState, type RefObject } from "react";
import { EASE, ScrollTrigger, gsap, prefersReducedMotion } from "./gsapConfig";

/**
 * Header entrance sequence: logo fades in, nav links stagger in, CTA button last.
 * Selects children via data-nav attributes inside `scopeRef`.
 */
export function useNavEntrance(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const q = (sel: string) => scope.querySelectorAll(`[data-nav="${sel}"]`);

      gsap
        .timeline({ defaults: { ease: EASE.out } })
        .fromTo(q("logo"), { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(q("link"), { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 }, "-=0.25")
        .fromTo(q("cta"), { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.15");
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}

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
