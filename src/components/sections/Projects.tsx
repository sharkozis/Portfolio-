"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { LivePreviewButton } from "../ui/LivePreviewButton";
import { FlipWords } from "../ui/FlipWords";

const projects = [
  {
    title: "TSN EDUGLOW",
    tag: "Education Support",
    description:
      "TSN Edu Glow Network helps students achieve their dream of studying in Malaysia with expert guidance and seamless admission support.",
    role: "Frontend Developer",
    stack: ["ReactJS", "NextJS", "Tailwind", "Framer"],
    image: "/TSN1.png",
    livePreview: "https://tsneduglownetwork.com/",
  },
  {
    title: "Quantum UI",
    tag: "Motion System",
    description:
      "A high-performance motion design system for enterprise applications.",
    role: "Lead Designer & Developer",
    stack: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Aura Flow",
    tag: "Brand Experience",
    description: "Interactive brand experience for a luxury lifestyle company.",
    role: "Frontend Architect",
    stack: ["Next.js", "Three.js", "GSAP"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
  },
  {
    title: "Nexus Core",
    tag: "Platform Design",
    description:
      "Cloud management platform focusing on visualization and scalability.",
    role: "Fullstack Developer",
    stack: ["TypeScript", "Node.js", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Vortex 01",
    tag: "Interactive Art",
    description:
      "Experimental digital art installation exploring human-machine interaction.",
    role: "Creative Coder",
    stack: ["WebGL", "p5.js", "GLSL"],
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[600vh] bg-black selection:bg-[var(--brand-green)] selection:text-black"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
          {/* Section Header */}
        <div className="container mx-auto px-12 md:px-24 mb-24 flex justify-between items-end max-w-7xl">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mt-10"
              >
                <span className="text-[#4cd964] font-medium">
                  Driver D: \portolio \Projects &gt;
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl md:text-6xl font-black text-white uppercase tracking-tighter"
              >
                <div className="">
                  <FlipWords
                    words={["Frontend", "Design"]}
                    className="text-white"
                  />
                </div>
              </motion.h2>
            </div>

            <div className="hidden md:flex flex-col items-end gap-2">
            {/* <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              Projects
            </span> */}
              <div className="flex gap-1">
                {projects.map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1 w-8 bg-zinc-800 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-[var(--brand-green)]"
                      style={{
                        scaleX: useTransform(
                          scrollYProgress,
                        [i / projects.length, (i + 1) / projects.length],
                          [0, 1],
                        ),
                        transformOrigin: "left",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Card Container */}
          <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

        {/* Progress Background Text (Decorative) */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] pointer-events-none opacity-[0.03] overflow-hidden select-none">
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
            className="text-[20rem] font-black text-white whitespace-nowrap leading-none uppercase"
          >
            Digital Experiences Crafting Future Interactivity
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-[65vh] w-[85vw] md:w-[50vw] rounded-3xl overflow-hidden flex-shrink-0 border border-white/10 bg-[#0a0a0a] shadow-2xl"
    >
      {/* Background Image with Reveal Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 group-hover:blur-sm transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500 z-10" />
      </div>

      {/* Card Content Decoration (SelectionFrame-style Corners) */}
      {[
        "top-4 left-4",
        "top-4 right-4",
        "bottom-4 left-4",
        "bottom-4 right-4",
      ].map((pos, i) => (
        <span
          key={i}
          className={`absolute ${pos} w-2 h-2 border-white/20 z-20 pointer-events-none group-hover:border-[var(--brand-green)]/60 transition-colors duration-500
              ${i === 0 ? "border-t border-l" : ""}
              ${i === 1 ? "border-t border-r" : ""}
              ${i === 2 ? "border-b border-l" : ""}
              ${i === 3 ? "border-b border-r" : ""}
            `}
        />
      ))}

      {/* Project Info */}
      <div className="absolute inset-0 z-20 p-8 md:px-12 flex flex-col justify-center">
        <div className=" max-w-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter transition-colors duration-500">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-xs md:text-lg font-light leading-tight max-w-lg mt-2 mb-8">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-1">
                  Role
                </span>
                <span className="text-white text-sm font-medium">
                  {project.role}
                </span>
              </div>
              <div className="flex gap-2">
                {project.stack.map((item: string, i: number) => (
                  <span
                    key={i}
                    className="text-[var(--brand-green)] font-mono text-[9px] uppercase tracking-tighter"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.livePreview ? (
              <LivePreviewButton href={project.livePreview} />
            ) : (
              <LivePreviewButton label="Case Study" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
