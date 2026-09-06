import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-mark.png" alt="" width={32} height={24} className="h-7 w-auto" />
          <div>
            <p className="font-display text-sm uppercase tracking-wide text-white">{COMPANY.legalName}</p>
            <p className="text-xs text-white/45">{COMPANY.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/55 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} {COMPANY.legalName} &middot; All rights reserved.
        </p>
      </div>
    </footer>
  );
}
