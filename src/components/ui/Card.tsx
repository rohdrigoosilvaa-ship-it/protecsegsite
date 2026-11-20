import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHoverLift } from "../../animations/cardAnimations";
import { useScrollReveal } from "../../animations/scrollAnimations";

export function Card({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, y: 20 });
  useHoverLift(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius-card-lg)] border border-[var(--color-gray-light)] bg-white p-6 shadow-[var(--shadow-card-xs)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-md)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
