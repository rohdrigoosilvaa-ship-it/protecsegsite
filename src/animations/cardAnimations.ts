import { useLayoutEffect, type RefObject } from "react";
import { gsap, prefersReducedMotion } from "./gsapConfig";

/** Elegant hover lift for cards (y: 0 -> -4). Pairs with a ref already used for scroll reveal. */
export function useHoverLift<T extends HTMLElement>(ref: RefObject<T | null>, y = -4) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const onEnter = () => gsap.to(el, { y, duration: 0.25, ease: "power2.out" });
    const onLeave = () => gsap.to(el, { y: 0, duration: 0.25, ease: "power2.out" });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, [ref, y]);
}

/** Subtle hover scale for buttons/CTAs (scale: 1 -> 1.02). */
export function useHoverScale<T extends HTMLElement>(ref: RefObject<T | null>, scale = 1.02) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const onEnter = () => gsap.to(el, { scale, duration: 0.2, ease: "power2.out" });
    const onLeave = () => gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.out" });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, [ref, scale]);
}

/** Small scale highlight on a child element (e.g. a price), triggered by hovering a parent. */
export function useHoverHighlight<T extends HTMLElement>(
  parentRef: RefObject<T | null>,
  targetRef: RefObject<HTMLElement | null>,
  scale = 1.05,
) {
  useLayoutEffect(() => {
    const parent = parentRef.current;
    const target = targetRef.current;
    if (!parent || !target || prefersReducedMotion()) return;

    const onEnter = () => gsap.to(target, { scale, duration: 0.2, ease: "power2.out" });
    const onLeave = () => gsap.to(target, { scale: 1, duration: 0.2, ease: "power2.out" });
    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(target);
    };
  }, [parentRef, targetRef, scale]);
}

/** Small icon reaction (scale + slight rotation) triggered by hovering a parent element. */
export function useIconReaction<T extends HTMLElement>(
  parentRef: RefObject<T | null>,
  iconRef: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    const parent = parentRef.current;
    const icon = iconRef.current;
    if (!parent || !icon || prefersReducedMotion()) return;

    const onEnter = () => gsap.to(icon, { scale: 1.12, rotate: -6, duration: 0.3, ease: "power2.out" });
    const onLeave = () => gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(icon);
    };
  }, [parentRef, iconRef]);
}
