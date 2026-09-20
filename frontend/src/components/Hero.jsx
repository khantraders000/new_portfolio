"use client";
import { useEffect, useRef } from "react";
import useTypingLoop from "@/hooks/useTypingLoop";
import { roles, heroNames, CONTACT } from "@/data/content";
import TerminalCard from "./TerminalCard";

export default function Hero() {
  const roleTyper = useTypingLoop(roles);
  const nameTyper = useTypingLoop(heroNames);
  const heroTextRef = useRef(null);
  const heroTermRef = useRef(null);

useEffect(() => {
  let ctx;

  (async () => {
    const { gsap } = await import("gsap");

    ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current.children,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        heroTermRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    });
  })();

  return () => {
    ctx?.revert();
  };
}, []);
  //   let ctx;
  //   (async () => {
  //     const { gsap } = await import("gsap");
  //     ctx = gsap.context(() => {
  //       gsap
  //         .timeline()
  //         .from(heroTextRef.current.children, { y: 24, opacity: 0, duration: 0.7, stagger: 0.09, ease: "power3.out" })
  //         .from(heroTermRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
  //     });
  //   })();
  //   return () => ctx && ctx.revert();
  // }, []);

  const nameDir = nameTyper.item?.dir || "ltr";
  const nameCls = nameTyper.item?.cls || "";

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-16 px-5 md:px-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-14 items-center w-full">
        <div ref={heroTextRef} id="hero-text">
          <h1 className="font-display text-[13vw] leading-[0.95] md:text-6xl font-semibold tracking-tight">
            Hi, I&apos;m
            <div id="hero-name-line" className="mt-1">
              <span className={`grad-text ${nameCls}`} dir={nameDir}>
                {nameTyper.text}
                <span className="caret">|</span>
              </span>
            </div>
          </h1>

          <p className="mt-5 font-mono text-violet text-lg h-7">
            {roleTyper.text}
            <span className="caret">|</span>
          </p>

          <p className="mt-5 text-dim text-[15.5px] leading-relaxed max-w-md">
            A Computer Science &amp; Engineering student specialising in Artificial Intelligence, building full-stack web
            apps, real-time systems and the occasional experiment in IoT and machine learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary rounded-full px-6 py-3 text-sm">
              View my projects
            </a>
            <a href="#resume" className="btn-ghost rounded-full px-6 py-3 text-sm">
              Download resume
            </a>
            <a href="#contact" className="btn-ghost rounded-full px-6 py-3 text-sm">
              Contact me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-dim">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.9 5.34.9 11.6c0 5 3.29 9.24 7.86 10.74.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.4-3.87-1.4-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.06.78 2.15v3.19c0 .3.2.66.79.55A10.6 10.6 0 0 0 23.1 11.6C23.1 5.34 18.27.5 12 .5Z" />
              </svg>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-ink transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="2" y="4" width="20" height="16" rx="2.5" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>
          </div>
        </div>

        <div ref={heroTermRef}>
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
