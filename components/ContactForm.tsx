"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="corner-bracket bg-offwhite border border-line p-8">
        <div className="font-data text-xs text-amber tracking-widest uppercase mb-2">
          Request Logged
        </div>
        <h3 className="font-display text-2xl uppercase mb-2">
          Thanks — we&rsquo;ll be in touch
        </h3>
        <p className="text-sm text-ink/70 leading-relaxed">
          A site coordinator will call or email within one business day to
          confirm scope and schedule a site visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="corner-bracket bg-offwhite border border-line p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-data text-xs tracking-widest uppercase text-steel block mb-2">
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="Ahmed Raza"
            className="w-full bg-transparent border border-line px-3 py-2.5 text-sm focus:outline-none focus:border-steel"
          />
        </div>
        <div>
          <label className="font-data text-xs tracking-widest uppercase text-steel block mb-2">
            Phone
          </label>
          <input
            required
            type="tel"
            placeholder="+92 300 1234567"
            className="w-full bg-transparent border border-line px-3 py-2.5 text-sm focus:outline-none focus:border-steel"
          />
        </div>
      </div>

      <div>
        <label className="font-data text-xs tracking-widest uppercase text-steel block mb-2">
          Email
        </label>
        <input
          required
          type="email"
          placeholder="you@example.com"
          className="w-full bg-transparent border border-line px-3 py-2.5 text-sm focus:outline-none focus:border-steel"
        />
      </div>

      <div>
        <label className="font-data text-xs tracking-widest uppercase text-steel block mb-2">
          Project Type
        </label>
        <select
          className="w-full bg-transparent border border-line px-3 py-2.5 text-sm focus:outline-none focus:border-steel"
          defaultValue="Residential"
        >
          <option>Residential</option>
          <option>Commercial</option>
          <option>Renovation</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="font-data text-xs tracking-widest uppercase text-steel block mb-2">
          Project Details
        </label>
        <textarea
          required
          rows={4}
          placeholder="Plot size, location, and rough timeline..."
          className="w-full bg-transparent border border-line px-3 py-2.5 text-sm focus:outline-none focus:border-steel resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-steel text-offwhite px-7 py-3 font-data text-sm tracking-widest uppercase hover:bg-steel-light transition-colors"
      >
        Submit Request
      </button>
    </form>
  );
}
