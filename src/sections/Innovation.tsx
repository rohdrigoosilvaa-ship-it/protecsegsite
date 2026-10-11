import { Cpu } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { INNOVATION } from "../lib/content";

export function Innovation() {
  return (
    <section className="relative overflow-hidden bg-brand-graphite py-24 text-white md:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full border border-dashed border-brand-green/25 animate-spin-slow"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-dashed border-brand-green/15 animate-spin-slower"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
            <Cpu size={28} />
          </div>
          <h2 className="text-balance mt-6 text-3xl font-bold md:text-4xl">{INNOVATION.title}</h2>
          <p className="mt-4 text-lg text-brand-gray-300">{INNOVATION.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
