"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import { TextShimmer } from "@/components/core/text-shimmer";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* ── Background & Effects ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />
      </div>

      {/* ── Main Hero Container ── */}
      <div className="flex-1 flex flex-col px-12 md:px-24 pt-16 md:pt-30 relative z-10 w-full max-w-7xl mx-auto">
        {/* Top Layout: Avatar + Text on left, Connect on right */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Left Side: Avatar and Text Content beside each other */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
            {/* Avatar Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-20 h-20 rounded-xl border-[3px] border-white overflow-hidden flex items-center justify-center shadow-2xl shrink-0"
            >
              <Image
                src="/HeroImg.svg"
                alt="Hossain Avatar"
                width={120}
                height={120}
                className="object-cover scale-150"
                priority
              />
            </motion.div>

            {/* Text Content beside Avatar */}
            <div className="flex flex-col text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-0"
              >
                Hi, I’m Hossain
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg font-medium tracking-wide text-[var(--brand-green)]"
              >
                Designer – Developer
              </motion.p>
            </div>
          </div>

          {/* Right Side: Animated Shiny Button from Eldora UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="shrink-0 md:pt-4"
          >
            <AnimatedShinyButton
              className="px-8 shadow-2xl"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  const lenis = (window as any).lenis;
                  if (lenis) {
                    lenis.scrollTo(element, { offset: 0, duration: 2 });
                  } else {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              Connect
            </AnimatedShinyButton>
          </motion.div>
        </div>

        {/* ── Hero Description Paragraph (Middle) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center text-center mx-auto relative group mt-8"
        >
          <p className="text-xl md:text-4xl font-light text-white/50 mt-12 md:mt-30 leading-relaxed">
            I <SelectionFrame>Design</SelectionFrame> and{" "}
            <SelectionFrame>Develop</SelectionFrame>{" "}
            <span className="text-shimmer">
              clean Mobile and Web applications.
            </span>
            <br className="hidden md:block" />
          </p>
          <p className="opacity-80 text-shimmer text-xl md:text-3xl mt-4">
            Blending creativity with code to create smooth, modern interfaces.
          </p>

          {/* ── Availability Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex items-center gap-3 px-4 py-2.5 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(45,165,71,0.1)] group"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand-green)]"></span>
            </div>
            <p className="text-[12px]">Available for project</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

{
  /* ── SelectionFrame Helper Component ── */
}
function SelectionFrame({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-4 py-1 mx-1 group cursor-default">
      {/* Corner Handles */}
      {[
        "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
        "top-0 right-0 translate-x-1/2 -translate-y-1/2",
        "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
        "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
      ].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-1.5 h-1.5 bg-white border border-[var(--brand-green)] z-20 pointer-events-none opacity-80`}
        />
      ))}

      {/* Frame Border & Glow */}
      <span className="absolute inset-0 border border-[var(--brand-green)]/40 pointer-events-none z-10 opacity-60" />

      {/* Text Content */}
      <span
        style={{ WebkitTextFillColor: "initial" }}
        className="relative z-30 text-white font-semibold tracking-wide"
      >
        {children}
      </span>
    </span>
  );
}
