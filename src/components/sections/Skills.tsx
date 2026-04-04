"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Smartphone, Code, Palette, FileCode } from "lucide-react";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";

// --- Icons / SVGs ---

const NextjsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill="white"
    />
    <path
      d="M17.4334 16.3556C17.2023 15.9333 16.9248 15.5417 16.6009 15.1806L14.7334 13.0667V17.0667H13.6667V10.9333H14.7334L17.9334 14.6667V10.9333H19V17.0667H17.9334L17.4334 16.3556ZM19.5334 6.93333V10.9333H20.6V6.93333H19.5334Z"
      fill="black"
    />
  </svg>
);

const TypeScriptIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V21H21V3H3ZM11.16 17.7C10.74 18.06 10.26 18.21 9.72 18.21C8.82 18.21 8.25 17.82 7.74 17.07L8.67 16.47C9.06 17.04 9.3 17.28 9.78 17.28C10.14 17.28 10.38 17.13 10.38 16.83C10.38 16.11 8.7 16.02 8.7 14.61C8.7 13.77 9.36 13.11 10.35 13.11C11.13 13.11 11.64 13.38 12.06 13.89L11.19 14.49C10.89 14.07 10.65 13.98 10.32 13.98C10.02 13.98 9.75 14.13 9.75 14.37C9.75 15 11.43 15.09 11.43 16.5C11.43 17.1 11.07 17.7 11.16 17.7ZM16.32 18.21C15.27 18.21 14.52 17.7 14.07 16.74V18.12H13.14V13.11H14.07V13.83C14.52 13.11 15.27 12.75 16.32 12.75C17.79 12.75 19.05 13.86 19.05 15.48C19.05 17.1 17.79 18.21 16.32 18.21ZM15.93 13.98C14.94 13.98 14.07 14.7 14.07 15.48C14.07 16.26 14.94 16.98 15.93 16.98C16.92 16.98 17.79 16.26 17.79 15.48C17.79 14.7 16.92 13.98 15.93 13.98Z"
      fill="white"
    />
  </svg>
);

const KotlinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 2H2V22H22L12 12L22 2Z" fill="white" />
  </svg>
);

const IllustratorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="20"
      height="20"
      x="2"
      y="2"
      rx="2"
      fill="white"
      opacity="0.1"
    />
    <path d="M12 17V7" stroke="white" strokeWidth="2" />
    <path
      d="M16 17C16 14.79 14.21 13 12 13C9.79 13 8 14.79 8 17"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

const CanvaIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    <path d="M8 12L12 8L16 12L12 16L8 12Z" fill="white" />
  </svg>
);

const FigmaIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6C12 7.65685 10.6569 9 9 9H6V3H9C10.6569 3 12 4.34315 12 6Z"
      fill="white"
    />
    <path
      d="M12 12C12 13.6569 10.6569 15 9 15H6V9H9C10.6569 9 12 10.3431 12 12Z"
      fill="white"
    />
    <path
      d="M12 12C12 10.3431 13.3431 9 15 9H18V15H15C13.3431 15 12 13.6569 12 12Z"
      fill="white"
    />
    <path
      d="M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15H12V18Z"
      fill="white"
    />
    <path
      d="M15 21C16.6569 21 18 19.6569 18 18C18 16.3431 16.6569 15 15 15C13.3431 15 12 16.3431 12 18C12 19.6569 13.3431 21 15 21Z"
      fill="white"
    />
  </svg>
);

// --- Component Parts ---

