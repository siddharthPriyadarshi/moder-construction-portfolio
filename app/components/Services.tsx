import { SERVICES } from "@/lib/data";
import Reveal from "./Reveal";
import { IconCheck } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">What We Do</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
              A comprehensive range of industrial services
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 leading-relaxed text-ink-600">
              Technical, operational, and support services delivered by one accountable partner
              &mdash; from plant O&amp;M and heavy fabrication to manpower, logistics, and supply.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-2xl border border-line bg-paper-dim/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:bg-paper hover:shadow-lg">
                <span className="font-display text-sm text-orange-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg uppercase text-navy-900">{service.title}</h3>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-600">
                      <IconCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
