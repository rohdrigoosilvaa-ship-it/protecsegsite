import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { SOLUTION } from "../lib/content";

export function Solution() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-brand-black py-24 text-white md:py-32">
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-green/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">
            A solução
          </span>
          <h2 className="text-balance mt-4 text-3xl font-bold md:text-5xl">{SOLUTION.title}</h2>
          <p className="mt-6 text-lg text-brand-gray-300">{SOLUTION.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
