import { useLayoutEffect, type RefObject } from "react";
import { EASE, gsap, prefersReducedMotion } from "./gsapConfig";

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

    const ctx = gsap.context(() => {
      const q = (sel: string) => scope.querySelectorAll(`[data-hero="${sel}"]`);

      if (prefersReducedMotion()) {
        gsap.set(
          [q("badge"), q("headline"), q("subtext"), scope.querySelectorAll('[data-hero="buttons"] > *'), q("graphic"), q("chip")],
          { opacity: 1, y: 0, scale: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: EASE.outStrong } });

      tl.fromTo(q("badge"), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(q("headline"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.25")
        .fromTo(q("subtext"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .fromTo(
          scope.querySelectorAll('[data-hero="buttons"] > *'),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          q("graphic"),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: EASE.outExpo },
          "-=0.45",
        )
        .fromTo(q("chip"), { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.08 }, "-=0.4");
      // Note: chips' x/y are owned exclusively by their own continuous drift (useFloatDrift),
      // so the entrance above only touches opacity to avoid both tweens fighting over transform.

      // Continuous ambient motion, independent of the entrance sequence.
      gsap.to(q("ring"), { rotate: 360, duration: 40, ease: "none", repeat: -1 });
      gsap.to(q("pulse"), { scale: 1.06, duration: 4, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(q("blob"), { x: -30, y: 20, duration: 14, ease: "sine.inOut", repeat: -1, yoyo: true });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
