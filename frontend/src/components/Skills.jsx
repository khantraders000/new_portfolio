import Reveal from "./Reveal";
import SectionLine from "./SectionLine";
import { skills } from "@/data/content";

const GROUPS = [
  ["frontend", skills.frontend],
  ["backend", skills.backend],
  ["real-time", skills.realtime],
  ["cs fundamentals", skills.cs],
  ["devops & cloud", skills.devops],
  ["tools", skills.tools],
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">What I work with</h2>
      </Reveal>
      <SectionLine />

      <div className="grid md:grid-cols-2 gap-8">
        {GROUPS.map(([label, items], i) => (
          <Reveal key={label} delay={(i % 2) * 0.08}>
            <h3 className="font-mono text-sm text-violet mb-3">{label}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
