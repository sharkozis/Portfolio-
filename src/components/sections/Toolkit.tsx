"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";

const tools = [
  { name: "React / Next.js", level: "Expert", category: "frontend" },
  { name: "TypeScript", level: "Expert", category: "frontend" },
  { name: "Framer Motion", level: "Expert", category: "frontend" },
  { name: "Tailwind CSS", level: "Expert", category: "frontend" },
  { name: "Figma", level: "Advanced", category: "design" },
  { name: "Node.js", level: "Advanced", category: "frontend" },
  { name: "PostgreSQL", level: "Advanced", category: "frontend" },
  { name: "Supabase", level: "Advanced", category: "frontend" },
  { name: "Three.js", level: "Intermediate", category: "frontend" },
  { name: "Swift / SwiftUI", level: "Intermediate", category: "frontend" },
  { name: "Docker", level: "Intermediate", category: "frontend" },
  { name: "Python", level: "Intermediate", category: "frontend" },
];

export default function Skills() {
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );

  const filteredTools = tools.filter((tool) => tool.category === activeMode);

  return (
    <section className="py-40 bg-zinc-950 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Sidebar Area */}
          <div className="sticky top-40 w-full lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase font-bold">
                Capabilities
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                Technical
                <br />
                Skills
              </h2>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm">
              The exact software and languages used to bridge the gap between
              design and development.
            </p>

            {/* Toggle Buttons Area */}
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md z-20 self-start w-fit">
              <div
                onClick={() => setActiveMode("frontend")}
                className={`cursor-pointer transition-opacity duration-300 ${activeMode !== "frontend" ? "opacity-30 hover:opacity-100" : ""}`}
              >
                <AnimatedShinyButton
                  className="px-8 shadow-2xl"
                  active={activeMode === "frontend"}
                >
                  Frontend
                </AnimatedShinyButton>
              </div>
              <div
                onClick={() => setActiveMode("design")}
                className={`ml-1 cursor-pointer transition-opacity duration-300 ${activeMode !== "design" ? "opacity-30 hover:opacity-100" : "opacity-100"}`}
              >
                <AnimatedShinyButton
                  className="px-8 shadow-2xl"
                  active={activeMode === "design"}
                >
                  Design
                </AnimatedShinyButton>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      scale: { duration: 0.3 },
                    }}
                    viewport={{ once: true }}
                    className="group relative h-40 rounded-[1.5rem] bg-zinc-900/40 border border-white/5 p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Top-Left Corner Glow (Match reference image) */}
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-[var(--brand-green)]/20 blur-[30px] rounded-full group-hover:bg-[var(--brand-green)]/40 transition-colors duration-500 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-[var(--brand-green)]/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="space-y-1 relative z-10">
                      <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                        {tool.level}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[var(--brand-green)] transition-colors duration-500">
                        {tool.name}
                      </h3>
                    </div>

                    {/* Progress Line and Dot removed as requested */}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
