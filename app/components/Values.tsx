import { VALUES } from "@/lib/data";
import Reveal from "./Reveal";
import { VALUE_ICONS } from "./icons";

export default function Values() {
  return (
    <section className="border-y border-line bg-paper-dim py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our Values</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-xl font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
            What guides every project we take on
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = VALUE_ICONS[value.key];
            return (
              <Reveal key={value.key} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600/30 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg uppercase text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{value.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
