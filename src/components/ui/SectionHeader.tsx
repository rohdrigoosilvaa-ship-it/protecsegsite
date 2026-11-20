import { cn } from "../../utils/cn";
import { useScrollReveal } from "../../animations/scrollAnimations";

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const ref = useScrollReveal<HTMLDivElement>({ y: 24, duration: 0.6, start: "top 85%" });

  return (
    <div
      ref={ref}
      className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}
    >
      {eyebrow ? (
        <span
          className={cn(
            "mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-[var(--color-green)]" : "text-[var(--color-green-dark)]",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-[var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-[var(--color-gray-mid)]" : "text-[var(--color-gray-dark)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
