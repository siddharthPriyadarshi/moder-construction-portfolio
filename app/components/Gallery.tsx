import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-line bg-paper-dim py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">On Site</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
              Life at Modern Construction Co.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {GALLERY_IMAGES.map((image, i) => (
            <Reveal key={image.src} delay={i * 90}>
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
