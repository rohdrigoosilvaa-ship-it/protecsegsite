import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { useFloatDrift } from "../../animations/iconAnimations";

export function HeroChip({
  label,
  icon: Icon,
  className,
  duration,
  range,
  delay,
}: {
  label: string;
  icon: LucideIcon;
  className: string;
  duration: number;
  range: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useFloatDrift(ref, { delay, y: range, x: range / 3, duration });

  return (
    <div
      ref={ref}
      data-hero="chip"
      className={`absolute flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm ${className}`}
    >
      <Icon className="h-3.5 w-3.5 text-[var(--color-green)]" />
      {label}
    </div>
  );
}
