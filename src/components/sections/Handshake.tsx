"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "X (Twitter)", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Dribbble", href: "#" },
];

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
          className="flex-shrink-0 w-24 h-24 rounded-full bg-zinc-900/80 backdrop-blur-3xl border border-white/20 flex items-center justify-center cursor-pointer transition-all shadow-2xl hover:border-[#2da547]/50"
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

export default function Handshake() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black relative px-6 py-40 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25vw] font-black uppercase tracking-tighter whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
        <motion.div className="flex flex-col items-center gap-6">
          <div className="w-16 h-[1px] bg-zinc-800" />
          <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase font-bold">
            The Handshake
          </span>
        </motion.div>

        <motion.div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 tracking-tight">
            Ready to push boundaries?
          </h2>
          <motion.a
            href="mailto:hello@designengineer.com"
            whileHover={{ scale: 1.02, color: "#3b82f6" }}
            className="block text-[14vw] sm:text-[10vw] font-black text-white leading-none tracking-tighter uppercase transition-all duration-500"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Custom Interactive Slider */}
        <motion.div className="flex flex-col items-center">
          <HandshakeSlider />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ y: -4, color: "#fff" }}
              className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase font-bold transition-colors"
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 w-full max-w-7xl px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-800 font-mono text-[9px] uppercase tracking-widest">
        <span>&copy; 2026 DESIGN ENGINEER — NEW YORK CITY</span>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </section>
  );
}
