"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";

const skillsData = {
  frontend: [
    { name: "Compose", icon: "/compose-icon.svg" },
    { name: "Next.js", icon: "/next-icon.svg" },
    { name: "TypeScript", icon: "/ts-icon.svg" },
    { name: "React", icon: "/react-icon.svg" },
    { name: "Javascript", icon: "/js-icon.svg" },
    { name: "CSS", icon: "/css-icon.svg" },
    { name: "Tailwind", icon: "/tailwind-icon.svg" },
    { name: "MUI", icon: "/mui-icon.svg" },
    { name: "Kotlin", icon: "/kotlin-icon.svg" },
  ],
  design: [
    { name: "Figma", icon: "/figma-icon.svg" },
    { name: "Illustrator", icon: "/illustrator-icon.svg" },
    { name: "Photoshop", icon: "/photoshop-icon.svg" },
  ],
};

export default function Skills() {
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );

  const currentSkills = skillsData[activeMode];
  const middleIndex = Math.floor(currentSkills.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);

  useEffect(() => {
    setActiveIndex(Math.floor(skillsData[activeMode].length / 2));
  }, [activeMode]);

  return (
    <section className="relative w-full py-40 overflow-hidden bg-[#0a0a0a] flex flex-col items-center">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Title and Buttons Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
          <h2 className="text-[var(--brand-green)] text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            Skills
          </h2>

          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md self-center">
            <div
              onClick={() => setActiveMode("frontend")}
              className={`cursor-pointer transition-opacity duration-300 ${activeMode !== "frontend" ? "opacity-30 hover:opacity-100" : ""}`}
            >
              <AnimatedShinyButton
                className={`px-8 shadow-2xl !bg-[#050505] !border-white/5`}
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
                className={`px-8 shadow-2xl !bg-[#050505] !border-white/5`}
                active={activeMode === "design"}
              >
                Design
              </AnimatedShinyButton>
            </div>
          </div>

          <div className="hidden md:block w-40" />
        </div>

        {/* Arc Layout Area */}
        <div className="relative h-[550px] w-full flex items-center justify-center -mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center translate-y-1/3"
            >
              {/* Visible Arc Path */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-auto opacity-10 pointer-events-none"
              >
                <path
                  d="M 100 400 A 400 400 0 0 1 900 400"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Skills Icons placed along an arc */}
              {currentSkills.map((skill, index) => {
                const total = currentSkills.length;
                // Distribute icons along a 140 degree arc (from 160 to 20 degrees)
                const startAngle = 165;
                const endAngle = 15;
                const angleRange = startAngle - endAngle;
                const angle = startAngle - index * (angleRange / (total - 1));

                const radius = 420;
                const radian = (angle * Math.PI) / 180;

                const x = Math.cos(radian) * radius;
                const y = -Math.sin(radian) * radius;

                const isActive = index === activeIndex;
                const iconRotation = 90 - angle; // Rotate icons to face the center of the arc

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{ x: x, y: y, opacity: 1, rotate: iconRotation }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 15,
                      delay: index * 0.04,
                    }}
                    className="absolute cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Active Background Glow */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="activeGlow"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="absolute -inset-4 bg-[var(--brand-green)]/15 blur-[35px] rounded-full"
                          />
                        )}
                      </AnimatePresence>

                      {/* Icon Card */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.25 : 1,
                          borderColor: isActive
                            ? "var(--brand-green)"
                            : "rgba(255,255,255,0.05)",
                          backgroundColor: isActive ? "#111" : "#0d0d0d",
                        }}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center p-3 relative z-10 transition-all duration-300 overflow-hidden shadow-2xl`}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={44}
                          height={44}
                          className={`object-contain transition-all duration-500 ${isActive ? "brightness-125" : "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"}`}
                          onError={(e) => {
                            // Fallback if icon is missing
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://cdn-icons-png.flaticon.com/512/825/825590.png"; // Generic icon
                          }}
                        />
                      </motion.div>

                      {/* Dynamic Center Label */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 5,
                              scale: 0.9,
                              rotate: -iconRotation,
                            }}
                            animate={{
                              opacity: 1,
                              y: 45,
                              scale: 1,
                              rotate: -iconRotation,
                            }}
                            exit={{
                              opacity: 0,
                              y: 5,
                              scale: 0.9,
                              rotate: -iconRotation,
                            }}
                            className="absolute whitespace-nowrap bg-white text-black px-5 py-1.5 rounded-md text-sm font-bold z-20 shadow-[-10px_20px_40px_rgba(0,0,0,0.5)]"
                          >
                            {skill.name}
                            {/* Triangle Arrow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] w-2.5 h-2.5 bg-white rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
