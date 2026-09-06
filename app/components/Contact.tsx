import { COMPANY } from "@/lib/data";
import Reveal from "./Reveal";
import { IconMail, IconPhone, IconPin } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Partner With Us
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
                Let&rsquo;s build what&rsquo;s next
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md leading-relaxed text-white/65">
                Tell us about your plant, shutdown, or fabrication need and our team will get back
                to you with a scoped, no-obligation response.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-orange-400"
                >
                  <IconPhone className="h-4 w-4" />
                  Call Us
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
                >
                  <IconMail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3 text-white">
                  <IconPhone className="h-5 w-5 text-orange-400" />
                  <span className="font-semibold">Phone</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/65">
                  {COMPANY.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3 text-white">
                  <IconMail className="h-5 w-5 text-orange-400" />
                  <span className="font-semibold">Email</span>
                </div>
                <a href={`mailto:${COMPANY.email}`} className="mt-3 block text-sm text-white/65 hover:text-white">
                  {COMPANY.email}
                </a>
              </div>

              {COMPANY.offices.map((office) => (
                <div key={office.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3 text-white">
                    <IconPin className="h-5 w-5 text-orange-400" />
                    <span className="font-semibold">{office.label}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{office.address}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
