"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background & Grid (Kept for depth) */}
      <div
        className="absolute inset-0 bg-grid-animated pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 vignette pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Hero content removed as requested - new content coming soon */}
    </section>
  );
}
