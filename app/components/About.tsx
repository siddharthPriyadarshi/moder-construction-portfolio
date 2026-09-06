import Image from "next/image";
import { COMPANY } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-navy-900">
            <Image
              src="/images/about.jpg"
              alt="Modern Construction Co. leadership addressing the site team"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-2xl border border-line bg-paper p-5 shadow-xl sm:block">
            <p className="font-display text-3xl text-navy-900">{new Date().getFullYear() - COMPANY.founded}+</p>
            <p className="mt-1 text-sm text-ink-600">Years serving heavy industry, since {COMPANY.founded}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Who We Are</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
              Built on values, grown through determination
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 leading-relaxed text-ink-600">
              Founded in {COMPANY.founded} by {COMPANY.founder}, {COMPANY.name} has grown from a
              humble startup into a professionally managed, industry-recognized organization &mdash;
              built on strong values, determination, and an unwavering commitment to excellence.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              We are a leading service provider across MEP projects, operations &amp; maintenance,
              transportation, housekeeping, resource management, and industrial supplies &mdash; a
              trusted partner to Tata Steel Ltd. and other esteemed clients, delivering solutions
              that align with client goals, safety standards, and industry benchmarks.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg uppercase text-navy-900">Our Commitment</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  ISO 45001:2018 certified, reflecting our systematic approach to risk management,
                  compliance, and continual improvement in health and safety performance.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase text-navy-900">Our Promise</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Protecting our workforce, partners, and stakeholders while consistently exceeding
                  client expectations on every venture we undertake.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
