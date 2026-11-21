import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { differentials } from "../../data/content";

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-[var(--color-gray-light)] py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="Diferenciais" title="Por que a ProtecSeg." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <Card key={item.title} delay={index * 0.06}>
              <h3 className="text-lg font-bold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
