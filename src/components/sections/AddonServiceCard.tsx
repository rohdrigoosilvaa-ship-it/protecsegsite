import { useRef } from "react";
import { useHoverHighlight, useHoverLift } from "../../animations/cardAnimations";
import { useScrollReveal } from "../../animations/scrollAnimations";
import type { AddonService } from "../../data/plans";

export function AddonServiceCard({
  service,
  delay,
  formatBRL,
}: {
  service: AddonService;
  delay: number;
  formatBRL: (value: number) => string;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, y: 16, duration: 0.4 });
  const priceRef = useRef<HTMLParagraphElement>(null);
  useHoverLift(ref, -3);
  useHoverHighlight(ref, priceRef);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-[var(--color-gray-light)] bg-[var(--color-gray-subtle)] p-4"
    >
      <p className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{service.name}</p>
      <p ref={priceRef} className="mt-1.5 origin-left text-xs text-[var(--color-gray-dark)]">
        a partir de{" "}
        <span className="font-bold text-[var(--color-green-dark)]">{formatBRL(service.priceFrom)}</span>
        {service.unit ?? ""}
      </p>
    </div>
  );
}
