import Image from "next/image";
import { COMPANY, HERO_STATS } from "@/lib/data";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Heavy fabrication being transported from the Modern Construction Co. yard"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-40 sm:px-8 md:pb-20">
        <Reveal>
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
            ISO 45001:2018 Certified &middot; Est. {COMPANY.founded}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-4xl font-display text-4xl uppercase leading-[1.05] text-white text-balance sm:text-6xl md:text-7xl">
            {COMPANY.tagline}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            A professionally managed industrial services partner for O&amp;M, heavy fabrication,
            MEP, and manpower solutions &mdash; trusted by Tata Steel and other leading industrial
            names for over {new Date().getFullYear() - COMPANY.founded} years.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-orange-400"
            >
              Partner With Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Explore Services
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-white sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/55 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
