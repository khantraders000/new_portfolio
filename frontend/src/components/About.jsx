"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionLine from "./SectionLine";

export default function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 md:px-10 py-24 md:py-32">
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">About me</h2>
      </Reveal>
      <SectionLine />

      <div className="grid md:grid-cols-5 gap-12">
        <Reveal className="md:col-span-2">
          {!photoError ? (
            <div className="card p-3 aspect-[4/5] w-full max-w-xs mx-auto md:mx-0 overflow-hidden">
              {/* Drop a file named ayan-photo.jpg into /public to replace this */}
              <img
                src="/ayan-photo.jpg"
                alt="Ayan Khan"
                className="w-full h-full object-cover rounded-xl"
                onError={() => setPhotoError(true)}
              />
            </div>
          ) : (
            <div className="card w-full max-w-xs mx-auto md:mx-0 aspect-[4/5] flex items-center justify-center flex-col gap-2">
              <span className="font-display text-5xl font-semibold grad-text">AK</span>
              <span className="comment">/public/ayan-photo.jpg</span>
            </div>
          )}
          <p className="comment mt-3 text-center md:text-left">add /public/ayan-photo.jpg to replace this</p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3 space-y-5 text-[15.5px] leading-relaxed text-dim">
          <p>
            I&apos;m a Computer Science &amp; Engineering student specialising in Artificial Intelligence at Babu
            Banarasi Das University, Lucknow, currently in my 6th semester.
          </p>
          <p>
            As a full-stack developer, I work mainly with the MERN stack — React.js, Node.js, Express.js and MongoDB —
            alongside Tailwind CSS, REST APIs, Socket.io and WebRTC. I like projects that pair a clean interface with a
            backend that actually holds up: educational platforms, real-time chat apps, task managers, authentication
            systems, and a few detours into IoT and face recognition.
          </p>
          <p>
            Outside of web development, I spend time exploring artificial intelligence, real-time communication, cloud
            infrastructure and DevOps — mostly by building small things and seeing where they break.
          </p>
          <div className="card p-6 !mt-8">
            <p className="comment mb-4">education</p>
            <h3 className="font-display text-lg font-semibold">B.Tech, Computer Science &amp; Engineering</h3>
            <p className="text-dim text-sm mt-1">Specialisation: Artificial Intelligence</p>
            <p className="text-dim text-sm">Babu Banarasi Das University, Lucknow</p>
            <p className="font-mono text-xs text-violet mt-3">currently: 6th semester</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
