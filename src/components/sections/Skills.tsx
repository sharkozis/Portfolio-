"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import Image from "next/image";

const skills = [
  { name: "Compose", icon: "/compose-icon.svg" },
  { name: "Next.js", icon: "/next-icon.svg" },
  { name: "TypeScript", icon: "/ts-icon.svg" },
  { name: "React", icon: "/react-icon.svg" },
  { name: "JavaScript", icon: "/js-icon.svg" },
  { name: "CSS", icon: "/css-icon.svg" },
  { name: "Tailwind", icon: "/tailwind-icon.svg" },
  { name: "MUI", icon: "/mui-icon.svg" },
  { name: "Kotlin", icon: "/kotlin-icon.svg" },
];

export default function Skills() {
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Static Rotation for perfect placement
  const rotationValue = 0;

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

      {/* Skill Icons - Static Placement */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {mounted &&
          skills.map((skill, index) => (
            <SkillIcon
              key={skill.name}
              skill={skill}
              index={index}
              rotation={rotationValue}
            />
          ))}
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .icon-shine-effect {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
}

type Skill = {
  name: string;
  icon: string;
};

function SkillIcon({
  skill,
  index,
  rotation,
}: {
  skill: Skill;
  index: number;
  rotation: number;
}) {
  const spacing = 18; // degrees between icons for 1000px arc
  const angle = rotation + (index - 4) * spacing;

  // R = 500 center at 50% width, 100% height + 78px
  const x = `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 500}px)`;
  const y = `calc(100% + 78px - ${Math.cos((angle * Math.PI) / 180) * 500}px)`;

  return (
    <motion.div
      style={{
        left: x,
        top: y,
        x: "-50%",
        y: "-50%",
      }}
      className="absolute flex flex-col items-center gap-4"
    >
      <div className="relative w-20 h-20 bg-[#0a0a0a] border border-white/10 rounded-[14px] flex items-center justify-center shadow-2xl group overflow-hidden">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={45}
          height={45}
          className="object-contain z-10"
        />
        {/* Glow & Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      </div>

      {/* Title Chip */}
      <div className="px-4 py-1.5 bg-zinc-900 border border-emerald-500/20 rounded-full shadow-lg">
        <span className="text-[12px] font-bold text-[#2ecc71] uppercase tracking-widest whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
