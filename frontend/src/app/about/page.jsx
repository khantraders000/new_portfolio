"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { CONTACT } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   WEBSITE CONFIG
========================================================= */

const SITE_URL = "https://itsayan.in";

const PAGE_TITLE =
  "About Ayan Khan | itsayan — Full-Stack Developer";

const PAGE_DESCRIPTION =
  "Learn about Ayan Khan, a Full-Stack Developer from Unchahar, Raebareli, Uttar Pradesh, specializing in React, Next.js, Node.js, MongoDB, MERN stack, AI and modern web applications.";

const KEYWORDS = [
  "Ayan Khan",
  "Ayan Khan Unchahar",
  "Ayan Khan Raebareli",
  "Ayan Khan Developer",
  "itsayan",
  "itsayan.in",
  "Full-Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "MongoDB Developer",
  "Web Developer Unchahar",
  "Web Developer Raebareli",
  "AI Developer",
  "Artificial Intelligence Developer",
  "Full Stack Web Developer India",
];

/* =========================================================
   EDUCATION
========================================================= */

const EDUCATION = {
  university: "Babu Banarasi Das University",
  location: "Lucknow, Uttar Pradesh, India",
  degree:
    "B.Tech in Computer Science & Engineering, specializing in Artificial Intelligence",
  period: "Current",
};

/* =========================================================
   HOMETOWN
========================================================= */

const HOMETOWN = {
  city: "Unchahar",
  district: "Raebareli",
  state: "Uttar Pradesh",
  country: "India",
};

/* =========================================================
   TECHNICAL SKILLS
========================================================= */

const TECH_SKILLS = [
  {
    short: "JS",
    name: "JavaScript",
    bg: "#18181B",
    color: "#F7DF1E",
  },
  {
    short: "Rx",
    name: "React.js",
    bg: "#0E2A3A",
    color: "#61DAFB",
  },
  {
    short: "Nx",
    name: "Next.js",
    bg: "#09090B",
    color: "#FFFFFF",
  },
  {
    short: "Nd",
    name: "Node.js",
    bg: "#173425",
    color: "#6CC24A",
  },
  {
    short: "Ex",
    name: "Express.js",
    bg: "#202020",
    color: "#FFFFFF",
  },
  {
    short: "Tw",
    name: "Tailwind CSS",
    bg: "#0E2A38",
    color: "#38BDF8",
  },
  {
    short: "Mo",
    name: "MongoDB",
    bg: "#152E23",
    color: "#4DB33D",
  },
  {
    short: "Gt",
    name: "Git",
    bg: "#341408",
    color: "#F1502F",
  },
  {
    short: "Dk",
    name: "Docker",
    bg: "#0E2338",
    color: "#2496ED",
  },
  {
    short: "So",
    name: "Socket.io",
    bg: "#111111",
    color: "#FFFFFF",
  },
  {
    short: "AI",
    name: "Artificial Intelligence",
    bg: "#102A2A",
    color: "#67E8F9",
  },
  {
    short: "We",
    name: "WebRTC",
    bg: "#172554",
    color: "#93C5FD",
  },
];

/* =========================================================
   SOFT SKILLS
========================================================= */

const SOFT_SKILLS = [
  "Teamwork",
  "Critical Thinking",
  "Communication",
  "Leadership",
  "Problem Solving",
  "Time Management",
];

/* =========================================================
   WHAT I DO
========================================================= */

const SKILL_SET = [
  "Frontend Development",
  "Backend Development",
  "REST API Development",
  "Real-Time Applications",
  "AI Integration",
  "Database Management",
];

/* =========================================================
   INTERESTS
========================================================= */

const INTERESTS = [
  "Artificial Intelligence",
  "Web Development",
  "Real-Time Systems",
  "Open Source",
  "System Design",
  "Building Projects",
];

/* =========================================================
   LANGUAGES
========================================================= */

