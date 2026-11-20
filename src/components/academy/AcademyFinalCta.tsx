import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { ContactForm } from "../sections/ContactForm";

export function AcademyFinalCta() {
  return (
    <section
      id="contato-academy"
      className="bg-gradient-to-b from-[var(--color-institutional)] to-[var(--color-institutional-deep)] py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              light
              align="left"
              eyebrow="ProtecHub"
              title="Quer capacitar sua equipe?"
              description="Fale com a gente e descubra quais treinamentos fazem sentido para o seu time."
            />
          </div>

          <div className="rounded-[var(--radius-card-xl)] bg-white p-6 shadow-[var(--shadow-card-lg)] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
