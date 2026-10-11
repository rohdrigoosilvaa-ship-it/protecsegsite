import { motion } from "framer-motion";
import { ArrowRight, Bell, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { HERO, CONTACT } from "../lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white to-brand-gray-50 pt-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green-light px-4 py-1.5 text-sm font-medium text-brand-green"
          >
            <ShieldCheck size={16} />
            {HERO.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-brand-graphite md:text-6xl"
          >
            {HERO.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-brand-gray-700"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/30"
            >
              {HERO.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => document.getElementById("metodo")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-brand-gray-300 px-7 py-3.5 text-base font-semibold text-brand-graphite transition-colors hover:border-brand-graphite"
            >
              {HERO.ctaSecondary}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden h-[440px] w-full max-w-[440px] lg:block"
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border-2 border-dashed border-brand-green/25"
          />
          <div className="absolute inset-20 rounded-full bg-brand-green/5" />
          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] gradient-green text-white shadow-2xl shadow-brand-green/40">
            <ShieldCheck size={72} strokeWidth={1.5} />
          </div>

          {[
            { Icon: FileCheck2, title: "PGR atualizado", sub: "Válido até 12/2027", pos: "left-0 top-10", d: 0 },
            { Icon: Bell, title: "Alerta enviado", sub: "ASO vence em 15 dias", pos: "right-0 top-1/2", d: 1.2 },
            { Icon: CheckCircle2, title: "94% em conformidade", sub: "Painel ProtecSeg Digital", pos: "left-4 bottom-8", d: 2.4 },
          ].map(({ Icon, title, sub, pos, d }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { delay: 0.7 + i * 0.2, duration: 0.5 },
                y: { delay: d, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute ${pos} flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-graphite/10`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-graphite">{title}</p>
                <p className="text-xs text-brand-gray-500">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-gray-500"
      >
        <div className="h-9 w-5 rounded-full border-2 border-brand-gray-300 flex justify-center pt-1.5">
          <div className="h-1.5 w-1 rounded-full bg-brand-gray-500" />
        </div>
      </motion.div>
    </section>
  );
}
