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
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black px-6">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center"
        >
          <span className="text-blue-500 font-mono text-sm tracking-[0.3em] font-bold mb-6 block uppercase">
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
          <FolderStack label="Frontend" color="#2563eb" />
          <FolderStack label="UI Design" color="#7c3aed" />
          <FolderStack label="Motion" color="#db2777" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold"
      >
        <span className="animate-pulse">Scroll to explore the origin</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}
