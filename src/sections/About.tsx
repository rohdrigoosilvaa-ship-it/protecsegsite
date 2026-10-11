import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { ABOUT } from "../lib/content";

export function About() {
  return (
    <section id="sobre" className="bg-brand-gray-50 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal direction="left">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">
            Quem somos
          </span>
          <h2 className="mt-4 text-3xl font-bold text-brand-graphite md:text-4xl">{ABOUT.title}</h2>
          <p className="mt-6 text-lg text-brand-gray-700">{ABOUT.description}</p>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-gray-100 shadow-xl"
          >
            {/* Substituir por /recepcao.webp quando a foto for enviada */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-brand-gray-500">
              <Building2 size={40} />
              <span className="text-sm">[FOTO DA RECEPÇÃO]</span>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
