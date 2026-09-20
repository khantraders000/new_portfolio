import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal className="card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Want the full picture?</h2>
          <p className="text-dim mt-2 max-w-md">
            My resume covers education, technical skills, projects and internship experience in detail.
          </p>
        </div>
        {/* Drop a file named resume.pdf into /public */}
        <a href="../assets/ayankhanresume.pdf" download className="btn-primary rounded-full px-7 py-3.5 text-sm whitespace-nowrap">
          Download resume
        </a>
      </Reveal>
    </section>
  );
}
