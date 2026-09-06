"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16 md:h-20">
        <Link href="#top" className="flex items-center gap-3 shrink-0">
          <Image src="/images/logo-mark.png" alt="" width={40} height={30} className="h-9 w-auto" priority />
          <span className="font-display text-[15px] sm:text-lg tracking-wide text-white uppercase">
            Modern Construction Co.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-orange-400"
        >
          Get a Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-navy-950 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-medium text-white/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-navy-950"
          >
            Get a Quote
          </a>
          <p className="mt-8 text-sm text-white/50">{COMPANY.phones[0]}</p>
        </nav>
      </div>
    </header>
  );
}
