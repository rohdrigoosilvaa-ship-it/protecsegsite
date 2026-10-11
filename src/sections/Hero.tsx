import { ArrowRight, Bell, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { HERO, CONTACT } from "../lib/content";

const enter = (delay: number) => ({ animationDelay: `${delay}s` });

const cards = [
  { Icon: FileCheck2, title: "PGR atualizado", sub: "Válido até 12/2027", pos: "left-0 top-10", d: 0 },
  { Icon: Bell, title: "Alerta enviado", sub: "ASO vence em 15 dias", pos: "right-0 top-1/2", d: -1.6 },
  { Icon: CheckCircle2, title: "94% em conformidade", sub: "Painel ProtecSeg Digital", pos: "left-4 bottom-8", d: -3.2 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white to-brand-gray-50 pt-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl animate-drift" />
        <div className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl animate-drift-reverse" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-3xl">
          <div
            style={enter(0)}
            className="hero-enter mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green-light px-4 py-1.5 text-sm font-medium text-brand-green"
          >
            <ShieldCheck size={16} />
            {HERO.eyebrow}
          </div>

          <h1
            style={enter(0.08)}
            className="hero-enter text-balance text-4xl font-bold leading-tight tracking-tight text-brand-graphite md:text-6xl"
          >
            {HERO.title}
          </h1>

          <p style={enter(0.18)} className="hero-enter mt-6 max-w-xl text-lg text-brand-gray-700">
            {HERO.subtitle}
          </p>

          <div style={enter(0.28)} className="hero-enter mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/30"
            >
              {HERO.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 rounded-full border border-brand-gray-300 px-7 py-3.5 text-base font-semibold text-brand-graphite transition-colors hover:border-brand-graphite"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

        <div
          style={enter(0.2)}
          className="hero-enter-scale relative mx-auto hidden h-[440px] w-full max-w-[440px] lg:block"
          aria-hidden="true"
        >
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-brand-green/25 animate-spin-slow" />
          <div className="absolute inset-20 rounded-full bg-brand-green/5" />
          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] gradient-green text-white shadow-2xl shadow-brand-green/40">
            <ShieldCheck size={72} strokeWidth={1.5} />
          </div>

          {cards.map(({ Icon, title, sub, pos, d }, i) => (
            <div key={title} style={enter(0.5 + i * 0.15)} className={`hero-enter absolute ${pos}`}>
              <div
                style={{ animationDelay: `${d}s` }}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-graphite/10 animate-float"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-graphite">{title}</p>
                  <p className="text-xs text-brand-gray-500">{sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bob" aria-hidden="true">
        <div className="flex h-9 w-5 justify-center rounded-full border-2 border-brand-gray-300 pt-1.5">
          <div className="h-1.5 w-1 rounded-full bg-brand-gray-500" />
        </div>
      </div>
    </section>
  );
}
