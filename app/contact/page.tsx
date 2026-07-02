import { company } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "Contact | Al Nasir Construction Company",
};

const details = [
  { label: "Site Office", value: company.address },
  { label: "Phone", value: company.phone },
  { label: "Mobile / WhatsApp", value: company.mobile },
  { label: "Email", value: company.email },
  { label: "Working Hours", value: company.hours },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-charcoal text-offwhite relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <div className="font-data text-xs tracking-[0.25em] text-amber uppercase mb-5">
            Get in Touch
          </div>
          <h1 className="font-display uppercase text-4xl md:text-5xl max-w-2xl leading-tight">
            Let&rsquo;s Talk About Your Site
          </h1>
          <p className="mt-6 text-offwhite/70 max-w-2xl leading-relaxed">
            Share the plot details and a rough timeline — a site coordinator
            will follow up to schedule a visit and put together a quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <SectionLabel index="01" label="Send a Request" />
            <ContactForm />
          </div>

          <div className="md:col-span-2">
            <SectionLabel index="02" label="Reach Us Directly" />
            <div className="bg-charcoal text-offwhite p-7">
              <dl className="space-y-5">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="font-data text-xs tracking-widest uppercase text-amber mb-1">
                      {d.label}
                    </dt>
                    <dd className="text-sm text-offwhite/80">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 h-48 bg-charcoal-2 relative overflow-hidden border border-line">
              <div className="absolute inset-0 blueprint-grid" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-data text-xs text-amber tracking-widest uppercase">
                    Site Location
                  </div>
                  <div className="text-offwhite/60 text-sm mt-1">
                    Gulberg III, Lahore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
