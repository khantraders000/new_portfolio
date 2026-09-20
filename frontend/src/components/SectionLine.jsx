"use client";
import { motion } from "framer-motion";

export default function SectionLine() {
  return (
    <motion.div
      className="h-px mt-6 mb-10"
      style={{ background: "linear-gradient(90deg,#8B7CFF,transparent)" }}
      initial={{ width: 0 }}
      whileInView={{ width: 160 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  );
}
