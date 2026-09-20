"use client";
import { CONTACT } from "@/data/content";

export default function FloatingDock() {
  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hi Ayan, I saw your portfolio and wanted to connect."
  )}`;

  return (
    <div className="float-dock">
      <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp" className="float-btn wa-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.2 9.2 9.7 8 9.5 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
        </svg>
      </a>
      <a href={`tel:${CONTACT.phone}`} aria-label="Call directly" className="float-btn" style={{ background: "#8B7CFF", color: "#0A0D13" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      </a>
    </div>
  );
}
