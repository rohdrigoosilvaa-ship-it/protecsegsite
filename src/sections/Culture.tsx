import { Reveal } from "../components/Reveal";
import { CULTURE } from "../lib/content";

export function Culture() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold text-brand-graphite md:text-5xl">
            {CULTURE.title}
          </h2>
          <p className="mt-6 text-lg text-brand-gray-700">{CULTURE.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
