"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* ── Background & Effects ── */}
      <div
        className="absolute inset-0 bg-grid-animated pointer-events-none opacity-50"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 vignette pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* ── Main Hero Container ── */}
      <div className="flex-1 flex flex-col px-12 md:px-24 pt-16 md:pt-24 relative z-10 w-full max-w-7xl mx-auto">
        {/* Top Layout: Avatar + Text on left, Connect on right */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Left Side: Avatar and Text Content beside each other */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            {/* Avatar Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl border-[3px] border-white overflow-hidden bg-[#111] flex items-center justify-center shadow-2xl shrink-0"
            >
              <Image
                src="/HeroImg.svg"
                alt="Hossain Avatar"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Text Content beside Avatar */}
            <div className="flex flex-col text-center md:text-left pt-2 md:pt-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-1"
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
            className="shrink-0 pt-2 md:pt-12"
          >
            <AnimatedShinyButton className="px-8 shadow-2xl">
              Connect
            </AnimatedShinyButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
