import { useLayoutEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";
import { ScrollTrigger, gsap, prefersReducedMotion } from "../../animations/gsapConfig";
import { useScrollReveal } from "../../animations/scrollAnimations";
import { useHoverLift } from "../../animations/cardAnimations";
import {
  protec360Highlights,
  protec360Included,
  protec360Steps,
  protec360Trust,
  type IncludedItem,
} from "../../data/protec360";

export function Protec360Highlights() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="O que o Protec360 resolve" title="Segurança do Trabalho sem improviso." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {protec360Highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} delay={index * 0.08}>
                <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-card)] bg-[var(--color-green-light)] text-[var(--color-green-dark)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Protec360Statement() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 24 });
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-institutional)] to-[var(--color-institutional-deep)] py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ backgroundImage: "var(--graphic-diagonal)" }}
      />
      <Container className="relative">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green-bright)]">
            Sobre o método
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            O objetivo não é só ter os documentos.{" "}
            <span className="text-[var(--color-green-bright)]">É manter a empresa em conformidade todos os dias.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Por isso o Protec360 é um ciclo, e não um serviço pontual: diagnosticar, regularizar, assumir a gestão e
            acompanhar. Cada mudança na empresa volta para o começo.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function Protec360Steps() {
  const connectorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = connectorRef.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { scaleX: 1 });
      return;
    }
    gsap.set(el, { scaleX: 0 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      once: true,
      onEnter: () => gsap.to(el, { scaleX: 1, duration: 0.9, ease: "power2.out" }),
    });
    return () => trigger.kill();
  }, []);

  return (
    <section id="como-funciona" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Como funciona o Protec360"
          title="Quatro etapas, um ciclo contínuo."
          description="Do primeiro diagnóstico à rotina do dia a dia, a ProtecSeg cuida de cada fase."
        />

        <div className="relative mt-14">
          <div
            ref={connectorRef}
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px origin-left bg-[var(--color-green)]/30 lg:block"
          />
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {protec360Steps.map((step, index) => (
              <li key={step.number} className="flex">
                <Card delay={index * 0.08} className="flex w-full flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-green)] font-heading text-base font-extrabold text-white shadow-[var(--shadow-brand)]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">{step.description}</p>
                  <p className="mt-auto border-t border-[var(--color-gray-light)] pt-3 text-sm font-semibold text-[var(--color-green-dark)]">
                    {step.detail}
                  </p>
                </Card>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-[var(--color-green)]/25 bg-[var(--color-green-light)] px-4 py-2 text-sm font-semibold text-[var(--color-green-dark)]">
            <RotateCcw className="h-4 w-4" />
            Depois do acompanhamento, o ciclo recomeça: isso é o 360.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function Protec360Included() {
  return (
    <section id="incluso" className="bg-[var(--color-gray-subtle)] py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="O que está incluso"
          title="O que a sua empresa recebe no Protec360?"
          description="Dez frentes de SST cuidadas de forma integrada. O que entra em cada plano está detalhado logo abaixo."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {protec360Included.map((item, index) => (
            <IncludedCard key={item.number} item={item} delay={(index % 4) * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IncludedCard({ item, delay }: { item: IncludedItem; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, y: 20 });
  useHoverLift(ref);
  const Icon = item.icon;
  const featured = Boolean(item.featured);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col rounded-[var(--radius-card-lg)] p-6 transition-shadow duration-300",
        item.wide && "lg:col-span-2",
        featured
          ? "bg-[var(--color-green)] text-white shadow-[var(--shadow-brand)]"
          : "border border-[var(--color-gray-light)] bg-white shadow-[var(--shadow-card-xs)] hover:shadow-[var(--shadow-card-md)]",
      )}
    >
      <div className="flex items-center justify-between">
        <span className={cn("font-heading text-sm font-semibold", featured ? "text-white/75" : "text-[var(--color-gray-mid)]")}>
          {item.number}
        </span>
        <Icon className={cn("h-5 w-5", featured ? "text-white" : "text-[var(--color-green-dark)]")} />
      </div>
      <h3 className={cn("mt-6 text-xl font-bold", featured ? "text-white" : "text-[var(--color-ink)]")}>{item.title}</h3>
      <p className={cn("mt-2 text-sm", featured ? "text-white/85" : "text-[var(--color-gray-dark)]")}>{item.example}</p>
    </div>
  );
}

export function Protec360Trust() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Por que confiar"
          title="Sem promessas vazias. Com método."
          description="Você sabe desde o início o que está contratando, quanto custa e como acompanhar."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {protec360Trust.map((item, index) => (
            <Card key={item.title} delay={index * 0.07}>
              <span aria-hidden className="block h-1 w-10 rounded-full bg-[var(--color-green)]" />
              <h3 className="mt-4 text-base font-bold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
