import { SEGMENTS } from "@/lib/data";
import Reveal from "./Reveal";
import { SEGMENT_ICONS } from "./icons";

export default function Segments() {
  return (
    <section id="industries" className="border-y border-line bg-paper-dim py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our Segments</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-lg font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
                Industries we serve
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((segment, i) => {
            const Icon = SEGMENT_ICONS[i % SEGMENT_ICONS.length];
            return (
              <Reveal key={segment.title} delay={(i % 3) * 90}>
                <div className="flex items-center gap-4 rounded-xl border border-line bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: segment.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-navy-900">{segment.title}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
