"use client";

import React, { useState } from "react";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";

export default function Skills() {
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] font-sans select-none">
      {/* Very Subtle Dot Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 container mx-auto px-12 md:px-24 pt-16 md:pt-30 flex flex-col max-w-7xl">
        {/* Header and Toggle Button Group */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-[var(--brand-green)] text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
            Skills
          </h2>

          <div className="flex bg-[#111] p-1 rounded-full border border-white/5 shadow-2xl relative self-center">
            <div
              onClick={() => setActiveMode("frontend")}
              className={`cursor-pointer transition-opacity duration-300 ${activeMode !== "frontend" ? "opacity-30" : "opacity-100"}`}
            >
              <AnimatedShinyButton
                className="px-8 !bg-black !border-white/5 shadow-2xl"
                active={activeMode === "frontend"}
              >
                Frontend
              </AnimatedShinyButton>
            </div>
            <div
              onClick={() => setActiveMode("design")}
              className={`ml-1 cursor-pointer transition-opacity duration-300 ${activeMode !== "design" ? "opacity-30" : "opacity-100"}`}
            >
              <AnimatedShinyButton
                className="px-8 !bg-black !border-white/5 shadow-2xl"
                active={activeMode === "design"}
              >
                Design
              </AnimatedShinyButton>
            </div>
          </div>

          {/* Spacer for alignment balance */}
          <div className="w-20 hidden md:block" />
        </div>
      </div>

      {/* Orbit Path - Positioned at section bottom */}
      <div
        className="absolute left-1/2 border border-emerald-500/20 rounded-full pointer-events-none z-10"
        style={{
          width: "min(1000px, 95vw)",
          aspectRatio: "1/1",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, 57.8%)", // center below bottom to show 45% arc
        }}
      >
        <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(46,204,113,0.15)]" />
      </div>
    </section>
  );
}
