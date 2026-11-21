import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "../ui/Card";
import { useIconFloat } from "../../animations/iconAnimations";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Nr01Feature({ feature, delay }: { feature: Feature; delay: number }) {
  const iconRef = useRef<HTMLDivElement>(null);
  useIconFloat(iconRef, { delay: delay * 2 });

  return (
    <Card delay={delay}>
      <div
        ref={iconRef}
        className="grid h-11 w-11 place-items-center rounded-[var(--radius-card)] bg-[var(--color-green-light)]"
      >
        <feature.icon className="h-5 w-5 text-[var(--color-green-dark)]" />
      </div>
      <h3 className="mt-4 text-base font-bold text-[var(--color-ink)]">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">{feature.description}</p>
    </Card>
  );
}
