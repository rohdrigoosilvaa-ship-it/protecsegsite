import { CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { DigitalCard } from "./DigitalCard";
import { DashboardMockup } from "./DashboardMockup";
import { DataJourneyStep } from "./DataJourneyStep";
import { useScrollReveal } from "../../animations/scrollAnimations";
import { digitalSolutions, dataJourney } from "../../data/digital";

const protecOneFeatures = [
  "PGR digital, com geração automática de laudo em PDF",
  "Gestão de PCMSO, ASOs e exames",
  "CIPA e LTCAT integrados",
  "Cockpit de eSocial",
  "Controle de vencimento de documentos",
  "Multiempresa, com controle de acesso por empresa/unidade",
];

export function ProtecOneSection() {
  const leftContentRef = useScrollReveal<HTMLDivElement>({ y: 24, start: "top 80%" });

  return (
    <section id="protecone" className="bg-[var(--color-gray-subtle)] py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="ProtecOne"
          title="Gestão inteligente de SST."
          description="Sua SST não deveria depender de planilhas. Centralizamos dados, indicadores, documentos e ações para que sua equipe consiga enxergar o que está acontecendo — e agir antes que o problema vire acidente, afastamento ou não conformidade."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3">
          {dataJourney.map((step, index) => (
            <DataJourneyStep
              key={step}
              step={step}
              delay={index * 0.08}
              isLast={index === dataJourney.length - 1}
            />
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {digitalSolutions.map((solution, index) => (
            <DigitalCard key={solution.number} solution={solution} delay={index * 0.06} />
          ))}
        </div>

        <div className="mt-14 grid items-center gap-10 rounded-[var(--radius-card-xl)] border border-[var(--color-gray-light)] bg-white p-8 shadow-[var(--shadow-card-xs)] lg:grid-cols-2 lg:p-12">
          <div ref={leftContentRef}>
            <span className="inline-block rounded-full bg-[var(--color-green-light)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-green-dark)]">
              Nossa plataforma própria
            </span>
            <h3 className="mt-3 text-2xl font-bold text-[var(--color-ink)]">ProtecOne</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-gray-dark)]">
              Uma plataforma própria para centralizar documentos, riscos, pessoas, indicadores e
              processos de Segurança do Trabalho em um único ambiente.
            </p>
            <ul className="mt-5 space-y-2">
              {protecOneFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--color-gray-dark)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-green)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              className="mt-6"
              onClick={() => {
                document.dispatchEvent(
                  new CustomEvent("protecseg:prefill", {
                    detail: {
                      need: "ProtecOne (plataforma SST)",
                      message: "Quero conhecer a plataforma ProtecOne.",
                    },
                  }),
                );
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conhecer o ProtecOne
            </Button>
          </div>
          <DashboardMockup />
        </div>
      </Container>
    </section>
  );
}
