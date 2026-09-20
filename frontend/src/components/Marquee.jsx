import { marqueeItems } from "@/data/content";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section className="border-y border-line py-5 overflow-hidden bg-surface/40">
      <div className="marquee-track font-mono text-sm text-dim">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="text-violet">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
