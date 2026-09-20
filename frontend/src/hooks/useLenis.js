"use client";
import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    let lenis;
    let rafId;
    let cancelled = false;

    (async () => {
      try {
        const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        function raf(time) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
        lenis.on("scroll", ScrollTrigger.update);
      } catch (e) {
        // Smooth scroll is a progressive enhancement — fail silently.
        document.documentElement.style.scrollBehavior = "smooth";
      }
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);
}
