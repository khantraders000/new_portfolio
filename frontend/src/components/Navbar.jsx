"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// "home" isn't a hash section on its own — it's just the top of "/".
const LINKS = [
  ["home", "/"],
  ["about", "/about"],
  ["skills", "/#skills"],
  ["projects", "/#projects"],
  ["experience", "/#experience"],
  ["contact", "/#contact"],
];

// Section ids to watch for the scroll-spy (only relevant while on "/").
const SECTION_IDS = ["home", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");
  const pathname = usePathname();

  // Highlight whichever homepage section is currently in view.
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function isActive(href) {
    if (href === "/about") return pathname === "/about";
    if (href === "/") return pathname === "/" && activeHash === "home";
    const hash = href.split("#")[1];
    return pathname === "/" && activeHash === hash;
  }

  function linkClass(href) {
    return `nav-link ${isActive(href) ? "active" : ""}`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="glass mx-auto mt-3 max-w-6xl rounded-2xl px-5 py-3 flex items-center justify-between"
        style={{ paddingTop: "calc(0.75rem + env(safe-area-inset-top, 0px))" }}
      >
        <Link href="/" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-violet/15 border border-violet/30 flex items-center justify-center font-mono text-violet text-sm">
            AK
          </span>
          Ayan Khan
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono text-[13px]">
          {LINKS.map(([label, href]) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/#resume" className="btn-ghost rounded-full px-4 py-2 text-sm">
            Resume
          </Link>
          <Link href="/#contact" className="btn-primary rounded-full px-4 py-2 text-sm">
            Let&apos;s talk
          </Link>
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
          <Link key={href} href={href} className={linkClass(href)} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/#resume" className="btn-ghost rounded-full px-4 py-2 text-center" onClick={() => setOpen(false)}>
          Resume
        </Link>
        <Link href="/#contact" className="btn-primary rounded-full px-4 py-2 text-center" onClick={() => setOpen(false)}>
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}