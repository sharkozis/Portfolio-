"use client";

import { useRef, useLayoutEffect } from "react";
import TerminalBackground from "./TerminalBackground";
import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Main Pinning ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", // How long it stays sticky
          pin: true,
          scrub: 1, // Smooth scrub
          anticipatePin: 1,
        },
      });

      // Targets: every element with class .terminal-reveal
      const lines = gsap.utils.toArray(".terminal-reveal");

      lines.forEach((line) => {
        tl.fromTo(
          line as HTMLElement,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5", // Slight overlap for stagger feel
        );
      });

      // Special handling for the success message at the end
      tl.fromTo(
        ".terminal-success",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "+=0.2",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex pt-16 md:pt-0 items-start md:items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <TerminalBackground />

      <div ref={terminalRef} className="max-w-6xl w-full relative z-10 px-6">
        <div className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
          <TerminalHeader />
          <TerminalBody />
        </div>
      </div>
    </section>
  );
}
