import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Bell, FileCheck2, Smartphone } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { DIGITAL } from "../lib/content";

const icons = [FileCheck2, Bell, BarChart3, Smartphone];

function AnimatedPercentage({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1200;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{value}%</span>;
}

export function ProtecsegDigital() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              {DIGITAL.eyebrow}
            </span>
            <h2 className="text-balance mt-4 text-3xl font-bold text-brand-graphite md:text-4xl">
              {DIGITAL.title}
            </h2>
            <p className="mt-4 text-lg text-brand-gray-700">{DIGITAL.description}</p>

            <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {DIGITAL.features.map((f, i) => {
                const Icon = icons[i];
                return (
                  <StaggerItem key={f.title}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-graphite">{f.title}</p>
                        <p className="text-sm text-brand-gray-700">{f.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-2xl border border-brand-gray-100 bg-brand-gray-50 p-6 shadow-2xl shadow-brand-graphite/10 md:p-8"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-brand-graphite">{DIGITAL.dashboard.status}</p>
                <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse" />
              </div>

              <div className="mt-6 flex items-end gap-4">
                <p className="text-5xl font-bold text-brand-green">
                  <AnimatedPercentage target={DIGITAL.dashboard.percentage} />
                </p>
                <div className="mb-2 h-3 flex-1 overflow-hidden rounded-full bg-brand-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${DIGITAL.dashboard.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full gradient-green"
                  />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {DIGITAL.dashboard.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <p className="text-xl font-bold text-brand-graphite">{m.value}</p>
                    <p className="mt-1 text-xs text-brand-gray-500">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
