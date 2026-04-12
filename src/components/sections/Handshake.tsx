"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const CHIPS = ["Available", "Remote", "Collaborative", "Design Eng"];

function HandshakeSlider() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);

  const startLoading = () => {
    if (isStarted) return;
    setIsStarted(true);

    const startTime = Date.now();
    const duration = 1400;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress * 100);

      if (newProgress < 1) {
        requestAnimationFrame(update);
      } else {
        setIsFinished(true);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-2xl mx-auto">
      {/* Slider & Button Wrapper */}
      <div className="flex items-center gap-4 w-full">
        {/* Slider Container - Navbar inspired shape */}
        <div className="relative p-1 bg-zinc-900/80 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl flex-1 h-24 flex items-center overflow-hidden">
          {/* Loading Bar Background */}
          <div className="absolute inset-4 bg-black/60 rounded-xl overflow-hidden border border-white/5">
            {/* Glowing Progress Bar */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#2da547] relative"
              style={{
                boxShadow: isStarted
                  ? "0 0 30px rgba(45, 165, 71, 0.6), 0 0 60px rgba(45, 165, 71, 0.3)"
                  : "none",
              }}
            >
              {/* Inner Glow/Shimmer */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
              />
            </motion.div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-[0.4em] font-bold drop-shadow-md">
              {isFinished
                ? "Let's connect for future"
                : isStarted
                  ? `Syncing... ${Math.round(progress)}%`
                  : "Press the button"}
            </span>
          </div>
        </div>

        {/* Interaction Knob - Isolated Outside - Round */}
        <motion.button
          onClick={startLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-3xl border border-white/20 flex items-center justify-center cursor-pointer transition-all shadow-2xl hover:border-[#2da547]/50"
        >
          <div
            className={`w-4 h-4 rounded-full ${isStarted ? "bg-[#2da547] shadow-[0_0_15px_#2da547]" : "bg-zinc-700"} transition-all`}
          />
        </motion.button>
      </div>

      {/* Pop-up Chips Container */}
      <div className="flex flex-wrap justify-center gap-4 min-h-[50px]">
        {isFinished && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {CHIPS.map((chip, i) => (
              <motion.div
                key={chip}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 15,
                }}
                className="px-6 py-3 bg-zinc-900/90 border border-[#2da547]/30 rounded-xl text-xs font-mono text-[var(--brand-green)] uppercase tracking-widest text-center shadow-[0_0_15px_rgba(45,165,71,0.1)]"
              >
                {chip}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Handshake() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black relative px-6 py-40 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-5xl w-full text-center space-y-16 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-6"
        >
          <span className="text-[#4cd964] font-medium">
            Driver M: \portolio \Connect &gt;
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-lg md:text-xl font-medium text-zinc-400 tracking-tight">
            Got a project to discuss?
          </h2>
          <motion.a className="block relative group">
            <SelectionFrame>
              <span className="text-[9vw] sm:text-[6vw] font-bold text-white leading-none tracking-tight">
                Let's Talk
              </span>
            </SelectionFrame>
          </motion.a>
        </motion.div>

        {/* Custom Interactive Slider */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <HandshakeSlider />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 w-full max-w-7xl px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 font-mono text-[9px] uppercase tracking-widest">
        <span>&copy; All rights reserved 2026 Hossain — Bangladesh</span>
      </div>
    </section>
  );
}

function SelectionFrame({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-8 py-4 group cursor-pointer">
      {/* Corner Handles */}
      {[
        "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
        "top-0 right-0 translate-x-1/2 -translate-y-1/2",
        "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
        "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
      ].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-2 h-2 bg-white border border-[var(--brand-green)] z-20 pointer-events-none opacity-80 group-hover:scale-125 transition-transform`}
        />
      ))}

      {/* Frame Border & Glow */}
      <span className="absolute inset-0 border border-[var(--brand-green)]/40 pointer-events-none z-10 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Text Content */}
      <span className="relative z-30">{children}</span>
    </span>
  );
}
