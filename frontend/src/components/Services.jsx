import Reveal from "./Reveal";
import SectionLine from "./SectionLine";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">What I do</h2>
      </Reveal>
      <SectionLine />

      <div className="grid md:grid-cols-2 gap-5">
        {services.map(([title, desc], i) => (
          <Reveal key={title} delay={(i % 2) * 0.08} className="card p-6">
            <h3 className="font-display font-semibold text-lg">{title}</h3>
            <p className="text-dim text-sm mt-2 leading-relaxed">{desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
