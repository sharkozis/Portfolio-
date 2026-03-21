"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "React / Next.js", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Framer Motion", level: "Expert" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "Figma", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "Supabase", level: "Advanced" },
  { name: "Three.js", level: "Intermediate" },
  { name: "Swift / SwiftUI", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
];

export default function Toolkit() {
  return (
    <section className="py-40 bg-zinc-950 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="sticky top-40 w-full lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase font-bold">
                The Specs
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                Technical
                <br />
                Toolkit
              </h2>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm">
              The exact software and languages used to bridge the gap between
              design and development.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-zinc-900 rounded-full border border-white/5 text-zinc-400 text-xs font-mono uppercase">
                V.2026.03
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-2/3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="group relative h-40 rounded-[1.5rem] bg-zinc-900/40 border border-white/5 p-8 flex flex-col justify-between hover:bg-zinc-800 transition-all duration-500 hover:border-white/10"
              >
                <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-500" />

                <div className="space-y-1">
                  <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                    {tool.level}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                    {tool.name}
                  </h3>
                </div>

                <div className="w-full h-[1px] bg-zinc-800/50 relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
