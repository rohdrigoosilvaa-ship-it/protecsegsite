import { Lightbulb, LineChart, Wrench } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { useScaleReveal, useScrollReveal } from "../../animations/scrollAnimations";

const pillars = [
  { icon: Wrench, label: "Técnica" },
  { icon: LineChart, label: "Gestão" },
  { icon: Lightbulb, label: "Inovação" },
];

export function About() {
  const textRef = useScrollReveal<HTMLDivElement>({ y: 24, start: "top 80%" });
  const imageRef = useScaleReveal<HTMLDivElement>({ start: "top 80%" });

  const labelRef = useScrollReveal<HTMLSpanElement>({ y: 14, duration: 0.5, start: "top 85%" });
  const titleRef = useScrollReveal<HTMLHeadingElement>({ y: 14, duration: 0.5, delay: 0.1, start: "top 85%" });
  const tagsRef = useScrollReveal<HTMLDivElement>({ y: 14, duration: 0.5, delay: 0.2, start: "top 85%" });
  const photoRef = useScaleReveal<HTMLDivElement>({ delay: 0.3, start: "top 85%" });

  return (
    <section id="sobre" className="bg-[var(--color-gray-light)] py-20 sm:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div ref={textRef}>
            <SectionHeader
              align="left"
              eyebrow="Sobre a ProtecSeg"
              title="Uma consultoria criada para fazer diferente."
            />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-gray-dark)]">
              A ProtecSeg nasceu da experiência prática em Segurança do Trabalho e da percepção de
              que muitas empresas ainda tratam SST apenas como uma obrigação documental.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-gray-dark)]">
              Criamos uma abordagem que combina conhecimento técnico, gestão, dados e tecnologia
              para transformar a SST em uma rotina mais simples, preventiva e estratégica.
            </p>
          </div>

          <div ref={imageRef} className="aspect-[4/3] overflow-hidden rounded-3xl">
            <img
              src="/assets/images/recepcao-protecseg.webp"
              alt="Recepção da ProtecSeg com a marca aplicada na parede"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 rounded-3xl bg-[var(--color-institutional)] p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <span ref={labelRef} className="block text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Liderança
            </span>
            <h3 ref={titleRef} className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Liderança técnica. Visão de negócio. Inovação.
            </h3>
            <div ref={tagsRef} className="mt-5 flex flex-wrap gap-3">
              {pillars.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--color-green)]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={photoRef}
            className="flex aspect-square w-40 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/15 text-center text-xs font-medium text-[var(--color-gray-mid)]"
          >
            [FOTO REAL DO FUNDADOR]
          </div>
        </div>
      </Container>
    </section>
  );
}
