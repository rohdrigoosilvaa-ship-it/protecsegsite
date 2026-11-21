import { Cpu, FileCheck2, Search, Send, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { AnimatedIconBadge } from "../ui/AnimatedIconBadge";
import { solutions } from "../../data/solutions";

const icons = [FileCheck2, ShieldCheck, Search, Send, Cpu];

export function Solutions() {
  return (
    <section id="solucoes" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow="O que fazemos" title="Tudo que sua empresa precisa em SST." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card key={item.title} delay={index * 0.06} className="text-center">
                <AnimatedIconBadge delay={index * 0.15} className="mx-auto h-12 w-12 rounded-full">
                  <Icon className="h-6 w-6 text-[var(--color-green-dark)]" />
                </AnimatedIconBadge>
                <h3 className="mt-4 text-base font-bold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#planos"
            className="text-sm font-semibold text-[var(--color-green-dark)] transition-colors hover:text-[var(--color-green)]"
          >
            Conhecer nossas soluções →
          </a>
        </div>
      </Container>
    </section>
  );
}
