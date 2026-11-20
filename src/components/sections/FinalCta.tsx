import { MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { LazyContactForm as ContactForm } from "./LazyContactForm";
import { siteConfig } from "../../data/site";
import { useScrollReveal } from "../../animations/scrollAnimations";

export function FinalCta() {
  const formRef = useScrollReveal<HTMLDivElement>({ delay: 0.15, y: 24, start: "top 85%" });
  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
    : "#";

  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-[var(--color-institutional)] to-[var(--color-institutional-deep)] py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              light
              align="left"
              eyebrow="Solicitar orçamento"
              title="Quero contratar a ProtecSeg."
              description="Preencha o formulário ou chame no WhatsApp — respondemos em até 1 dia útil, sem compromisso."
            />

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              Prefiro chamar no WhatsApp
            </a>
          </div>

          <div ref={formRef} className="rounded-[var(--radius-card-xl)] bg-white p-6 shadow-[var(--shadow-card-lg)] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
