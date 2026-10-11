import { Building2, Factory, HardHat, Heart, ShoppingBag, Truck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { SEGMENTS } from "../lib/content";

const icons = [Factory, HardHat, ShoppingBag, Truck, Building2, Heart];

export function Segments() {
  return (
    <section id="segmentos" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{SEGMENTS.title}</h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {SEGMENTS.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={item}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-brand-gray-100 bg-brand-gray-50 p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-green/40 hover:bg-white hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-green shadow-sm transition-transform group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-medium text-brand-graphite">{item}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
