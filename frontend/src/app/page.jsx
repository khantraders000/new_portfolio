"use client";
import useLenis from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import FloatingDock from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useLenis();

  return (
    <>
      <Navbar />
      <FloatingDock />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
