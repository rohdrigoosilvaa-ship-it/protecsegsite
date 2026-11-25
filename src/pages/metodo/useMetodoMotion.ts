import { useEffect, useState, type RefObject } from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(el: HTMLElement) {
  const to = Number(el.dataset.to);
  const suffix = el.dataset.suf ?? "";
  const start = performance.now();
  const frame = (now: number) => {
    const k = Math.min(1, (now - start) / 1400);
    const eased = 1 - Math.pow(1 - k, 3);
    el.textContent = `${Math.round(to * eased)}${suffix}`;
    if (k < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/**
 * Entrada ao rolar do protótipo: cada `.rv` recebe `.in` ao entrar na tela
 * (15% visível), com atraso de 90 ms por posição entre os irmãos `.rv`, e os
 * `[data-to]` dentro dele contam de 0 ao valor. Elementos cujo className o
 * React controla marcam `data-rv-key`; a chave volta no Set retornado para o
 * componente manter o `.in` nos próximos renders.
 */
export function useMetodoMotion(rootRef: RefObject<HTMLElement | null>) {
  const [revealed, setRevealed] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
    for (const el of els) {
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => els.includes(c as HTMLElement));
      el.style.transitionDelay = `${Math.max(0, siblings.indexOf(el)) * 90}ms`;
    }

    const animateNumbers = !reducedMotion();
    const reveal = (el: HTMLElement) => {
      el.classList.add("in");
      const key = el.dataset.rvKey;
      if (key) setRevealed((current) => (current.has(key) ? current : new Set(current).add(key)));
      if (animateNumbers) el.querySelectorAll<HTMLElement>("[data-to]").forEach(countUp);
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);

  return revealed;
}
