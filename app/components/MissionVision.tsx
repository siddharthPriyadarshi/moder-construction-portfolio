import { MISSION_POINTS, VISION_POINTS } from "@/lib/data";
import Reveal from "./Reveal";
import { IconCheck } from "./icons";

function List({ points }: { points: { title: string; description: string }[] }) {
  return (
    <ul className="mt-8 space-y-6">
      {points.map((point) => (
        <li key={point.title} className="flex gap-4">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
            <IconCheck className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="font-semibold text-white">{point.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/60">{point.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function MissionVision() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Our Mission</p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
            Customer-centric excellence
          </h2>
          <List points={MISSION_POINTS} />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Our Vision</p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
            A vision for progress
          </h2>
          <List points={VISION_POINTS} />
        </Reveal>
      </div>
    </section>
  );
}
