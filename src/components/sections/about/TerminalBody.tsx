"use client";

import { motion } from "framer-motion";

export default function TerminalBody() {
  return (
    <div className="p-8 md:p-14 font-sans space-y-10">
      {/* ── Prompt ── */}
      <div className="flex items-center gap-2 text-sm md:text-base mb-12">
        <span className="text-[#4cd964] font-medium">
          Desktop C: \portolio \About me &gt;
        </span>
      </div>

      {/* ── Content ── */}
      <div className="space-y-14">
        <div className="terminal-reveal">
          <h2 className="text-xl md:text-4xl font-medium leading-[1.4] text-zinc-400">
            Hey, I'm <span className="text-white font-bold">Hossain</span> — a{" "}
            <span className="text-white font-bold">Designer</span> and{" "}
            <span className="text-white font-bold">Frontend Developer</span>{" "}
            from Bangladesh 🇧🇩
          </h2>
        </div>

        <div className="terminal-reveal">
          <p className="text-lg md:text-2xl leading-relaxed text-zinc-400 max-w-5xl">
            I've been working in this field for over{" "}
            <span className="text-white font-bold">4 years</span>, helping
            different clients turn their ideas into clean and smooth Mobile apps
            or websites.
          </p>
        </div>

        <div className="terminal-reveal">
          <p className="text-lg md:text-2xl leading-relaxed text-zinc-400 max-w-5xl">
            Even though development is my main work,{" "}
            <span className="text-white font-bold">
              I really love designing
            </span>{" "}
            in my free time. For me, it's not just about writing code — it's
            about bringing a design to life so everything feels natural and
            connected.
          </p>
        </div>

        <div className="terminal-reveal">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-6 text-lg md:text-2xl leading-relaxed text-zinc-400">
            <span>My goal is to create work that</span>
            <span className="inline-block px-5 py-2 bg-[#4cd964] text-black font-bold rounded-md text-base md:text-xl">
              not only looks good but also feels right
            </span>
            <span>for people to use.</span>
          </div>
        </div>

        {/* ── Success message ── */}
        <div className="terminal-success pt-10 border-t border-white/5 flex items-center gap-2 text-[#4cd964] font-mono text-xs md:text-sm">
          <span>
            ✓ <span className="text-white">Compiled in</span> 32ms............
          </span>
        </div>
      </div>
    </div>
  );
}
