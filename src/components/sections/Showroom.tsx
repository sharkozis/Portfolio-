"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Quantum UI",
    tag: "Motion System",
    color: "#0f172a",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Aura Flow",
    tag: "Brand Experience",
    color: "#1e1b4b",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
  },
  {
    title: "Nexus Core",
    tag: "Platform Design",
    color: "#312e81",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Vortex 01",
    tag: "Interactive Art",
    color: "#1e293b",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Showroom() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the total horizontal width. Each card is 80vw/45vw.
  // We want to scroll from initial position to the end.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-10 md:px-20 mb-12 flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-pink-500 font-mono text-xs tracking-[0.4em] uppercase font-bold">
              The Showroom
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Selection
            </h2>
          </div>
          <span className="text-zinc-500 font-mono text-xs hidden md:block">
            01 — 04
          </span>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-[60vh] w-[85vw] md:w-[45vw] rounded-[2rem] overflow-hidden flex-shrink-0 border border-white/5 bg-zinc-900"
            >
              {/* Overlay for interaction */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700 z-10" />

              {/* Background Image ideally, using colors for now if images don't load */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundColor: project.color }}
              />

              <div className="absolute inset-x-8 top-8 z-20">
                <span className="px-3 py-1 rounded-full border border-white/20 text-white/60 font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">
                  {project.tag}
                </span>
              </div>

              <div className="absolute inset-x-8 bottom-8 z-20 flex justify-between items-end">
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
                    Case Study coming soon
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-16 left-10 right-10 md:left-20 md:right-20 h-[1px] bg-zinc-900 overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="w-full h-full bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
