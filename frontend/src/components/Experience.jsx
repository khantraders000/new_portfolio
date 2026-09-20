import Reveal from "./Reveal";
import SectionLine from "./SectionLine";
import { journey } from "@/data/content";

const INTERNSHIP_TAGS = [
  "Frontend development",
  "Backend development",
  "API integration",
  "Database handling",
  "Git & GitHub",
  "Debugging",
  "Deployment",
  "Team collaboration",
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">Experience</h2>
      </Reveal>
      <SectionLine />

      <Reveal className="card p-7 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="font-display text-xl font-semibold">Software Development Intern</h3>
          <span className="tag">6 weeks</span>
        </div>
        <p className="text-dim text-sm mt-2">Practical, hands-on internship covering modern web development workflows.</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {INTERNSHIP_TAGS.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">My development journey</h3>
        </Reveal>
        <div className="mt-10 relative pl-8">
          <div className="timeline-line absolute left-0 top-1 bottom-1" />
          {journey.map(([title, desc], i) => (
            <Reveal key={title} delay={(i % 4) * 0.05} className="relative mb-9 pl-6">
              <span className="node absolute -left-[7px] top-1" />
              <h4 className="font-display font-semibold">{title}</h4>
              <p className="text-dim text-sm mt-1 max-w-lg">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
