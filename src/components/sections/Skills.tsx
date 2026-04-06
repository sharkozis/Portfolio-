"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import Image from "next/image";

const frontendSkills = [
  { name: "JavaScript", icon: "/js-icon.svg" },
  { name: "CSS", icon: "/css-icon.svg" },
  { name: "Tailwind", icon: "/tailwind-icon.svg" },
  { name: "MUI", icon: "/mui-icon.svg" },
  { name: "Kotlin", icon: "/kotlin-icon.svg" },
  { name: "Jetpack Compose", icon: "/compose-icon.svg" },
  { name: "Next.js", icon: "/next-icon.svg" },
  { name: "TypeScript", icon: "/ts-icon.svg" },
  { name: "React Js", icon: "/react-icon.svg" },
  { name: "JavaScript", icon: "/js-icon.svg" },
  { name: "CSS", icon: "/css-icon.svg" },
  { name: "Tailwind", icon: "/tailwind-icon.svg" },
];

const designSkills = [
  { name: "Illustrator", icon: "/illustrator-icon.svg" },
  { name: "Figma", icon: "/figma-icon.svg" },
  { name: "Framer", icon: "/framer-icon.svg" },
  { name: "Canva", icon: "/canva-icon.svg" },
  { name: "Affinity", icon: "/affinity-icon.svg" },
  { name: "Illustrator", icon: "/illustrator-icon.svg" },
  { name: "Figma", icon: "/figma-icon.svg" },
  { name: "Framer", icon: "/framer-icon.svg" },
  { name: "Canva", icon: "/canva-icon.svg" },
];

