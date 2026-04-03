"use client";

import { useRef } from "react";
import TerminalBackground from "./TerminalBackground";
import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-40 px-6 relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <TerminalBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full relative z-10"
      >
        <div className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
          <TerminalHeader />
          <TerminalBody />
        </div>
      </motion.div>
    </section>
  );
}
