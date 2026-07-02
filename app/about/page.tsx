import { company, stats, timeline } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "About | Al Nasir Construction Company",
};

const values = [
  {
    title: "Fixed Schedules",
    detail:
      "Every contract runs against a baseline programme agreed before groundbreaking. Delays are flagged the week they happen, not the month after.",
  },
  {
    title: "In-House Structural Review",
    detail:
      "Reinforcement detailing and load calculations are checked by our own structural desk before third-party proofing — fewer surprises during inspection.",
  },
  {
    title: "One Point of Contact",
    detail:
      "A single site manager coordinates every subcontractor, so clients get one status update instead of five conflicting ones.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-charcoal text-offwhite relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <div className="font-data text-xs tracking-[0.25em] text-amber uppercase mb-5">
            About the Company
          </div>
          <h1 className="font-display uppercase text-4xl md:text-5xl max-w-2xl leading-tight">
            25 years of building to spec, on schedule, across Punjab
          </h1>
          <p className="mt-6 text-offwhite/70 max-w-2xl leading-relaxed">
            {company.name} was founded in {company.founded} as a small
            residential contractor in Lahore. Today we run structural
            engineering, project management and finishing crews across
            residential, commercial and mixed-use sites throughout Punjab.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-steel text-offwhite">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-amber pl-4">
              <div className="font-display text-4xl">{s.value}</div>
              <div className="text-sm text-offwhite/80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <SectionLabel index="01" label="How We Got Here" />
        <h2 className="font-display uppercase text-3xl md:text-4xl mb-12">
          Company Timeline
        </h2>
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div
                  className={`md:contents`}
                >
                  <div
                    className={`${
                      i % 2 === 0
                        ? "md:text-right md:pr-10"
                        : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <div className="font-display text-3xl text-steel">{t.year}</div>
                    <p className="text-sm text-ink/70 mt-2 max-w-sm md:ml-auto leading-relaxed">
                      {t.label}
                    </p>
                  </div>
                </div>
                <span className="absolute left-8 md:left-1/2 top-1 w-3 h-3 bg-amber -translate-x-1/2 border-2 border-concrete" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-charcoal-2 text-offwhite py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel index="02" label="How We Work" dark />
          <h2 className="font-display uppercase text-3xl md:text-4xl mb-12">
            What Sets the Site Office Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-white/15 p-6">
                <h3 className="font-display text-xl uppercase mb-3 text-amber">
                  {v.title}
                </h3>
                <p className="text-sm text-offwhite/70 leading-relaxed">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