export default function Skills() {
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Circle Animation State
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const handleDrag = (_: any, info: any) => {
    // factor controls the sensitivity of the drag
    const factor = 0.15;
    rotation.set(rotation.get() + info.delta.x * factor);
  };

  const handleDragEnd = (_: any, info: any) => {
    const velocity = info.velocity.x;
    const currentRotation = rotation.get();

    // Snapping logic based on active mode spacing
    const snapSpacing = activeMode === "frontend" ? 30 : 40;

    // Project final position (much shorter for snappy 'Snap-to-Slot' feel)
    const projectedRotation = currentRotation + velocity * 0.04;
    const snapTarget =
      Math.round(projectedRotation / snapSpacing) * snapSpacing;

    animate(rotation, snapTarget, {
      type: "spring",
      stiffness: 120, // higher stiffness for snappy response
      damping: 20, // lower damping for active movement
      velocity: velocity * 0.04,
      restDelta: 0.001,
    });
  };

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-[#050505] font-sans select-none"
      onPointerDown={(e) =>
        ((e.currentTarget as HTMLElement).style.cursor = "grabbing")
      }
      onPointerUp={(e) =>
        ((e.currentTarget as HTMLElement).style.cursor = "default")
      }
    >
      {/* Invisible Drag Layer */}
      <motion.div
        className="absolute inset-0 z-30 cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />
      {/* Dot Background - Subdued */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-40 container mx-auto px-12 md:px-24 pt-16 md:pt-30 flex flex-col max-w-7xl">
        {/* Header and Toggle Button Group */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 relative z-50">
          <h2 className="text-[var(--brand-green)] text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
            Skills
          </h2>

          <div className="flex bg-white/10 py-2 px-3 rounded-xl border border-white/10 relative gap-2 items-center backdrop-blur-sm">
            {activeMode === "frontend" ? (
              <motion.div className="relative cursor-default">
                <AnimatedShinyButton
                  className="px-8 !bg-black !border-transparent rounded-lg !text-white active:translate-y-0"
                  active={true}
                  showIcon={false}
                >
                  Frontend
                </AnimatedShinyButton>
                <div className="absolute -top-1 -right-1 flex h-3 w-3 z-30">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--brand-green)] shadow-[0_0_10px_var(--brand-green)]"></span>
                </div>
              </motion.div>
            ) : (
              <button
                onClick={() => setActiveMode("frontend")}
                className="px-8 py-2.5 rounded-lg text-white/40 font-bold transition-all duration-300 hover:text-white/60"
              >
                Frontend
              </button>
            )}

            {activeMode === "design" ? (
              <motion.div className="relative cursor-default">
                <AnimatedShinyButton
                  className="px-8 !bg-black !border-transparent rounded-lg !text-white active:translate-y-0"
                  active={true}
                  showIcon={false}
                >
                  Design
                </AnimatedShinyButton>
                <div className="absolute -top-1 -right-1 flex h-3 w-3 z-30">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--brand-green)] shadow-[0_0_10px_var(--brand-green)]"></span>
                </div>
              </motion.div>
            ) : (
              <button
                onClick={() => setActiveMode("design")}
                className="px-8 py-2.5 rounded-lg text-white/40 font-bold transition-all duration-300 hover:text-white/60"
              >
                Design
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Orbit Path - Clean Primary Ring */}
      <div
        className="absolute left-1/2 rounded-full pointer-events-none z-10"
        style={{
          width: "min(1000px, 95vw)",
          aspectRatio: "1/1",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%, 50%)",
          border: "1px solid rgb(16, 252, 114,0.5)", // Subtle primary border
        }}
      />

      {/* Skill Icons - Animated Orbit */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {mounted &&
              (activeMode === "frontend" ? frontendSkills : designSkills).map(
                (skill, index) => (
                  <SkillIcon
                    key={`${activeMode}-${skill.name}-${index}`}
                    skill={skill}
                    index={index}
                    rotation={smoothRotation}
                    mode={activeMode}
                  />
                ),
              )}
          </motion.div>
        </AnimatePresence>
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
  mode,
}: {
  skill: Skill;
  index: number;
  rotation: any;
  mode: "frontend" | "design";
}) {
  const spacing = mode === "frontend" ? 30 : 40; // 30 for 7 visible, 40 for 5 visible

  // Infinite wrapping logic
  const angle = useTransform(rotation, (r: number) => {
    const baseAngle = r + index * spacing;
    return ((((baseAngle + 180) % 360) + 360) % 360) - 180;
  });

  // R = 500 center at 50% width, 100% height
  const x = useTransform(
    angle,
    (a: number) => `calc(50% + ${Math.sin((a * Math.PI) / 180) * 500}px)`,
  );
  const y = useTransform(
    angle,
    (a: number) => `calc(100% - ${Math.cos((a * Math.PI) / 180) * 500}px)`,
  );

  // Wider visibility range for the 50% arc
  const opacity = useTransform(
    angle,
    [-150, -110, -100, 100, 110, 150],
    [0, 0, 1, 1, 0, 0],
  );
  const scale = useTransform(angle, [-90, 0, 90], [0.8, 1.1, 0.8]);

  // Active Glow Effect (peaks at angle 0)
  const activeGlowOpacity = useTransform(angle, [-20, 0, 20], [0, 0.4, 0]);
  const activeGlowScale = useTransform(angle, [-20, 0, 20], [0.8, 1.8, 0.8]);

  return (
    <motion.div
      style={{
        left: x,
        top: y,
        x: "-50%",
        y: "-50%",
        opacity,
        scale,
      }}
      className="absolute flex flex-col items-center gap-4"
    >
      <motion.div
        style={{
          opacity: activeGlowOpacity,
          scale: activeGlowScale,
          background: "rgb(16, 252, 114)",
          filter: "blur(25px)",
          boxShadow: "0 0 60px rgba(16, 252, 114, 0.5)",
        }}
        className="absolute w-14 h-14 rounded-full z-0"
      />

      <div
        className="relative w-14 h-14 bg-[#0a0a0a] border border-white/10 shadow-2xl group z-10"
        style={{ borderRadius: "8px", overflow: "hidden" }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-cover z-10"
        />
        {/* Subtle Overlay Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 z-20" />
      </div>

      {/* Title Chip - White theme for selection */}
      <motion.div
        style={{
          opacity: useTransform(angle, [-15, 0, 15], [0, 1, 0]),
        }}
        className="px-4 py-1.5 border border-white rounded-full  relative z-30"
      >
        <span className="text-[10px] text-white uppercase tracking-widest whitespace-nowrap">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
