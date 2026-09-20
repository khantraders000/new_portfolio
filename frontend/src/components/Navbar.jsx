"use client";
import { useState } from "react";

const LINKS = [
  ["about", "#about"],
  ["skills", "#skills"],
  ["projects", "#projects"],
  ["experience", "#experience"],
  ["contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="glass mx-auto mt-3 max-w-6xl rounded-2xl px-5 py-3 flex items-center justify-between"
        style={{ paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))" }}
      >
        <a href="#home" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-violet/15 border border-violet/30 flex items-center justify-center font-mono text-violet text-sm">
            AK
          </span>
          Ayan Khan
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-[13px]">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#resume" className="btn-ghost rounded-full px-4 py-2 text-sm">
            Resume
          </a>
          <a href="#contact" className="btn-primary rounded-full px-4 py-2 text-sm">
            Let&apos;s talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-line"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden mx-3 mt-2 glass rounded-2xl px-5 py-5 flex flex-col gap-4 font-mono text-sm transition-all duration-250 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#resume" className="btn-ghost rounded-full px-4 py-2 text-center" onClick={() => setOpen(false)}>
          Resume
        </a>
        <a href="#contact" className="btn-primary rounded-full px-4 py-2 text-center" onClick={() => setOpen(false)}>
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
