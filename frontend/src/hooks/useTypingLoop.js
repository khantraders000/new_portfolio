"use client";
import { useEffect, useState } from "react";

/**
 * Cycles through `items` ([{ text, dir?, cls?, typeSpeed?, deleteSpeed?, hold? }]),
 * typing each one out, holding, then deleting, forever.
 * Waits for web fonts to finish loading before starting so non-Latin
 * scripts (e.g. Urdu) never flash a fallback font mid-animation.
 */
export default function useTypingLoop(items) {
  const [text, setText] = useState("");
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    let i = 0;
    let c = 0;
    let deleting = false;
    let timer;
    let cancelled = false;

    function tick() {
      if (cancelled) return;
      const item = items[i];
      const typeSpeed = item.typeSpeed ?? 90;
      const deleteSpeed = item.deleteSpeed ?? 40;
      const hold = item.hold ?? 1500;

      if (!deleting) {
        c++;
        setText(item.text.slice(0, c));
        setItemIndex(i);
        if (c === item.text.length) {
          deleting = true;
          timer = setTimeout(tick, hold);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        c--;
        setText(item.text.slice(0, c));
        if (c === 0) {
          deleting = false;
          i = (i + 1) % items.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    }

    function start() {
      timer = setTimeout(tick, 300);
    }

    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(start).catch(start);
    } else {
      start();
    }

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [items]);

  return { text, item: items?.[itemIndex] ?? {} };
}
