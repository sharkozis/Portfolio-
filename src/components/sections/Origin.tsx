"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const collaborators = [
  "Google",
  "Vercel",
  "Stripe",
  "Airbnb",
  "Netflix",
  "Shopify",
];

export default function Origin() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0.8]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [0, 1, 0.8]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-40 bg-black overflow-hidden px-6">
      <div className="max-w-5xl mx-auto space-y-48">
        <motion.div style={{ opacity: opacity1, y: y1 }} className="space-y-6">
          <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase font-bold">
            The Dreaming Phase
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            Started <br />
            <span className="text-zinc-800 italic">as a 6th-grade</span>
            <br /> dreamer.
          </h2>
          <p className="text-zinc-500 text-xl md:text-2xl font-medium max-w-xl">
            Armed with a mouse and pure curiosity, exploring the infinite
            possibilities of the digital canvas.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="space-y-6 text-right ml-auto"
        >
          <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase font-bold">
            The Evolution
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            The Tri-Pillar <br />
            <span className="text-zinc-800">Design Engineer</span>.
          </h2>
          <p className="text-zinc-500 text-xl md:text-2xl font-medium max-w-xl ml-auto">
            Where Frontend logic meets UI precision and Motion fluidity. No
            boundaries, only seamless experiences.
          </p>
        </motion.div>

        <motion.div style={{ opacity: opacity3 }} className="space-y-16 pt-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-zinc-800" />
            <span className="text-zinc-500 font-mono text-[10px] tracking-[0.6em] uppercase font-bold">
              Collaborated With
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-8">
            {collaborators.map((name) => (
              <motion.span
                key={name}
                whileHover={{ scale: 1.1, color: "#fff" }}
                className="text-4xl md:text-6xl font-black text-zinc-900 transition-colors cursor-default select-none uppercase tracking-tighter"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