const LANGUAGES = [
  "Hindi",
  "English",
  "Urdu",
];

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const pageRef = useRef(null);

  /* =======================================================
     SEO + OPEN GRAPH + LLMO
  ======================================================= */

  useEffect(() => {
    /* -----------------------------------------------------
       BASIC SEO
    ----------------------------------------------------- */

    document.title = PAGE_TITLE;

    const setMeta = (attribute, key, content) => {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      let element = document.head.querySelector(
        `link[rel="${rel}"]`
      );

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    /* -----------------------------------------------------
       META
    ----------------------------------------------------- */

    setMeta(
      "name",
      "description",
      PAGE_DESCRIPTION
    );

    setMeta(
      "name",
      "keywords",
      KEYWORDS.join(", ")
    );

    setMeta(
      "name",
      "author",
      "Ayan Khan"
    );

    setMeta(
      "name",
      "creator",
      "Ayan Khan"
    );

    setMeta(
      "name",
      "publisher",
      "Ayan Khan"
    );

    setMeta(
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    setMeta(
      "name",
      "googlebot",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    setMeta(
      "name",
      "theme-color",
      "#090B0C"
    );

    setMeta(
      "name",
      "content-language",
      "en-IN"
    );

    /* -----------------------------------------------------
       CANONICAL
    ----------------------------------------------------- */

    setLink(
      "canonical",
      `${SITE_URL}/about`
    );

    /* -----------------------------------------------------
       OPEN GRAPH
    ----------------------------------------------------- */

    setMeta(
      "property",
      "og:type",
      "profile"
    );

    setMeta(
      "property",
      "og:url",
      `${SITE_URL}/about`
    );

    setMeta(
      "property",
      "og:title",
      PAGE_TITLE
    );

    setMeta(
      "property",
      "og:description",
      PAGE_DESCRIPTION
    );

    setMeta(
      "property",
      "og:site_name",
      "itsayan"
    );

    setMeta(
      "property",
      "og:locale",
      "en_IN"
    );

    setMeta(
      "property",
      "og:image",
      `${SITE_URL}/og-image.jpg`
    );

    setMeta(
      "property",
      "og:image:width",
      "1200"
    );

    setMeta(
      "property",
      "og:image:height",
      "630"
    );

    setMeta(
      "property",
      "og:image:alt",
      "Ayan Khan — Full-Stack Developer"
    );

    /* -----------------------------------------------------
       TWITTER / X
    ----------------------------------------------------- */

    setMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "name",
      "twitter:title",
      PAGE_TITLE
    );

    setMeta(
      "name",
      "twitter:description",
      PAGE_DESCRIPTION
    );

    setMeta(
      "name",
      "twitter:image",
      `${SITE_URL}/og-image.jpg`
    );

    setMeta(
      "name",
      "twitter:image:alt",
      "Ayan Khan — Full-Stack Developer"
    );

    /* =====================================================
       STRUCTURED DATA / LLMO
    ===================================================== */

    const oldSchema = document.getElementById(
      "ayan-about-schema"
    );

    if (oldSchema) {
      oldSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "ProfilePage",

          "@id": `${SITE_URL}/about#profilepage`,

          url: `${SITE_URL}/about`,

          name: PAGE_TITLE,

          description: PAGE_DESCRIPTION,

          isPartOf: {
            "@id": `${SITE_URL}/#website`,
          },

          mainEntity: {
            "@id": `${SITE_URL}/about#person`,
          },
        },

        {
          "@type": "Person",

          "@id": `${SITE_URL}/about#person`,

          name: "Ayan Khan",

          alternateName: [
            "Ayan Khan",
            "itsayan",
            "Ayan Khan Unchahar",
          ],

          url: SITE_URL,

          image: `${SITE_URL}/ayan-photo.jpg`,

          jobTitle: "Full-Stack Developer",

          description:
            "Ayan Khan is a Full-Stack Developer and Computer Science student specializing in Artificial Intelligence, modern web development and real-time applications.",

          ...(CONTACT?.email
            ? { email: CONTACT.email }
            : {}),

          ...(CONTACT?.phone
            ? { telephone: CONTACT.phone }
            : {}),

          homeLocation: {
            "@type": "Place",

            name:
              "Unchahar, Raebareli, Uttar Pradesh, India",

            address: {
              "@type": "PostalAddress",

              addressLocality:
                HOMETOWN.city,

              addressRegion:
                HOMETOWN.state,

              addressCountry:
                "IN",
            },
          },

          alumniOf: {
            "@type": "CollegeOrUniversity",

            name:
              EDUCATION.university,

            address: {
              "@type": "PostalAddress",

              addressLocality:
                "Lucknow",

              addressRegion:
                "Uttar Pradesh",

              addressCountry:
                "IN",
            },
          },

          knowsAbout:
            TECH_SKILLS.map(
              (skill) => skill.name
            ),

          hasOccupation: {
            "@type": "Occupation",

            name: "Full-Stack Developer",

            occupationLocation: {
              "@type": "Country",
              name: "India",
            },

            skills:
              TECH_SKILLS.map(
                (skill) => skill.name
              ).join(", "),
          },

          sameAs: [
            CONTACT?.github,
            CONTACT?.linkedin,
            "https://www.instagram.com/ayan_khan_0313._",
          ].filter(Boolean),
        },

        {
          "@type": "WebSite",

          "@id": `${SITE_URL}/#website`,

          url: SITE_URL,

          name: "itsayan",

          alternateName: "Ayan Khan",

          description:
            "Official portfolio website of Ayan Khan, a Full-Stack Developer from Unchahar, Raebareli, Uttar Pradesh.",

          publisher: {
            "@id":
              `${SITE_URL}/about#person`,
          },

          inLanguage: "en-IN",
        },
      ],
    };

    const schemaScript =
      document.createElement("script");

    schemaScript.id =
      "ayan-about-schema";

    schemaScript.type =
      "application/ld+json";

    schemaScript.textContent =
      JSON.stringify(schema);

    document.head.appendChild(
      schemaScript
    );

    /* -----------------------------------------------------
       CLEANUP
    ----------------------------------------------------- */

    return () => {
      const element =
        document.getElementById(
          "ayan-about-schema"
        );

      if (element) {
        element.remove();
      }
    };
  }, []);

  /* =======================================================
     LENIS
  ======================================================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    let frameId;

    const update = (time) => {
      lenis.raf(time);

      frameId =
        requestAnimationFrame(update);
    };

    frameId =
      requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  /* =======================================================
     GSAP
  ======================================================= */

