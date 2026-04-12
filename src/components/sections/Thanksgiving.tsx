"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CARDS = [
  {
    image: "/c1.png",
    title: "Antigravity",
    subtitle: "AI Coding Assistant",
    tag: "AI",
  },
  {
    image: "/c2.png",
    title: "Claude",
    subtitle: "Anthropic's LLM",
    tag: "AI",
  },
  {
    image: "/c3.png",
    title: "Pinterest",
    subtitle: "Design Inspiration",
    tag: "Design",
  },
  {
    image: "/c4.png",
    title: "Aceternity UI",
    subtitle: "Component Library",
    tag: "Code",
  },
  {
    image: "/c5.png",
    title: "Shadcn UI",
    subtitle: "Component Library",
    tag: "Code",
  },
  {
    image: "/c6.png",
    title: "Magic UI",
    subtitle: "Component Library",
    tag: "Code",
  },
];

export default function Thanksgiving() {
  return (
    <section className="relative w-screen bg-black py-24 md:py-32 overflow-hidden selection:bg-[var(--brand-green)] selection:text-black">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Thanks <br />
                <span className="text-[var(--brand-green)]">Everyone</span>
              </h2>
              <p className="text-zinc-500 text-xl md:text-2xl max-w-md leading-relaxed">
                This whole project is created by AI. Not the designs, but the
                code.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Vertical Marquee */}
          <div className="relative h-[500px] overflow-hidden group">
            {/* Fading Overlays */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="flex flex-col gap-6 h-full">
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex flex-col gap-6"
              >
                {[...CARDS, ...CARDS].map((item, idx) => (
                  <Card key={idx} {...item} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ image, title, subtitle, tag }: (typeof CARDS)[0]) {
  return (
    <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4 w-full md:w-[400px] mx-auto transition-colors hover:border-white/10 hover:bg-[#161616]">
      <div className="flex items-center gap-4">
        {/* Image container */}
        <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white/90">{title}</span>
          <span className="text-xs text-zinc-500">{subtitle}</span>
        </div>
      </div>

      {/* Tag */}
      <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-md bg-white/5">
        {tag}
      </div>
    </div>
  );
}
