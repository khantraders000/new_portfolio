"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const STATS = [
  { label: "projects", value: 5, suffix: "+" },
  { label: "semester", value: 6, suffix: "" },
  { label: "realtime protocols", value: 2, suffix: "" },
  { label: "internship", value: 6, suffix: "wk" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <p ref={ref} className="font-display text-4xl font-semibold grad-text">
      {display}
      {suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 pb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="card p-6 text-center"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="comment mt-2 justify-center flex">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
