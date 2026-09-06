import { WHY_CHOOSE_BENEFITS, WHY_CHOOSE_STATS } from "@/lib/data";
import Reveal from "./Reveal";
import { IconCheck } from "./icons";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Why Choose Us</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
              Your success is our business
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 leading-relaxed text-white/65">
              End-to-end EPC excellence &mdash; combining technical expertise, disciplined
              execution, and a proven track record to give your projects the foundation they
              deserve.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 border-y border-white/10 py-10 sm:grid-cols-3">
          {WHY_CHOOSE_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <p className="font-display text-4xl text-orange-400 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-white/55">{stat.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 6) * 70}>
              <div className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-semibold text-white">{benefit.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{benefit.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
