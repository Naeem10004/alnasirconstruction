export default function SectionLabel({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-data text-xs tracking-[0.25em] uppercase mb-4 ${
        dark ? "text-amber" : "text-steel"
      }`}
    >
      <span className="border border-current px-2 py-0.5">{index}</span>
      <span className={dark ? "text-offwhite/60" : "text-ink/50"}>{label}</span>
      <span className="h-px flex-1 bg-current opacity-25" />
    </div>
  );
}
