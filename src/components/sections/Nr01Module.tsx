import { ArrowRight, ShieldAlert } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { CountUpStat } from "../ui/CountUpStat";
import { Nr01Feature } from "./Nr01Feature";
import { useScrollReveal } from "../../animations/scrollAnimations";
import { useIconWobble } from "../../animations/iconAnimations";
import { useRef } from "react";
import { nr01Faq, nr01Features, nr01Stats } from "../../data/nr01";

function requestDemo() {
  document.dispatchEvent(
    new CustomEvent("protecseg:prefill", {
      detail: {
        need: "Riscos Psicossociais (NR-01)",
        message: "Quero conhecer o Módulo NR-01 da ProtecSeg.",
      },
    }),
  );
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
}

export function Nr01Module() {
  const bannerRef = useScrollReveal<HTMLDivElement>({ y: 16, start: "top 85%" });
  const shieldRef = useRef<HTMLDivElement>(null);
  useIconWobble(shieldRef);

  return (
    <section id="nr01" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Módulo NR-01"
          title="Gestão de riscos psicossociais e conformidade com a NR-01."
          description="Mapeamos a saúde mental da sua equipe e organizamos toda a documentação exigida pela NR-01 — para sua empresa ficar em dia sem depender de planilhas soltas."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {nr01Features.map((feature, index) => (
            <Nr01Feature key={feature.title} feature={feature} delay={index * 0.07} />
          ))}
        </div>

        <div
          ref={bannerRef}
          className="mt-10 flex flex-col items-center gap-6 rounded-[var(--radius-card-lg)] border border-[#EFDCA4] bg-[var(--color-status-attention-soft)] p-6 text-center sm:flex-row sm:p-8 sm:text-left"
        >
          <div ref={shieldRef} className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/60">
            <ShieldAlert className="h-7 w-7 text-[var(--color-status-attention-fg)]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold leading-snug text-[var(--color-ink)] sm:text-xl">
              O prazo para adequação venceu em{" "}
              <span className="text-[var(--color-status-attention-fg)]">26 de maio de 2026.</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-gray-dark)]">
              Empresas fora de conformidade estão sujeitas a multa por infração no envio do
              eSocial, além de maior exposição em fiscalizações e passivos trabalhistas.
            </p>
          </div>
          <Button variant="primary" className="shrink-0" onClick={requestDemo}>
            Regularizar minha empresa
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {nr01Stats.map((stat, index) => (
            <Card key={stat.label} delay={index * 0.06} className="text-center">
              <CountUpStat
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-heading text-3xl font-extrabold text-[var(--color-green-dark)]"
              />
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-gray-dark)]">{stat.label}</p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-gray-mid)]">
          Fontes: Portaria MTE nº 1.131/2025; dados de afastamento por saúde mental do INSS/Ministério
          da Previdência Social (2022–2024). Consulte a legislação vigente antes de tomar decisões
          jurídicas ou regulatórias.
        </p>

        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="text-center text-xl font-bold text-[var(--color-ink)]">
            Perguntas frequentes sobre a NR-01
          </h3>
          <div className="mt-6 divide-y divide-[var(--color-gray-light)]">
            {nr01Faq.map((item) => (
              <div key={item.question} className="py-4">
                <p className="font-semibold text-[var(--color-ink)]">{item.question}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-gray-dark)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary" onClick={requestDemo}>
            Solicitar demonstração do Módulo NR-01
          </Button>
        </div>
      </Container>
    </section>
  );
}
