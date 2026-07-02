"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-offwhite border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-18 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="shrink-0">
            <rect x="1" y="1" width="32" height="32" stroke="#e2971f" strokeWidth="1.5" />
            <path d="M8 25V13L17 7L26 13V25" stroke="#faf8f4" strokeWidth="1.6" />
            <path d="M8 25H26" stroke="#faf8f4" strokeWidth="1.6" />
            <path d="M13 25V17H21V25" stroke="#e2971f" strokeWidth="1.6" />
          </svg>
          <span className="font-display uppercase tracking-wide text-lg leading-tight">
            Al Nasir
            <span className="block text-[10px] font-data tracking-[0.25em] text-amber">
              CONSTRUCTION CO.
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-data text-xs tracking-[0.15em] uppercase">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-offwhite/80 hover:text-amber transition-colors"
            >
              <span className="text-amber/70 mr-1">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${company.phone.replace(/\s/g, "")}`}
          className="hidden md:inline-flex items-center gap-2 border border-amber text-amber px-4 py-2 font-data text-xs tracking-wider uppercase hover:bg-amber hover:text-charcoal transition-colors"
        >
          {company.phone}
        </a>

        <button
          className="md:hidden text-offwhite"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {open ? (
              <path d="M6 6L20 20M20 6L6 20" stroke="currentColor" strokeWidth="2" />
            ) : (
              <>
                <path d="M4 8H22" stroke="currentColor" strokeWidth="2" />
                <path d="M4 13H22" stroke="currentColor" strokeWidth="2" />
                <path d="M4 18H22" stroke="currentColor" strokeWidth="2" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-charcoal-2 px-5 py-4 flex flex-col gap-4 font-data text-sm tracking-wider uppercase">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-offwhite/85 hover:text-amber"
            >
              <span className="text-amber/70 mr-2">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-amber">
            {company.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