const SkillIcon = ({
  icon: Icon,
  radius,
  speed,
  delay = 0,
  initialAngle = 0,
}: any) => {
  return (
    <motion.div
      className="absolute"
      animate={{
        rotate: [initialAngle, initialAngle + 360],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
        left: `calc(50% - ${radius}px)`,
        top: `calc(50% - ${radius}px)`,
        pointerEvents: "none",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        <motion.div
          animate={{ rotate: [-initialAngle, -initialAngle - 360] }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            delay: delay,
          }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-xl border-[2px] border-white/20 bg-white/5 backdrop-blur-3xl flex items-center justify-center shadow-2xl"
        >
          {typeof Icon === "function" ? <Icon /> : Icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Orbit = ({ radius }: any) => (
  <div
    className="absolute border border-white/5 rounded-full pointer-events-none"
    style={{
      width: radius * 2,
      height: radius * 2,
      left: `calc(50% - ${radius}px)`,
      top: `calc(50% - ${radius}px)`,
    }}
  />
);

export default function Skills() {
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );

  const frontendSkills = [
    {
      icon: <Atom className="text-white size-7" />,
      radius: 120,
      speed: 25,
      angle: 0,
    },
    { icon: NextjsIcon, radius: 120, speed: 25, angle: 72 },
    { icon: TypeScriptIcon, radius: 120, speed: 25, angle: 144 },
    {
      icon: <Smartphone className="text-white size-7" />,
      radius: 120,
      speed: 25,
      angle: 216,
    },
    { icon: KotlinIcon, radius: 120, speed: 25, angle: 288 },
    // Outer orbit
    {
      icon: <Code className="text-white size-7" />,
      radius: 220,
      speed: 45,
      angle: 30,
    },
    {
      icon: <Palette className="text-white size-7" />,
      radius: 220,
      speed: 45,
      angle: 150,
    },
    {
      icon: <FileCode className="text-white size-7" />,
      radius: 220,
      speed: 45,
      angle: 270,
    },
  ];

  const designSkills = [
    { icon: FigmaIcon, radius: 140, speed: 30, angle: 0 },
    { icon: IllustratorIcon, radius: 140, speed: 30, angle: 120 },
    { icon: CanvaIcon, radius: 140, speed: 30, angle: 240 },
  ];

  return (
    <section
      id="skills"
      className="pt-32 pb-60 relative overflow-hidden flex flex-col items-center"
    >
      {/* --- Toggle Buttons --- */}
      <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md z-20 mb-32">
        <div
          onClick={() => setActiveMode("frontend")}
          className={`cursor-pointer transition-opacity duration-300 ${activeMode !== "frontend" ? "opacity-30 hover:opacity-100" : ""}`}
        >
          <AnimatedShinyButton className="px-8 shadow-2xl">
            Frontend
          </AnimatedShinyButton>
        </div>
        <div
          onClick={() => setActiveMode("design")}
          className={`ml-1 cursor-pointer transition-opacity duration-300 ${activeMode !== "design" ? "opacity-30 hover:opacity-100" : ""}`}
        >
          <AnimatedShinyButton className="px-8 shadow-2xl">
            Design
          </AnimatedShinyButton>
        </div>
      </div>

      {/* --- Animated Skills Area --- */}
      <div className="relative w-full max-w-5xl h-[500px] md:h-[650px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Center Box */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="z-10 bg-white border-[3px] border-white/20 px-12 py-5 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group min-w-[200px]"
            >
              <div className="absolute inset-0 bg-[var(--brand-green)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-2xl md:text-3xl font-black tracking-[-0.05em] text-black uppercase relative z-10">
                {activeMode}
              </span>
            </motion.div>

            {/* Hub Lines / Orbits */}
            {activeMode === "frontend" && (
              <>
                <Orbit radius={120} />
                <Orbit radius={220} />
                {frontendSkills.map((skill, i) => (
                  <SkillIcon
                    key={i}
                    icon={skill.icon}
                    radius={skill.radius}
                    speed={skill.speed}
                    initialAngle={skill.angle}
                  />
                ))}
              </>
            )}

            {activeMode === "design" && (
              <>
                <Orbit radius={140} />
                {designSkills.map((skill, i) => (
                  <SkillIcon
                    key={i}
                    icon={skill.icon}
                    radius={skill.radius}
                    speed={skill.speed}
                    initialAngle={skill.angle}
                  />
                ))}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[var(--brand-green)]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--bg-base)] to-transparent pointer-events-none -z-10" />
    </section>
  );
}
