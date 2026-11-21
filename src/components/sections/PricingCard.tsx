import { useLayoutEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";
import { gsap, prefersReducedMotion } from "../../animations/gsapConfig";
import { usePulse } from "../../animations/iconAnimations";
import { useScrollReveal } from "../../animations/scrollAnimations";
import type { Plan } from "../../data/plans";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

const VISIBLE_FEATURES = 5;

export function PricingCard({ plan, delay = 0 }: { plan: Plan; delay?: number }) {
  const [expanded, setExpanded] = useState(false);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const hiddenCount = plan.features.length - VISIBLE_FEATURES;
  const visibleFeatures = expanded ? plan.features : plan.features.slice(0, VISIBLE_FEATURES);

  const ref = useScrollReveal<HTMLDivElement>({ delay, y: 24 });
  usePulse(badgeRef);

  // Featured cards keep a permanent lg-only scale; GSAP must know about it so the
  // hover lift (which also writes `transform`) doesn't clobber that base scale.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const baseScale = plan.featured && window.innerWidth >= 1024 ? 1.05 : 1;
    const onEnter = () => gsap.to(el, { y: -4, scale: baseScale, duration: 0.25, ease: "power2.out" });
    const onLeave = () => gsap.to(el, { y: 0, scale: baseScale, duration: 0.25, ease: "power2.out" });
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [plan.featured, ref]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-full flex-col rounded-[var(--radius-card-lg)] border bg-white p-7 transition-shadow duration-300",
        plan.featured
          ? "border-2 border-[var(--color-green)] shadow-[var(--shadow-brand)] lg:scale-[1.05]"
          : "border-[var(--color-gray-light)] shadow-[var(--shadow-card-xs)] hover:shadow-[var(--shadow-card-md)]",
      )}
    >
      {plan.featured ? (
        <span
          ref={badgeRef}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-green)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md"
        >
          Mais contratado
        </span>
      ) : null}

      <h3 className="text-lg font-bold text-[var(--color-ink)]">{plan.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-gray-dark)]">
        {plan.companySize} · {plan.riskLevel}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray-dark)]">{plan.positioning}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-[var(--color-ink)]">{formatBRL(plan.price)}</span>
        <span className="text-sm font-medium text-[var(--color-gray-dark)]">/mês</span>
      </div>
      <p className="mt-1 text-xs text-[var(--color-gray-dark)]">
        Implantação: {formatBRL(plan.setupFee)}
      </p>

      <Button
        variant={plan.featured ? "primary" : "secondary"}
        className="mt-6 w-full"
        onClick={() => {
          document.dispatchEvent(
            new CustomEvent("protecseg:prefill", {
              detail: { need: "Outro", message: `Tenho interesse no plano ${plan.name}.` },
            }),
          );
          document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Quero contratar
      </Button>

      <div className="mt-7 flex-1 border-t border-[var(--color-gray-light)] pt-6">
        {plan.includesFrom ? (
          <p className="mb-3 text-xs font-semibold text-[var(--color-green-dark)]">
            Inclui tudo do {plan.includesFrom} +
          </p>
        ) : null}
        <ul className="space-y-2.5">
          {visibleFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--color-gray-dark)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-green)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {hiddenCount > 0 ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 flex items-center gap-1 text-xs font-semibold text-[var(--color-green-dark)]"
          >
            {expanded ? "Ver menos" : `+ ${hiddenCount} recursos inclusos`}
            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", expanded && "rotate-180")} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
