import { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, CalendarCheck, Check, ChevronRight, Info, MessageCircle, Plus, ShieldCheck } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { Reveal } from "../components/Reveal";
import { CONTACT } from "../lib/content";
import { SERVICES, SERVICE_LIST, type ServiceSlug } from "../lib/services";

const enter = (delay: number) => ({ animationDelay: `${delay}s` });

function Ctas({ message, dark = false }: { message: string; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={CONTACT.booking}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-105 ${
          dark
            ? "bg-white text-brand-green-dark hover:shadow-lg"
            : "bg-brand-green text-white hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/30"
        }`}
      >
        <CalendarCheck size={18} />
        Agendar diagnóstico gratuito
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </a>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-base font-semibold transition-colors ${
          dark ? "border-white/40 text-white hover:border-white" : "border-brand-gray-300 text-brand-graphite hover:border-brand-graphite"
        }`}
      >
        <MessageCircle size={18} />
        Chamar no WhatsApp
      </a>
    </div>
  );
}

function ServiceFaq({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-colors ${isOpen ? "border-brand-green" : "border-brand-gray-100"}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <h3 className="font-semibold text-brand-graphite">{item.question}</h3>
              <m.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className={`shrink-0 ${isOpen ? "text-brand-green" : "text-brand-gray-500"}`}>
                <Plus size={20} />
              </m.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-5 text-brand-gray-700">{item.answer}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const s = SERVICES[slug];
  const others = SERVICE_LIST.filter((o) => o.slug !== slug);

  return (
    <LazyMotion features={domAnimation} strict>
      <Header />
      <main>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white to-brand-gray-50 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-6">
            <nav aria-label="Você está em" className="hero-enter mb-6 flex items-center gap-1 text-sm text-brand-gray-500" style={enter(0)}>
              <a href="/" className="hover:text-brand-green">Início</a>
              <ChevronRight size={14} />
              <span className="text-brand-gray-700">{s.navLabel}</span>
            </nav>
            <div style={enter(0.04)} className="hero-enter mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green-light px-4 py-1.5 text-sm font-medium text-brand-green">
              <ShieldCheck size={16} />
              {s.eyebrow}
            </div>
            <h1 style={enter(0.08)} className="hero-enter max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-brand-graphite md:text-5xl">
              {s.title}
            </h1>
            <p style={enter(0.16)} className="hero-enter mt-6 max-w-2xl text-lg text-brand-gray-700">
              {s.subtitle}
            </p>
            <div style={enter(0.24)} className="hero-enter mt-10">
              <Ctas message={s.whatsappMessage} />
            </div>
          </div>
        </section>

        {/* Sinais */}
        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{s.signsTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {s.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3 rounded-2xl border border-brand-gray-100 bg-white p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-brand-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Incluído */}
        <section className="bg-brand-gray-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{s.includedTitle}</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.included.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-brand-gray-100 bg-white p-6">
                    <h3 className="font-semibold text-brand-graphite">{item.title}</h3>
                    <p className="mt-2 text-sm text-brand-gray-700">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {s.notice && (
              <Reveal>
                <p className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-5 text-sm text-brand-gray-700 ring-1 ring-brand-gray-100">
                  <Info size={18} className="mt-0.5 shrink-0 text-brand-green" />
                  {s.notice}
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">Como funciona</h2>
            </Reveal>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {s.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <li className="h-full rounded-2xl border border-brand-gray-100 p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl gradient-green text-lg font-bold text-white">{i + 1}</span>
                    <h3 className="mt-4 font-semibold text-brand-graphite">{step.title}</h3>
                    <p className="mt-2 text-sm text-brand-gray-700">{step.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Investimento */}
        <section className="bg-brand-gray-50 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{s.pricing.title}</h2>
            </Reveal>
            {s.pricing.kind === "list" ? (
              <Reveal delay={0.08}>
                <dl className="mt-10 max-w-3xl divide-y divide-brand-gray-100 overflow-hidden rounded-2xl border border-brand-gray-100 bg-white">
                  {s.pricing.rows.map((row) => (
                    <div key={row.label} className="flex flex-wrap items-center justify-between gap-2 px-6 py-4">
                      <dt className="font-medium text-brand-graphite">{row.label}</dt>
                      <dd className="font-semibold text-brand-green-dark">{row.price}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : (
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {s.pricing.plans.map((plan, i) => (
                  <Reveal key={plan.name} delay={i * 0.06}>
                    <div className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 ${plan.highlight ? "border-brand-green shadow-lg shadow-brand-green/10" : "border-brand-gray-100"}`}>
                      {plan.highlight && (
                        <span className="absolute -top-3 left-6 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">Mais contratado</span>
                      )}
                      <h3 className="text-xl font-bold text-brand-graphite">{plan.name}</h3>
                      <p className="mt-1 text-sm text-brand-gray-500">{plan.size}</p>
                      <p className="mt-5 text-2xl font-bold text-brand-green-dark">{plan.price}</p>
                      <p className="text-sm text-brand-gray-500">{plan.setup}</p>
                      <ul className="mt-5 space-y-2 text-sm text-brand-gray-700">
                        {plan.items.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <Check size={16} className="mt-0.5 shrink-0 text-brand-green" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
            <p className="mt-6 max-w-3xl text-sm text-brand-gray-500">{s.pricing.note}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">Perguntas frequentes</h2>
            </Reveal>
            <ServiceFaq items={s.faq} />
          </div>
        </section>

        {/* CTA final */}
        <section id="contato" className="gradient-green py-20 text-white md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">Comece pelo diagnóstico gratuito de 30 minutos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Conferimos a situação de SST da sua empresa e você recebe um relatório de 1 página com o que está em dia, o que falta e as 3 prioridades. Sem compromisso.
            </p>
            <div className="mt-10 flex justify-center">
              <Ctas message={s.whatsappMessage} dark />
            </div>
          </div>
        </section>

        {/* Outros serviços */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-bold text-brand-graphite">Veja também</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <a key={o.slug} href={`/${o.slug}`} className="group flex items-center justify-between rounded-2xl border border-brand-gray-100 p-5 transition-colors hover:border-brand-green">
                  <span>
                    <span className="block text-sm text-brand-gray-500">{o.eyebrow}</span>
                    <span className="font-semibold text-brand-graphite">{o.title}</span>
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-brand-green transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </LazyMotion>
  );
}
