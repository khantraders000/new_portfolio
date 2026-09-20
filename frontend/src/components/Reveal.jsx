"use client";
import { motion } from "framer-motion";

// Small wrapper used everywhere to fade + slide content in as it enters
// the viewport. Keeps every section's scroll-reveal motion consistent.
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
