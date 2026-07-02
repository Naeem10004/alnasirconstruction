import Link from "next/link";
import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display uppercase text-xl tracking-wide">
            {company.name}
          </div>
          <p className="mt-3 max-w-sm text-sm text-offwhite/70 leading-relaxed">
            Residential and commercial construction across Lahore and Punjab
            since {company.founded}. Structural engineering, project
            management and finishing under one contract.
          </p>
          <div className="mt-5 font-data text-xs tracking-widest text-amber uppercase">
            PEC-Registered &middot; ISO 9001 Site Practices
          </div>
        </div>

        <div>
          <div className="font-data text-xs tracking-[0.2em] text-amber uppercase mb-4">
            Sitemap
          </div>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li><Link href="/" className="hover:text-amber">Home</Link></li>
            <li><Link href="/about" className="hover:text-amber">About</Link></li>
            <li><Link href="/services" className="hover:text-amber">Services</Link></li>
            <li><Link href="/projects" className="hover:text-amber">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-amber">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-data text-xs tracking-[0.2em] text-amber uppercase mb-4">
            Site Office
          </div>
          <ul className="space-y-2 text-sm text-offwhite/80">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li className="text-offwhite/50">{company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-offwhite/50 font-data">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Site plan drawn up in Lahore, Pakistan.</span>
        </div>
      </div>
    </footer>
  );
}
