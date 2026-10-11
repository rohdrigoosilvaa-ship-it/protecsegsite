import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { NOT_JUST_DOCUMENTS } from "../lib/content";

export function NotJustDocuments() {
  return (
    <section className="relative overflow-hidden gradient-green py-24 text-white md:py-32">
      <motion.div
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 -left-1/4 w-1/2 bg-white/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold md:text-5xl">{NOT_JUST_DOCUMENTS.title}</h2>
          <p className="mt-6 text-lg text-white/90">{NOT_JUST_DOCUMENTS.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
