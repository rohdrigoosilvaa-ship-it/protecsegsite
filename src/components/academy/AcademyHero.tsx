import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";

export function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-institutional)] pb-20 pt-32 sm:pb-24 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--graphic-diagonal)" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--color-green)]/20 blur-[140px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-green)]/30 bg-[var(--color-green)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-green)]">
            Treinamentos EAD em SST
          </span>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-white/60">
            ProtecSeg
          </p>
          <h1 className="mt-1 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Protec<span className="text-[var(--color-green)]">Hub</span>
          </h1>

          <p className="mt-6 text-lg font-semibold leading-snug text-white sm:text-xl">
            Conhecimento que protege. Capacitação que transforma.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-gray-mid)]">
            Treinamentos de Segurança e Saúde no Trabalho para capacitar a sua equipe nas
            principais NRs.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="#catalogo" variant="primary">
              Ver treinamentos
            </ButtonLink>
            <ButtonLink href="#contato-academy" variant="outline">
              Fale com um especialista
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
