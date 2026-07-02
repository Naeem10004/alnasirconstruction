import Link from "next/link";
import { services } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "Services | Al Nasir Construction Company",
};

const process = [
  { step: "01", title: "Site Survey & Soil Test", detail: "Load-bearing capacity and site conditions assessed before design begins." },
  { step: "02", title: "Structural & Architectural Design", detail: "Drawings and reinforcement detailing prepared and cross-checked in-house." },
  { step: "03", title: "Approvals & Procurement", detail: "Municipal approvals secured; materials and subcontractors locked in against the schedule." },
  { step: "04", title: "Construction & Weekly Reporting", detail: "Site work proceeds against a fixed baseline programme with weekly client updates." },
  { step: "05", title: "Snagging & Handover", detail: "Formal walkthrough and snag list closed out before keys change hands." },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-charcoal text-offwhite relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <div className="font-data text-xs tracking-[0.25em] text-amber uppercase mb-5">
            Scope of Work
          </div>
          <h1 className="font-display uppercase text-4xl md:text-5xl max-w-2xl leading-tight">
            Construction Services
          </h1>
          <p className="mt-6 text-offwhite/70 max-w-2xl leading-relaxed">
            From soil test to snag list, we run residential and commercial
            construction under a single contract — structural design,
            procurement, site supervision and finishing included.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.id} className="corner-bracket bg-offwhite border border-line p-7">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl uppercase">{s.title}</h2>
                <span className="font-data text-[11px] text-steel border border-steel/40 px-2 py-1 tracking-wider uppercase shrink-0 ml-3">
                  {s.spec}
                </span>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-charcoal-2 text-offwhite py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel index="—" label="Order of Operations" dark />
          <h2 className="font-display uppercase text-3xl md:text-4xl mb-12">
            How a Project Runs
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="font-display text-4xl text-amber">{p.step}</div>
                <h3 className="font-display text-lg uppercase mt-3 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-offwhite/60 leading-relaxed">
                  {p.detail}
                </p>
                {i < process.length - 1 && (
                  <span className="hidden md:block absolute top-5 -right-3 w-6 h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-display uppercase text-3xl md:text-4xl text-charcoal max-w-lg">
            Tell us the site, the brief and the deadline.
          </h2>
          <Link
            href="/contact"
            className="bg-charcoal text-offwhite px-8 py-4 font-data text-sm tracking-widest uppercase hover:bg-charcoal-2 transition-colors shrink-0"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
