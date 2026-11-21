import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { PricingCard } from "./PricingCard";
import { plans } from "../../data/plans";
import { siteConfig } from "../../data/site";

export function Plans() {
  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        "Olá! Minha empresa tem mais de 150 colaboradores, gostaria de uma proposta sob medida.",
      )}`
    : "#contato";

  return (
    <section id="planos" className="bg-[var(--color-gray-light)] py-24 sm:py-32">
      <Container>
        <span className="mx-auto mb-4 block w-fit rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-green-dark)]">
          O plano certo para o tamanho da sua empresa
        </span>
        <SectionHeader
          title="Planos ProtecSeg"
          description="Escolha pelo número de colaboradores e comece a regularizar sua empresa esta semana."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} delay={index * 0.07} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[var(--color-gray-dark)]">
          Mais de 150 colaboradores?{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-green-dark)] underline underline-offset-2"
          >
            Fale com a gente no WhatsApp
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
