"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* ── Grid Overlay ── */}
      <div
        className="absolute inset-0 bg-grid-animated pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* ── Primary Purple Glow (top-right, bright) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "60%",
          width: "700px",
          height: "700px",
          background: `radial-gradient(ellipse at center, var(--hero-glow-purple), transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* ── Blue Glow (right side) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "75%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(ellipse at center, var(--hero-glow-blue), transparent 70%)`,
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* ── Magenta Glow (top-center, subtle accent) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          width: "500px",
          height: "500px",
          background: `radial-gradient(ellipse at center, var(--hero-glow-magenta), transparent 70%)`,
          filter: "blur(120px)",
          zIndex: 0,
          opacity: 0.5,
        }}
      />

      {/* ── Vignette Layer ── */}
      <div
        className="absolute inset-0 vignette pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* ── Top Navbar Content ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-between px-8 sm:px-12 lg:px-16 py-8 relative"
        style={{ zIndex: 2 }}
      >
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
            style={{
              border: "2px solid transparent",
              background:
                "linear-gradient(var(--bg-base), var(--bg-base)) padding-box, linear-gradient(135deg, var(--glow-purple), var(--glow-blue)) border-box",
            }}
          >
            <Image
              src="/avatar.png"
              alt="Hossain"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-lg sm:text-xl tracking-tight leading-tight">
              Hi I&apos;m Hossain
            </h1>
            <span
              className="text-sm tracking-wide"
              style={{ color: "var(--glow-purple)" }}
            >
              Designer - Developer
            </span>
          </div>
        </div>

        {/* Right: Contact Button */}
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            color: "#1a1a2e",
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          Contact
        </a>
      </motion.div>
    </section>
  );
}
