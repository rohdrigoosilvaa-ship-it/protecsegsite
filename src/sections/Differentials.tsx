import { motion } from "framer-motion";
import { Cpu, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { DIFFERENTIALS } from "../lib/content";

const icons = [Users, Cpu, MessageCircle, ShieldCheck];

export function Differentials() {
  return (
    <section className="bg-brand-black py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{DIFFERENTIALS.title}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DIFFERENTIALS.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-gray-900 bg-brand-graphite p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-brand-gray-300">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
