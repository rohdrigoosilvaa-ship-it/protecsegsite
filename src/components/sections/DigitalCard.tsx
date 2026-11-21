import type { DigitalSolution } from "../../data/digital";
import { AnimatedIconBadge } from "../ui/AnimatedIconBadge";
import { useHoverLift } from "../../animations/cardAnimations";
import { useScrollReveal } from "../../animations/scrollAnimations";

export function DigitalCard({ solution, delay = 0 }: { solution: DigitalSolution; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, y: 20 });
  useHoverLift(ref);

  return (
    <div
      ref={ref}
      className="group rounded-[var(--radius-card-lg)] border border-[var(--color-gray-light)] bg-white p-7 shadow-[var(--shadow-card-xs)] transition-colors duration-300 hover:border-[var(--color-green)]/40 hover:shadow-[var(--shadow-card-md)]"
    >
      <div className="flex items-center justify-between">
        <AnimatedIconBadge
          delay={delay}
          className="h-11 w-11 rounded-[var(--radius-card)] transition-colors group-hover:bg-[var(--color-green-100)]"
        >
          <solution.icon className="h-5 w-5 text-[var(--color-green-dark)]" />
        </AnimatedIconBadge>
        <span className="font-heading text-2xl font-extrabold text-[var(--color-gray-light)] transition-colors group-hover:text-[var(--color-green)]/30">
          {solution.number}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">{solution.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-gray-dark)]">
        {solution.description}
      </p>
      {solution.tags ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {solution.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-gray-light)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-gray-dark)]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
