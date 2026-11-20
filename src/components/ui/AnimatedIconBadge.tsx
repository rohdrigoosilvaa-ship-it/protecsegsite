import { useRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useIconFloat } from "../../animations/iconAnimations";

export function AnimatedIconBadge({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useIconFloat(ref, { delay });

  return (
    <div ref={ref} className={cn("grid place-items-center bg-[var(--color-green-light)]", className)}>
      {children}
    </div>
  );
}
