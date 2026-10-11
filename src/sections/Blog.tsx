import { Reveal } from "../components/Reveal";
import { BLOG } from "../lib/content";

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-brand-graphite md:text-4xl">{BLOG.title}</h2>
        </Reveal>

        {BLOG.posts.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border-2 border-dashed border-brand-gray-300 p-12 text-center text-brand-gray-500">
              {BLOG.note}
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {BLOG.posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="h-full rounded-2xl border border-brand-gray-100 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-xs text-brand-gray-500">{p.date}</p>
                  <h3 className="mt-2 font-semibold text-brand-graphite">{p.title}</h3>
                  <p className="mt-2 text-sm text-brand-gray-700">{p.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
