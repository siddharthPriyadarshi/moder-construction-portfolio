import Image from "next/image";
import { PRODUCT_CATEGORIES, PRODUCT_TAGS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Product Range</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-navy-900 sm:text-4xl">
              Engineered products, fabricated in-house
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 leading-relaxed text-ink-600">
              Backed by deep technical knowledge and an experienced workforce, we fabricate a wide
              range of products currently supplied to our esteemed customers.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-line">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl uppercase text-white">{category.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-2xl border border-dashed border-line bg-paper-dim/60 px-6 py-6 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-navy-900">Also engineered by us</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {PRODUCT_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
