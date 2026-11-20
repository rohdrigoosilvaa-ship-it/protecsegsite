import { useLayoutEffect, type RefObject } from "react";
import { gsap, prefersReducedMotion } from "./gsapConfig";
import { startLoop } from "./iconAnimations";

/**
 * Builds the Hero's cinematic entrance sequence. Elements are selected via
 * data-hero attributes inside the given scope, so Hero.tsx doesn't need to
 * thread a ref per element.
 *
 * Expected data-hero markers inside `scopeRef`:
 *  - "badge"        the eyebrow badge
 *  - "headline"     the H1
 *  - "subtext"      the paragraph under the headline
 *  - "buttons"      wrapper whose direct children are the CTA buttons
 *  - "graphic"      the right-side circular graphic wrapper
 *  - "ring"         the slow-rotating outer ring
 *  - "pulse"        the pulsing center circle
 *  - "chip"         each floating chip (continuous drift handled separately)
 */
export function useHeroTimeline(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const loops: Array<() => void> = [];
    const ctx = gsap.context(() => {
      const q = (sel: string) => scope.querySelectorAll(`[data-hero="${sel}"]`);

      // The entrance sequence (badge → headline → subtext → buttons → graphic →
      // chips) is CSS in index.css so it plays from the prerendered HTML.
      if (prefersReducedMotion()) return;

      // Continuous ambient motion, independent of the entrance sequence.
      const els = (sel: string) => Array.from(q(sel)) as HTMLElement[];
      for (const el of els("ring"))
        loops.push(startLoop(el, "rotate(0deg)", "rotate(360deg)", { duration: 40, easing: "linear", direction: "normal" }));
      for (const el of els("pulse")) loops.push(startLoop(el, "scale(1)", "scale(1.06)", { duration: 4 }));
      for (const el of els("blob"))
        loops.push(startLoop(el, "translate3d(0, 0, 0)", "translate3d(-30px, 20px, 0)", { duration: 14 }));
    }, scope);

    return () => {
      ctx.revert();
      loops.forEach((stop) => stop());
    };
  }, [scopeRef]);
}
