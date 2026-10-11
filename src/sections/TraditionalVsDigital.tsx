import { Check, X } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { TRADITIONAL_VS_PROTECSEG as T } from "../lib/content";

export function TraditionalVsDigital() {
  return (
    <section className="bg-brand-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{T.title}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-2xl border border-brand-gray-300 bg-white p-8">
              <p className="font-semibold text-brand-gray-700">{T.traditional.label}</p>
              <ul className="mt-6 space-y-4">
                {T.traditional.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-gray-700">
                    <X size={18} className="mt-0.5 shrink-0 text-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="h-full rounded-2xl border-2 border-brand-green bg-white p-8 shadow-xl shadow-brand-green/10">
              <p className="font-semibold text-brand-green">{T.protecseg.label}</p>
              <ul className="mt-6 space-y-4">
                {T.protecseg.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-graphite">
                    <Check size={18} className="mt-0.5 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
