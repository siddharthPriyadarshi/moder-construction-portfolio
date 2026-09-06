import Image from "next/image";
import { CLIENTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Clients() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
            Trusted by leading industrial names
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="flex h-24 items-center justify-center rounded-xl border border-line bg-paper-dim/40 px-6 py-4 grayscale transition-all duration-300 hover:grayscale-0 hover:border-blue-600/20"
              >
                <Image
                  src={client.file}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-600">
            Our continued engagement with <strong className="text-navy-900">Tata Steel Limited</strong>
            &mdash; one of the world&rsquo;s most demanding industrial operators &mdash; speaks louder
            than any promise. Multiple repeat work orders reflect the confidence our clients place in
            our ability to deliver safely, on time, and to the highest standards.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
