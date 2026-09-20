import Reveal from "./Reveal";
import SectionLine from "./SectionLine";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">Featured projects</h2>
      </Reveal>
      <SectionLine />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className="card p-6 md:p-7">
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="text-dim text-sm mt-2 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-5 font-mono text-xs">
              <a href={p.live} className="text-violet hover:text-amber transition-colors">
                Live demo
              </a>
              <a href={p.code} className="text-violet hover:text-amber transition-colors">
                Source code
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
