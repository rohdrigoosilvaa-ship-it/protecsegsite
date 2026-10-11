import { AlertTriangle, Clock, EyeOff, FileWarning } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { PROBLEM } from "../lib/content";

const icons = [FileWarning, Clock, EyeOff, AlertTriangle];

export function Problem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl font-bold text-brand-graphite md:text-4xl">
            {PROBLEM.title}
          </h2>
          <p className="mt-4 text-lg text-brand-gray-700">{PROBLEM.description}</p>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={point.title}>
                <div className="group h-full rounded-2xl border border-brand-gray-100 bg-brand-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-black text-white transition-colors group-hover:bg-brand-green">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-semibold text-brand-graphite">{point.title}</h3>
                  <p className="mt-2 text-sm text-brand-gray-700">{point.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
