import { useLayoutEffect, useRef } from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { howItWorksSteps } from "../../data/content";
import { ScrollTrigger, gsap, prefersReducedMotion } from "../../animations/gsapConfig";

export function HowItWorks() {
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
    <section id="como-funciona" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Como funciona" title="Do diagnóstico à rotina, em 4 passos." />

        <div className="relative mt-12">
          <div
            ref={connectorRef}
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px origin-left bg-[var(--color-green)]/25 lg:block"
          />
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <Card key={step.number} delay={index * 0.07} className="text-center">
                <span className="font-heading text-3xl font-extrabold text-[var(--color-green)]/25">
                  {step.number}
                </span>
                <h3 className="mt-2 text-base font-bold text-[var(--color-ink)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
