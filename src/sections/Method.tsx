import { m } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { METHOD } from "../lib/content";

export function Method() {
  return (
    <section id="metodo" className="bg-brand-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{METHOD.title}</h2>
          <p className="mt-4 text-lg text-brand-gray-700">{METHOD.description}</p>
        </Reveal>

        <div className="relative mt-20">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px">
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full origin-left bg-gradient-to-r from-brand-green/20 via-brand-green to-brand-green/20"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {METHOD.steps.map((step, i) => (
              <m.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative text-center"
              >
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white shadow-lg shadow-brand-green/30"
                >
                  {step.number}
                </m.div>
                <h3 className="mt-5 font-semibold text-brand-graphite">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-700">{step.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
