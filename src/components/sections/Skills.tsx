"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";

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

// Orbit radius - adjusted for perfect visual balance
const RADIUS = 420;
// Focus angle: top center (12 o'clock)
const FOCUS_ANGLE = 90;

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [activeMode, setActiveMode] = useState<"frontend" | "design">(
    "frontend",
  );
  const currentSkills = skillsData[activeMode];
  const numSkills = currentSkills.length;
  const stepAngle = 360 / Math.max(numSkills, 1);

  // Rotation angle with smooth spring physics
  const rotationAngle = useMotionValue(0);
  const smoothRotation = useSpring(rotationAngle, {
    stiffness: 140,
    damping: 28,
    mass: 1.1,
  });

  const [activeIconIndex, setActiveIconIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);

  // --- Initialization & Mode Switching ---
  useEffect(() => {
    setMounted(true);
    // Center the middle index at the top (FOCUS_ANGLE)
    const middleIndex = Math.floor(skillsData[activeMode].length / 2);
    const initialAngle = FOCUS_ANGLE - middleIndex * stepAngle;
    rotationAngle.set(initialAngle);
    setActiveIconIndex(middleIndex);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!mounted) return;
    const middleIndex = Math.floor(skillsData[activeMode].length / 2);
    const targetAngle = FOCUS_ANGLE - middleIndex * stepAngle;
    animate(rotationAngle, targetAngle, {
      type: "spring",
      stiffness: 120,
      damping: 26,
      onComplete: () => {
        setActiveIconIndex(middleIndex);
      },
    });
  }, [activeMode, mounted, rotationAngle, stepAngle]);

  // --- Active index detection based on proximity to FOCUS_ANGLE ---
  useMotionValueEvent(smoothRotation, "change", (latestRotation) => {
    let closestIndex = 0;
    let minDiff = Infinity;

    for (let i = 0; i < numSkills; i++) {
      const iconAngle = latestRotation + i * stepAngle;
      const normalizedAngle = ((iconAngle % 360) + 360) % 360;
      const diff = Math.abs(normalizedAngle - FOCUS_ANGLE);
      const wrappedDiff = Math.min(diff, 360 - diff);

      if (wrappedDiff < minDiff) {
        minDiff = wrappedDiff;
        closestIndex = i;
      }
    }

    // Only set active when very close to the focus angle (pixel-perfect snapping feel)
    if (minDiff < 3) {
      setActiveIconIndex(closestIndex);
    } else if (minDiff > 12) {
      // Clear active when not focused to avoid flickering labels
      setActiveIconIndex(null);
    }
  });

  // --- Drag to rotate with momentum ---
  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    dragStartX.current = clientX;
    dragStartRotation.current = rotationAngle.get();
    setIsSpinning(true);
  };

  const handleDragMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isSpinning) return;
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const deltaX = clientX - dragStartX.current;
    // Invert delta: moving right (positive deltaX) should decrease angle for rightward motion on top arc
    rotationAngle.set(dragStartRotation.current - deltaX * 0.35);
  };

  const handleDragEnd = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isSpinning) return;
    const clientX =
      "changedTouches" in event
        ? event.changedTouches[0].clientX
        : event.clientX;
    const deltaX = clientX - dragStartX.current;
    const velocity = -deltaX * 0.45; // Inverted velocity for matching momentum

    animate(rotationAngle, rotationAngle.get() + velocity, {
      type: "spring",
      stiffness: 35,
      damping: 22,
      velocity: velocity,
      onComplete: () => {
        // Snap to nearest item after momentum settles
        const currentRot = rotationAngle.get();
        const idealIndex = Math.round((FOCUS_ANGLE - currentRot) / stepAngle);
        const finalSnapAngle = FOCUS_ANGLE - idealIndex * stepAngle;

        animate(rotationAngle, finalSnapAngle, {
          type: "spring",
          stiffness: 180,
          damping: 28,
          onComplete: () => {
            setIsSpinning(false);
            setActiveIconIndex(idealIndex);
          },
        });
      },
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans select-none">
      {/* Refined Dot Grid Background - matches image texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1.2px, transparent 1.2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-8 md:px-12 pt-20 h-full flex flex-col max-w-7xl">
        {/* Header: Skills title + Tabs (exactly as reference) */}
        <div className="flex justify-between items-center">
          <h2 className="text-[#2ecc71] text-5xl md:text-6xl font-bold tracking-tighter uppercase">
            Skills
          </h2>

          {/* Tab Switcher - Pixel-perfect pill design */}
          <div className="relative bg-zinc-900/60 backdrop-blur-sm p-1 rounded-full border border-white/10 shadow-xl">
            <button
              onClick={() => setActiveMode("frontend")}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 z-10 ${
                activeMode === "frontend"
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Frontend
              {activeMode === "frontend" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-500/10 rounded-full -z-0 border border-emerald-500/30 shadow-[0_0_12px_rgba(46,204,113,0.3)]"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveMode("design")}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 z-10 ${
                activeMode === "design"
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Design
              {activeMode === "design" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-500/10 rounded-full -z-0 border border-emerald-500/30 shadow-[0_0_12px_rgba(46,204,113,0.3)]"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          </div>

          {/* Spacer for alignment */}
          <div className="w-16 hidden md:block" />
        </div>

        {/* Orbit Area with Drag Interaction */}
        <div className="flex-1 relative flex items-center justify-center overflow-visible">
          {/* Drag overlay - full area grab */}
          <div
            className="absolute inset-0 cursor-grab active:cursor-grabbing z-20"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          />

          {/* Circular Orbit Track - exactly as image reference */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: RADIUS * 2,
              height: RADIUS * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Main ring with subtle gradient */}
            <div className="absolute inset-0 rounded-full border border-white/[0.07] shadow-[0_0_20px_rgba(0,0,0,0.5)]" />
            {/* Dashed decorative ring */}
            <div className="absolute inset-[-4px] rounded-full border border-emerald-500/10 border-dashed" />
            {/* Top focus indicator (green dot at 12 o'clock) */}
            <div
              className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_12px_#2ecc71] top-[-6px] left-1/2 -translate-x-1/2"
              style={{ top: "-6px" }}
            />
          </div>

          {/* Animated Icons */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              className="absolute w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {mounted &&
                currentSkills.map((skill, idx) => (
                  <OrbitIcon
                    key={skill.name}
                    skill={skill}
                    index={idx}
                    rotationAngle={smoothRotation}
                    stepAngle={stepAngle}
                    isActive={activeIconIndex === idx && !isSpinning}
                    totalItems={numSkills}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Ambient glow at center - adds depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}

// ------------------------------------------------------------------
// Individual Orbit Icon Component (Pixel-perfect with label positioning)
// ------------------------------------------------------------------
function OrbitIcon({
  skill,
  index,
  rotationAngle,
  stepAngle,
  isActive,
  totalItems,
}: {
  skill: { name: string; icon: string };
  index: number;
  rotationAngle: any;
  stepAngle: number;
  isActive: boolean;
  totalItems: number;
}) {
  // Dynamic angle for this icon based on current rotation
  const angleValue = useTransform(rotationAngle, (rot: number) => {
    let angle = rot + index * stepAngle;
    angle = ((angle % 360) + 360) % 360;
    return angle;
  });

  // Position on the circle: x, y
  const x = useTransform(
    angleValue,
    (a: number) => Math.cos((a * Math.PI) / 180) * RADIUS,
  );
  const y = useTransform(
    angleValue,
    (a: number) => -Math.sin((a * Math.PI) / 180) * RADIUS,
  );

  // Opacity based on distance from top focus
  const opacity = useTransform(angleValue, (a: number) => {
    const diff = Math.abs(a - FOCUS_ANGLE);
    const dist = Math.min(diff, 360 - diff);
    if (dist < 20) return 1;
    if (dist < 50) return 0.7;
    return 0.4;
  });

  // Scale effect for active & near-active items
  const scale = useTransform(angleValue, (a: number) => {
    const diff = Math.abs(a - FOCUS_ANGLE);
    const dist = Math.min(diff, 360 - diff);
    if (dist < 10) return 1.25;
    if (dist < 35) return 1.05;
    return 0.9;
  });

  // Icon container styling: always upright (no rotation)
  // The label is positioned absolutely relative to the icon center, never rotated.
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform"
      style={{
        x,
        y,
        opacity,
        scale,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Active Glow Ring (pixel-perfect match to reference) */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="absolute -inset-8 rounded-full bg-emerald-500/20 blur-2xl"
            />
          )}
        </AnimatePresence>

        {/* Icon Card */}
        <div
          className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 z-10
            ${
              isActive
                ? "bg-gradient-to-br from-zinc-800 to-zinc-900 border-emerald-400/70 shadow-[0_0_25px_rgba(46,204,113,0.25)]"
                : "bg-zinc-900/80 border-white/10 shadow-lg"
            } border backdrop-blur-sm`}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            width={52}
            height={52}
            className={`object-contain transition-all duration-300 ${
              isActive ? "brightness-110 scale-105" : "brightness-90"
            }`}
            draggable={false}
          />
        </div>

        {/* Label that appears below active icon - perfectly centered, no rotation */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 72, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="absolute whitespace-nowrap z-30 pointer-events-none"
              style={{
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="relative bg-white text-black font-bold text-sm md:text-base py-2 px-5 rounded-xl shadow-2xl tracking-tight">
                {skill.name}
                {/* Triangle pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
