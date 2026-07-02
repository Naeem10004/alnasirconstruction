import { projects } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "Projects | Al Nasir Construction Company",
};

const accentMap: Record<string, string> = {
  steel: "border-steel text-steel",
  amber: "border-amber text-amber",
  rust: "border-rust text-rust",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-charcoal text-offwhite relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <div className="font-data text-xs tracking-[0.25em] text-amber uppercase mb-5">
            Project Register
          </div>
          <h1 className="font-display uppercase text-4xl md:text-5xl max-w-2xl leading-tight">
            Completed & Ongoing Projects
          </h1>
          <p className="mt-6 text-offwhite/70 max-w-2xl leading-relaxed">
            A sample of residential, commercial and mixed-use work delivered
            across Lahore since {2024 - 4}. Full case studies and site photos
            available on request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <SectionLabel index="00" label={`${projects.length} Projects on Record`} />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-offwhite border border-line overflow-hidden group"
            >
              <div className="h-40 bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-60" />
                <svg
                  viewBox="0 0 200 100"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <rect x="30" y="20" width="50" height="70" fill="none" stroke="#faf8f4" strokeOpacity="0.5" strokeWidth="1" />
                  <rect x="90" y="35" width="35" height="55" fill="none" stroke="#e2971f" strokeOpacity="0.6" strokeWidth="1" />
                  <rect x="135" y="10" width="40" height="80" fill="none" stroke="#4d7999" strokeOpacity="0.6" strokeWidth="1" />
                  <line x1="0" y1="90" x2="200" y2="90" stroke="#e2971f" strokeOpacity="0.5" strokeWidth="1" />
                </svg>
                <span
                  className={`absolute top-3 right-3 font-data text-[10px] tracking-widest uppercase border px-2 py-1 bg-charcoal/70 ${accentMap[p.accent]}`}
                >
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl uppercase">{p.name}</h3>
                  <span className="font-data text-xs text-ink/40">{p.year}</span>
                </div>
                <p className="text-sm text-ink/60 mt-2">{p.location}</p>
                <p className="font-data text-xs text-steel mt-4 tracking-wider uppercase">
                  {p.scale}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
