import { useRef, type CSSProperties } from "react";
import { ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { useHeroTimeline } from "../../animations/heroAnimations";
import { siteConfig } from "../../data/site";
import { characterImage, protec360Hero, protec360Steps } from "../../data/protec360";

const stepPositions = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];

function CycleIllustration() {
  return (
    <>
      <div data-hero="ring" className="absolute inset-[12%] rounded-full border-2 border-dashed border-white/20" />
      <div className="absolute inset-[24%] rounded-full border border-white/10" />
      <div
        data-hero="pulse"
        className="absolute inset-[30%] grid place-items-center rounded-full bg-gradient-to-br from-[var(--color-green)]/30 to-transparent"
      >
        <div className="text-center">
          <ShieldCheck className="mx-auto h-14 w-14 text-[var(--color-green)] sm:h-16 sm:w-16" strokeWidth={1.5} />
          <span className="mt-1 block font-heading text-lg font-extrabold tracking-tight text-white sm:text-xl">
            Protec<span className="text-[var(--color-green-bright)]">360</span>
          </span>
        </div>
      </div>

      {protec360Steps.map((step, index) => (
        <div key={step.number} className={`absolute ${stepPositions[index]}`}>
          <div
            data-hero="chip"
            style={{ "--ps-chip-index": index } as CSSProperties}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[var(--color-institutional-deep)]/80 px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:px-4 sm:py-2"
          >
            <span className="font-heading text-[var(--color-green-bright)]">{step.number}</span>
            {step.title}
          </div>
        </div>
      ))}
    </>
  );
}

export function Protec360Hero() {
  const scopeRef = useRef<HTMLElement>(null);
  useHeroTimeline(scopeRef);

  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        "Olá! Quero saber mais sobre o Método Protec360.",
      )}`
    : "#contato";

  return (
    <section
      ref={scopeRef}
      id="topo"
      className="relative overflow-hidden bg-[var(--color-institutional)] pb-20 pt-32 sm:pb-28 sm:pt-40"
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

      <Container className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span
            data-hero="badge"
            className="inline-flex items-center rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-green-bright)]"
          >
            {protec360Hero.eyebrow}
          </span>

          <h1
            data-hero="headline"
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {protec360Hero.titleStart}{" "}
            <span className="text-[var(--color-green-bright)]">{protec360Hero.titleHighlight}</span>
          </h1>

          <p data-hero="subtext" className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {protec360Hero.description}
          </p>

          <div data-hero="buttons" className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="#planos" variant="primary">
              Ver planos do Protec360
            </ButtonLink>
            <ButtonLink href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="outline">
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div
          data-hero="graphic"
          className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md"
          aria-label="Ciclo do Método Protec360: Diagnóstico, Regularização, Gestão e Acompanhamento"
          role="img"
        >
          {characterImage ? (
            <img
              src={characterImage}
              alt=""
              className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
            />
          ) : (
            <CycleIllustration />
          )}
        </div>
      </Container>
    </section>
  );
}
