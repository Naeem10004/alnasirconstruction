import Link from "next/link";
import { company, stats, services, projects, testimonials } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import BlueprintBuilding from "@/components/BlueprintBuilding";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-charcoal text-offwhite overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="font-data text-xs tracking-[0.25em] text-amber uppercase mb-5">
              Est. {company.founded} &middot; Lahore, Pakistan
            </div>
            <h1 className="font-display uppercase text-5xl sm:text-6xl leading-[0.95] tracking-tight">
              Building
              <span className="block text-amber">Pakistan,</span>
              Brick by Brick
            </h1>
            <p className="mt-6 text-offwhite/70 text-lg max-w-md leading-relaxed">
              Al Nasir Construction Company designs, engineers and builds
              residential and commercial projects across Punjab — one fixed
              schedule, one accountable site office.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-amber text-charcoal px-6 py-3 font-data text-sm tracking-widest uppercase hover:bg-amber-light transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/projects"
                className="border border-offwhite/30 px-6 py-3 font-data text-sm tracking-widest uppercase hover:border-amber hover:text-amber transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="reveal">
            <BlueprintBuilding />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-steel text-offwhite">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-amber pl-4">
              <div className="font-display text-4xl">{s.value}</div>
              <div className="text-sm text-offwhite/80 mt-1">{s.label}</div>
              <div className="font-data text-[10px] tracking-[0.2em] text-amber/80 mt-2 uppercase">
                {s.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <SectionLabel index="01" label="What We Build" />
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="font-display uppercase text-3xl md:text-4xl">
            Construction Services
          </h2>
          <Link
            href="/services"
            className="font-data text-xs tracking-widest uppercase text-steel hover:text-amber"
          >
            Full scope of work &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s) => (
            <div
              key={s.id}
              className="corner-bracket bg-offwhite border border-line p-6"
            >
              <div className="font-data text-xs text-steel tracking-widest uppercase mb-3">
                {s.spec}
              </div>
              <h3 className="font-display text-xl uppercase mb-2">{s.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{s.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-charcoal-2 text-offwhite py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel index="02" label="Recent Work" dark />
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-display uppercase text-3xl md:text-4xl">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="font-data text-xs tracking-widest uppercase text-amber hover:text-amber-light"
            >
              All projects &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="border border-white/15 p-6 hover:border-amber/50 transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-data text-xs text-amber tracking-widest">
                    {p.year}
                  </span>
                  <span className="font-data text-xs text-offwhite/50 tracking-widest">
                    {p.type}
                  </span>
                </div>
                <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                <p className="text-sm text-offwhite/60 mt-2">{p.location}</p>
                <p className="font-data text-xs text-steel-light mt-4 tracking-wider">
                  {p.scale}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <SectionLabel index="03" label="Client Feedback" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-offwhite border border-line p-6 flex flex-col">
              <p className="text-ink/80 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 pt-4 border-t border-line">
                <div className="font-display uppercase text-sm">{t.name}</div>
                <div className="font-data text-xs text-steel">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-display uppercase text-3xl md:text-4xl text-charcoal max-w-lg">
            Have a site and a deadline? Let&rsquo;s draw up the plan.
          </h2>
          <Link
            href="/contact"
            className="bg-charcoal text-offwhite px-8 py-4 font-data text-sm tracking-widest uppercase hover:bg-charcoal-2 transition-colors shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
