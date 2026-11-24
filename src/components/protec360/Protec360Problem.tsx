import { useState } from "react";
import { AlertTriangle, CheckCircle2, Hand, XCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { cn } from "../../utils/cn";
import { useScrollReveal } from "../../animations/scrollAnimations";
import { complianceScenario } from "../../data/protec360";

type View = "before" | "after";

const statusStyle = {
  critical: {
    icon: XCircle,
    badge: "bg-[var(--color-status-critical-soft)] text-[var(--color-status-critical-fg)]",
    iconColor: "text-[var(--color-status-critical)]",
    label: "Crítico",
  },
  attention: {
    icon: AlertTriangle,
    badge: "bg-[var(--color-status-attention-soft)] text-[var(--color-status-attention-fg)]",
    iconColor: "text-[var(--color-status-attention-fg)]",
    label: "Atenção",
  },
} as const;

function CompliancePanel() {
  const [view, setView] = useState<View>("before");
  const [revealed, setRevealed] = useState<number | null>(null);
  const pending = view === "before";

  return (
    <div>
      <p className="mb-4 flex items-center gap-2 text-sm text-[var(--color-gray-dark)]">
        <Hand className="h-4 w-4 shrink-0 text-[var(--color-green-dark)]" />
        Alterne entre as abas e veja o Protec360 na prática.
      </p>

      <div className="rounded-[var(--radius-card-xl)] border border-[var(--color-gray-light)] bg-white p-4 shadow-[var(--shadow-card-lg)] sm:p-6">
        <div role="tablist" aria-label="Situação da empresa" className="grid grid-cols-2 gap-1 rounded-full bg-[var(--color-gray-subtle)] p-1">
          {(
            [
              ["before", "Antes"],
              ["after", "Com o Protec360"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={view === key}
              onClick={() => {
                setView(key);
                setRevealed(null);
              }}
              className={cn(
                "rounded-full px-3 py-2 font-heading text-sm font-semibold transition-colors duration-200",
                view === key
                  ? key === "before"
                    ? "bg-[var(--color-ink)] text-white"
                    : "bg-[var(--color-green)] text-white"
                  : "text-[var(--color-gray-dark)] hover:text-[var(--color-ink)]",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-b border-[var(--color-gray-light)] pb-4">
          <div>
            <p className="font-heading text-sm font-bold text-[var(--color-ink)]">Painel de conformidade</p>
            <p className="text-xs text-[var(--color-gray-mid)]">Exemplo ilustrativo</p>
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-bold transition-colors duration-300",
              pending
                ? "bg-[var(--color-status-critical-soft)] text-[var(--color-status-critical-fg)]"
                : "bg-[var(--color-green-100)] text-[var(--color-green-dark)]",
            )}
          >
            {pending ? `${complianceScenario.length} pendências` : "Tudo em dia"}
          </span>
        </div>

        <ul className="mt-2 divide-y divide-[var(--color-gray-light)]" aria-live="polite">
          {complianceScenario.map((item, index) => {
            const style = statusStyle[item.before.status];
            const StatusIcon = pending ? style.icon : CheckCircle2;
            const open = pending && revealed === index;
            return (
              <li key={item.label} className="py-3">
                <button
                  type="button"
                  disabled={!pending}
                  aria-expanded={pending ? open : undefined}
                  onClick={() => setRevealed(open ? null : index)}
                  className="flex w-full items-start gap-3 text-left disabled:cursor-default"
                >
                  <StatusIcon
                    className={cn("mt-0.5 h-5 w-5 shrink-0", pending ? style.iconColor : "text-[var(--color-green)]")}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-heading text-sm font-bold text-[var(--color-ink)]">{item.label}</span>
                      {pending ? (
                        <span className={cn("rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide", style.badge)}>
                          {style.label}
                        </span>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-sm text-[var(--color-gray-dark)]",
                        pending && "underline decoration-[var(--color-status-critical)]/50 decoration-wavy underline-offset-4",
                      )}
                    >
                      {pending ? item.before.text : item.after}
                    </span>
                    <span
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-2 flex items-start gap-2 rounded-[var(--radius-card)] bg-[var(--color-green-light)] px-3 py-2 text-sm text-[var(--color-green-dark)]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                          Com o Protec360: {item.after.charAt(0).toLowerCase() + item.after.slice(1)}.
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-3 text-center text-xs text-[var(--color-gray-mid)]">
        {pending ? "Toque em um item pendente para ver a solução." : "Cada mudança na empresa volta para o diagnóstico."}
      </p>
    </div>
  );
}

export function Protec360Problem() {
  const textRef = useScrollReveal<HTMLDivElement>({ y: 24 });
  const panelRef = useScrollReveal<HTMLDivElement>({ y: 24, delay: 0.1 });

  return (
    <section className="bg-[var(--color-gray-subtle)] py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div ref={textRef} className="lg:pt-10">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green-dark)]">
            Isso parece com a sua empresa?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            A SST só vira prioridade quando chega uma notificação?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-gray-dark)]">
            Os documentos foram feitos uma vez e ficaram na gaveta. Exames, treinamentos e EPIs dependem de alguém
            lembrar. E quando a fiscalização ou o eSocial cobram, ninguém sabe ao certo o que está em dia.
          </p>
          <div className="mt-8 flex items-start gap-4 rounded-[var(--radius-card-lg)] border border-[var(--color-gray-light)] bg-white p-5 shadow-[var(--shadow-card-sm)]">
            <span aria-hidden className="mt-1 flex shrink-0">
              <span className="h-5 w-5 rounded-full bg-[var(--color-green)]" />
              <span className="-ml-2 h-5 w-5 rounded-full border-2 border-[var(--color-green)] bg-white" />
            </span>
            <p className="text-base font-semibold leading-snug text-[var(--color-ink)]">
              Isso acontece porque Segurança do Trabalho não é um documento. É uma rotina, e precisa de gestão
              contínua.
            </p>
          </div>
        </div>

        <div ref={panelRef}>
          <CompliancePanel />
        </div>
      </Container>
    </section>
  );
}
