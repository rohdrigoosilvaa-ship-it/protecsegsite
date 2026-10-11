import { Quote, User } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { LEADERSHIP } from "../lib/content";

export function Leadership() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{LEADERSHIP.title}</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-brand-gray-50 p-8 md:grid-cols-[220px_1fr] md:p-12">
            <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-2xl bg-brand-gray-100 text-center text-brand-gray-500">
              <div className="flex flex-col items-center gap-2 px-4">
                <User size={40} />
                <span className="text-xs">[INSERIR FOTO REAL DO FUNDADOR]</span>
              </div>
            </div>
            <div>
              <Quote size={36} className="text-brand-green" />
              <p className="mt-4 text-xl italic text-brand-graphite">{LEADERSHIP.quote}</p>
              <p className="mt-6 font-semibold text-brand-graphite">{LEADERSHIP.name}</p>
              <p className="text-sm text-brand-gray-500">{LEADERSHIP.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
