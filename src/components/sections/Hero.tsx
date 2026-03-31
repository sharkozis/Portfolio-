"use client";

import { motion } from "framer-motion";

const FolderStack = ({ label, color }: { label: string; color: string }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative w-48 h-60 cursor-pointer group"
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          variants={{
            hover: {
              y: -i * 24,
              rotate: (i - 1) * 3,
              x: (i - 1) * 8,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            },
          }}
          style={{
            zIndex: 3 - i,
            backgroundColor: i === 0 ? color : "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
          }}
          className="absolute inset-0 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-end p-6 overflow-hidden"
        >
          {/* Subtle reflection effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-none" />

          {i === 0 && (
            <div className="flex flex-col gap-1">
              <div className="w-8 h-1 bg-white/20 rounded-full mb-2" />
              <span className="text-white font-bold text-2xl tracking-tight leading-tight">
                {label}
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
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

      {/* ── Content ── */}
      <div
        className="max-w-7xl w-full flex flex-col items-center relative"
        style={{ zIndex: 2 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center"
        >
          <span
            className="font-mono text-sm tracking-[0.3em] font-bold mb-6 block uppercase"
            style={{ color: "var(--glow-purple)" }}
          >
            Available for worldwide collaboration
          </span>
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.8] font-black text-white tracking-tighter uppercase select-none">
            I DESIGN
            <br />
            <span className="text-zinc-800">EXPERIENCE</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mt-24"
        >
          <FolderStack label="Frontend" color="var(--glow-blue)" />
          <FolderStack label="UI Design" color="var(--glow-purple)" />
          <FolderStack label="Motion" color="var(--glow-magenta)" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 font-mono text-[10px] tracking-[0.4em] uppercase font-bold"
        style={{ color: "var(--text-muted)", zIndex: 2 }}
      >
        <span>Scroll to explore the origin</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}
