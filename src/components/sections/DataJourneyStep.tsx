import { useScrollReveal } from "../../animations/scrollAnimations";

export function DataJourneyStep({
  step,
  delay,
  isLast,
}: {
  step: string;
  delay: number;
  isLast: boolean;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, y: 10, duration: 0.4, start: "top 90%" });

  return (
    <div ref={ref} className="flex items-center gap-1.5">
      <span className="rounded-full border border-[var(--color-green)]/20 bg-[var(--color-green-light)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-green-dark)]">
        {step}
      </span>
      {!isLast ? (
        <span className="text-[var(--color-green)]" aria-hidden>
          &rarr;
        </span>
      ) : null}
    </div>
  );
}
