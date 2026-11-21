import { AlertTriangle, ArrowUpRight, TrendingUp } from "lucide-react";
import { useScrollReveal } from "../../animations/scrollAnimations";

const metrics = [
  { label: "Frequência", value: "2,8", width: "62%" },
  { label: "Gravidade", value: "1,4", width: "38%" },
  { label: "Treinamentos", value: "94%", width: "94%" },
];

export function DashboardMockup() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 24, duration: 0.6, start: "top 85%" });

  return (
    <div
      ref={ref}
      className="mx-auto max-w-md rounded-[var(--radius-card-lg)] border border-white/10 bg-[var(--color-institutional-deep)] p-6 shadow-[var(--shadow-card-lg)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)]">
          ProtecOne
        </span>
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-[var(--color-gray-mid)]">
          Interface demonstrativa
        </span>
      </div>

      <div className="mt-4 flex items-end gap-3">
        <span className="text-5xl font-extrabold text-white">2,8</span>
        <span className="mb-2 flex items-center gap-1 text-sm font-semibold text-[var(--color-green)]">
          <TrendingUp className="h-4 w-4" />
          Tendência de crescimento
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
        <div className="text-sm">
          <p className="font-semibold text-amber-300">Atenção</p>
          <p className="text-amber-100/70">Desvio identificado.</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-[var(--color-gray-mid)]">{metric.label}</span>
              <span className="font-semibold text-white">{metric.value}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[var(--color-green)]" style={{ width: metric.width }} />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
      >
        Ver análise
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
}
