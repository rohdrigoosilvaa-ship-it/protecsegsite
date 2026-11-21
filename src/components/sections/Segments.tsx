import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { AnimatedIconBadge } from "../ui/AnimatedIconBadge";
import { segments } from "../../data/digital";

export function Segments() {
  return (
    <section id="segmentos" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Segmentos"
          title="Soluções adaptadas à realidade de cada negócio."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, index) => (
            <Card key={segment.name} delay={index * 0.04}>
              <AnimatedIconBadge delay={index * 0.15} className="h-11 w-11 rounded-[var(--radius-card)]">
                <segment.icon className="h-5 w-5 text-[var(--color-green-dark)]" />
              </AnimatedIconBadge>
              <h3 className="mt-4 text-base font-bold text-[var(--color-ink)]">{segment.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">
                {segment.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  document.dispatchEvent(
                    new CustomEvent("protecseg:prefill", {
                      detail: {
                        need: "Gestão de SST",
                        message: `Minha empresa é do segmento de ${segment.name.toLowerCase()} e quero saber mais sobre a solução da ProtecSeg.`,
                      },
                    }),
                  );
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-4 text-sm font-semibold text-[var(--color-green-dark)] transition-colors hover:text-[var(--color-green)]"
              >
                Ver solução →
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
