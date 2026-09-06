import Image from "next/image";
import { USP_POINTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Safety() {
  return (
    <section className="bg-paper-dim py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our USP</p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
            Safety first, quality always
          </h2>
          <p className="mt-5 leading-relaxed text-ink-600">
            &ldquo;Our Aim: Zero Harm&rdquo; is more than a banner &mdash; it is how every crew is
            briefed before a shift begins. ISO 45001:2018 certification keeps that standard
            consistent across every site we operate on.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {USP_POINTS.map((point) => (
              <div key={point.title} className="border-l-2 border-orange-500 pl-5">
                <h3 className="font-display text-base uppercase text-navy-900">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{point.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy-900">
            <Image
              src="/images/safety.jpg"
              alt="The Modern Construction Co. crew with their 'Our Aim: Zero Harm' safety pledge"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
