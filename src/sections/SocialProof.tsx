import { Reveal } from "../components/Reveal";
import { SOCIAL_PROOF } from "../lib/content";

export function SocialProof() {
  return (
    <section className="bg-brand-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{SOCIAL_PROOF.title}</h2>
        </Reveal>

        {SOCIAL_PROOF.testimonials.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border-2 border-dashed border-brand-gray-300 p-12 text-brand-gray-500">
              {SOCIAL_PROOF.note}
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SOCIAL_PROOF.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-6 text-left shadow-sm">
                  <p className="text-brand-gray-700">"{t.quote}"</p>
                  <p className="mt-4 font-semibold text-brand-graphite">{t.name}</p>
                  <p className="text-sm text-brand-gray-500">{t.company}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
