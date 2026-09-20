"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { CONTACT } from "@/data/content";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | sending | sent | error

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hi Ayan, I saw your portfolio and wanted to connect."
  )}`;

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ state: "sent", message: "Message sent — thanks! I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      // Fall back to opening the user's mail app so the message is never lost
      const subject = encodeURIComponent(form.subject || "Portfolio contact");
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      setStatus({
        state: "error",
        message: "Couldn't reach the server, so I opened your email app instead.",
      });
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24 border-t border-line">
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">Let&apos;s build something together</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-dim mt-4 max-w-lg">
          Have a project idea or an opportunity in mind? I&apos;d like to hear about it — reach out however&apos;s
          easiest for you.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <Reveal className="space-y-4">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="wa-btn rounded-2xl px-6 py-4 flex items-center gap-4 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.2 9.2 9.7 8 9.5 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
            </svg>
            <span className="font-semibold">Message on WhatsApp</span>
          </a>
          <a href={`tel:${CONTACT.phone}`} className="btn-ghost rounded-2xl px-6 py-4 flex items-center gap-4 w-full">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <span className="font-semibold">Call directly</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn-ghost rounded-2xl px-6 py-4 flex items-center gap-4 w-full">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="2" y="4" width="20" height="16" rx="2.5" />
              <path d="m3 6 9 7 9-7" />
            </svg>
            <span className="font-semibold">{CONTACT.email}</span>
          </a>
          <p className="font-mono text-xs text-dim pt-2">{CONTACT.location}</p>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-mono text-xs text-dim">name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={update("name")}
                className="w-full mt-1 bg-surface2 border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-violet transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-dim">email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                className="w-full mt-1 bg-surface2 border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-violet transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-dim">subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={update("subject")}
                className="w-full mt-1 bg-surface2 border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-violet transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-dim">message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                className="w-full mt-1 bg-surface2 border border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-violet transition-colors"
                placeholder="Tell me a bit about it"
              />
            </div>
            <button type="submit" disabled={status.state === "sending"} className="btn-primary rounded-full px-6 py-3 text-sm w-full disabled:opacity-60">
              {status.state === "sending" ? "Sending…" : "Send message"}
            </button>
            {status.message && <p className="font-mono text-xs text-dim">{status.message}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
