import { useRef } from "react";
import { AlertTriangle, BarChart3, ClipboardCheck, Cpu, ShieldCheck, TrendingUp } from "lucide-react";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { siteConfig } from "../../data/site";
import { useHeroTimeline } from "../../animations/heroAnimations";
import { HeroChip } from "./HeroChip";

const floatingChips = [
  {
    label: "Gestão de Riscos",
    icon: ShieldCheck,
    className: "left-2 top-6 lg:left-0 lg:top-10",
    duration: 5.5,
    range: 14,
    delay: 0,
  },
  {
    label: "Indicadores",
    icon: BarChart3,
    className: "right-0 top-24 lg:right-2 lg:top-28",
    duration: 6.5,
    range: 10,
    delay: 0.6,
  },
  {
    label: "Conformidade",
    icon: ClipboardCheck,
    className: "left-0 bottom-28 lg:-left-4 lg:bottom-32",
    duration: 7,
    range: 16,
    delay: 1.1,
  },
  {
    label: "Dados",
    icon: TrendingUp,
    className: "right-4 bottom-6 lg:right-0 lg:bottom-10",
    duration: 5,
    range: 12,
    delay: 0.3,
  },
  {
    label: "IA",
    icon: Cpu,
    className: "left-1/2 top-2 -translate-x-1/2 lg:left-[46%] lg:top-0",
    duration: 6,
    range: 18,
    delay: 1.6,
  },
  {
    label: "Prevenção",
    icon: AlertTriangle,
    className: "left-1/3 bottom-0 lg:left-[38%] lg:-bottom-4",
    duration: 5.8,
    range: 11,
    delay: 0.9,
  },
];

export function Hero() {
  const scopeRef = useRef<HTMLElement>(null);
  useHeroTimeline(scopeRef);

  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
    : "#contato";

  return (
    <section
      ref={scopeRef}
      id="topo"
      className="relative overflow-hidden bg-[var(--color-institutional)] pb-24 pt-32 sm:pb-32 sm:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--graphic-diagonal)" }}
      />
      <div
        aria-hidden
        data-hero="blob"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--color-green)]/20 blur-[140px]"
      />

      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span
            data-hero="badge"
            className="inline-flex items-center rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-green)]"
          >
            Consultoria em Segurança do Trabalho
          </span>

          <h1
            data-hero="headline"
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sua empresa em dia com a SST,{" "}
            <span className="text-[var(--color-green)]">com um plano que cabe no bolso.</span>
          </h1>

          <p data-hero="subtext" className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-gray-mid)]">
            PGR, PCMSO, LTCAT, treinamentos e gestão completa de SST — em um plano mensal do
            tamanho da sua empresa, sem letras miúdas.
          </p>

          <div data-hero="buttons" className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary">
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink href="#planos" variant="outline">
              Ver planos e preços
            </ButtonLink>
          </div>
        </div>

        <div data-hero="graphic" className="relative mx-auto hidden aspect-square w-full max-w-md sm:block">
          <div data-hero="ring" className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full border border-white/5" />
          <div
            data-hero="pulse"
            className="absolute inset-24 grid place-items-center rounded-full bg-gradient-to-br from-[var(--color-green)]/25 to-transparent"
          >
            <ShieldCheck className="h-20 w-20 text-[var(--color-green)]" strokeWidth={1.5} />
          </div>

          {floatingChips.map((chip, index) => (
            <HeroChip key={chip.label} {...chip} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