useEffect(() => {
  const context = gsap.context(() => {
    /* =========================================
       HERO
    ========================================= */

    gsap.from(".about-hero", {
      y: 25,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    /* =========================================
       PROFILE IMAGE
       IMPORTANT:
       opacity ko 0 nahi karna
    ========================================= */

    gsap.from(".profile-frame", {
      scale: 0.94,
      y: 15,
      duration: 1,
      ease: "power3.out",
      clearProps: "transform",
    });

    /* =========================================
       ORBIT
    ========================================= */

    gsap.from(".profile-orbit", {
      scale: 0.9,
      rotate: -10,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "transform",
    });

    /* =========================================
       FLOATING DOTS
    ========================================= */

    gsap.to(".floating-dot", {
      y: -14,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.25,
      ease: "sine.inOut",
    });

    /* =========================================
       INFORMATION CARD
    ========================================= */

    gsap.from(".info-card", {
      scrollTrigger: {
        trigger: ".info-card",
        start: "top 85%",
        once: true,
      },
      y: 50,
      duration: 0.9,
      ease: "power3.out",
      clearProps: "transform",
    });

    /* =========================================
       OTHER REVEAL ELEMENTS
    ========================================= */

    gsap.utils.toArray(".reveal").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },

        y: 25,
        duration: 0.7,
        ease: "power2.out",

        clearProps: "transform",
      });
    });

    ScrollTrigger.refresh();
  }, pageRef);

  return () => {
    context.revert();
  };
}, []);

  /* =======================================================
     UI
  ======================================================= */

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#090B0C] text-white"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[130px]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal-400/5 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[450px] w-[450px] rounded-full bg-sky-400/5 blur-[140px]" />
      </div>

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="mx-auto w-full max-w-7xl px-5 pt-6 md:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-white">
              its
            </span>

            <span className="text-cyan-300">
              ayan
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-cyan-300"
            >
              About
            </Link>

            <Link
              href="/#projects"
              className="transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>

          </div>

          <Link
            href="/#contact"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-300/20"
          >
            Let&apos;s Talk
          </Link>

        </nav>
      </header>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:px-10 lg:pt-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}

          <div>

            <div className="about-hero mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">

              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />

              About Me

            </div>

            <h1
              id="about-heading"
              className="about-hero max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Ayan
              <br />

              <span className="text-cyan-300">
                Khan.
              </span>
            </h1>

            <p className="about-hero mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
              Hi! I&apos;m{" "}
              <strong className="text-white">
                Ayan Khan
              </strong>
              , a{" "}
              <strong className="text-cyan-300">
                Full-Stack Developer
              </strong>{" "}
              from{" "}
              <strong className="text-white">
                Unchahar, Raebareli,
                Uttar Pradesh, India
              </strong>
              .
            </p>

            <p className="about-hero mt-5 max-w-2xl text-base leading-7 text-white/45">
              I build modern, responsive and
              scalable web applications using
              React, Next.js, Node.js, Express.js,
              MongoDB and other modern web
              technologies.
            </p>

            <p className="about-hero mt-5 max-w-2xl text-base leading-7 text-white/45">
              I am also interested in Artificial
              Intelligence, real-time applications,
              system design and building practical
              digital products.
            </p>

            {/* CONTACT */}

            <div className="about-hero mt-9 grid max-w-xl gap-3 sm:grid-cols-2">

              {CONTACT?.email && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
                >
                  <p className="text-xs uppercase tracking-widest text-white/35">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-white/75">
                    {CONTACT.email}
                  </p>
                </a>
              )}

              {CONTACT?.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
                >
                  <p className="text-xs uppercase tracking-widest text-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/75">
                    {CONTACT.phone}
                  </p>
                </a>
              )}

            </div>
          </div>

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div className="relative mx-auto flex min-h-[500px] w-full max-w-[560px] items-center justify-center">

            {/* ORBITS */}

            <div className="profile-orbit absolute h-[390px] w-[300px] rotate-[18deg] rounded-[48%] border border-cyan-300/25 md:h-[500px] md:w-[380px]" />

            <div className="profile-orbit absolute h-[410px] w-[325px] rotate-[-20deg] rounded-[48%] border border-teal-300/15 md:h-[520px] md:w-[400px]" />

            {/* GLOW */}

            <div className="absolute h-[320px] w-[260px] rounded-full bg-cyan-300/20 blur-[90px]" />

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="profile-frame relative z-10 h-[420px] w-[300px] overflow-hidden rounded-[46%_46%_31%_31%] bg-gradient-to-b from-[#67E8F9] via-[#22D3EE] to-[#0F766E] p-[3px] shadow-[0_30px_100px_rgba(34,211,238,0.18)] md:h-[520px] md:w-[370px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[46%_46%_31%_31%] bg-[#101516]">

                <Image
                  src="/ayan-photo.jpg"
                  alt="Ayan Khan - Full-Stack Developer from Unchahar, Raebareli, Uttar Pradesh"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 370px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0C]/30 via-transparent to-cyan-300/5" />

              </div>
            </motion.div>

            {/* FLOATING DOTS */}

            <span className="floating-dot absolute left-[8%] top-[18%] z-20 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_25px_rgba(103,232,249,0.9)]" />

            <span className="floating-dot absolute right-[10%] top-[25%] z-20 h-2.5 w-2.5 rounded-full bg-teal-200 shadow-[0_0_25px_rgba(94,234,212,0.9)]" />

            <span className="floating-dot absolute bottom-[16%] left-[17%] z-20 h-2.5 w-2.5 rounded-full bg-sky-200 shadow-[0_0_25px_rgba(125,211,252,0.9)]" />

          </div>
        </div>
      </section>

      {/* =================================================
          OBJECTIVE
      ================================================= */}

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:px-10">

        <div className="reveal max-w-3xl">

          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-300">
            Objective
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Building useful digital experiences
            with clean code and thoughtful design.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/50 md:text-lg">
            I enjoy taking ideas from concept to
            implementation, working across frontend
            and backend development while exploring
            AI and modern technologies.
          </p>

        </div>

      </section>

      {/* =================================================
          INFORMATION CARD
      ================================================= */}

      <section
        aria-label="Ayan Khan education, hometown, skills and interests"
        className="mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:px-10"
      >

        <div className="info-card overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#111416] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

          {/* EDUCATION + HOMETOWN */}

          <div className="grid lg:grid-cols-2">

            {/* EDUCATION */}

            <div className="reveal border-b border-white/[0.07] p-7 md:p-10 lg:border-b-0 lg:border-r">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Education
              </p>

              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                {EDUCATION.university}
              </h2>

              <p className="mt-3 text-white/60">
                {EDUCATION.degree}
              </p>

              <p className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/45">
                {EDUCATION.period}
              </p>

              <p className="mt-3 text-sm text-white/40">
                {EDUCATION.location}
              </p>

            </div>

            {/* HOMETOWN */}

            <div className="reveal p-7 md:p-10">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Hometown
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {HOMETOWN.city}
              </h2>

              <p className="mt-2 text-white/55">
                {HOMETOWN.district},{" "}
                {HOMETOWN.state},{" "}
                {HOMETOWN.country}
              </p>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                Originally from Unchahar in
                Raebareli district, Uttar Pradesh,
                India.
              </p>

            </div>

          </div>

          <div className="h-px bg-white/[0.07]" />

          {/* TECHNICAL SKILLS + WHAT I DO */}

          <div className="grid lg:grid-cols-2">

            {/* TECH SKILLS */}

            <div className="reveal border-b border-white/[0.07] p-7 md:p-10 lg:border-b-0 lg:border-r">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Technical Skills
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {TECH_SKILLS.map(
                  (skill) => (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="flex h-12 w-12 items-center justify-center rounded-xl font-mono text-xs font-bold shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105"
                      style={{
                        backgroundColor:
                          skill.bg,

                        color:
                          skill.color,
                      }}
                    >
                      {skill.short}
                    </div>
                  )
                )}

              </div>

            </div>

            {/* WHAT I DO */}

            <div className="reveal p-7 md:p-10">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                What I Do
              </p>

              <div className="mt-6 space-y-3">

                {SKILL_SET.map(
                  (skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 border-b border-white/[0.06] pb-3 last:border-0"
                    >
                      <span className="font-mono text-xs text-cyan-300/70">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <span className="text-white/65">
                        {skill}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

          <div className="h-px bg-white/[0.07]" />

          {/* INTERESTS + SOFT SKILLS */}

          <div className="grid md:grid-cols-2">

            {/* INTERESTS */}

            <div className="reveal border-b border-white/[0.07] p-7 md:border-b-0 md:border-r md:p-10">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Interests
              </p>

              <div className="mt-6 space-y-4">

                {INTERESTS.map(
                  (interest) => (
                    <div
                      key={interest}
                      className="flex items-center gap-3 text-white/65"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                      {interest}
                    </div>
                  )
                )}

              </div>

            </div>

            {/* SOFT SKILLS */}

            <div className="reveal p-7 md:p-10">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Soft Skills
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">

                {SOFT_SKILLS.map(
                  (skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-white/60"
                    >
                      {skill}
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

          <div className="h-px bg-white/[0.07]" />

          {/* LANGUAGES */}

          <div className="reveal p-7 md:p-10">

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Languages
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              {LANGUAGES.map(
                (language) => (
                  <span
                    key={language}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                  >
                    {language}
                  </span>
                )
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:px-10">

        <div className="reveal relative overflow-hidden rounded-[32px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] to-transparent p-8 md:p-12">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-300/10 blur-[90px]" />

          <div className="relative">

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Let&apos;s Connect
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Have an idea, project or opportunity?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/50">
              Feel free to get in touch and
              let&apos;s build something meaningful
              together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/#contact"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#071012] transition hover:bg-cyan-200"
              >
                Contact Me
              </Link>

              {CONTACT?.github && (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:border-white/25 hover:text-white"
                >
                  GitHub
                </a>
              )}

              {CONTACT?.linkedin && (
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:border-white/25 hover:text-white"
                >
                  LinkedIn
                </a>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="border-t border-white/[0.07]">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-white/35 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">

          <p>
            © {new Date().getFullYear()} Ayan Khan.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/#projects"
              className="transition hover:text-white"
            >
              Projects
            </Link>

          </div>

        </div>

      </footer>
    </main>
  );
}