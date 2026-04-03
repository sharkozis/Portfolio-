"use client";

import RevealLine from "./RevealLine";
import { motion } from "framer-motion";

export default function TerminalBody() {
  return (
    <div className="p-6 md:p-10 font-sans space-y-8">
      {/* ── Prompt ── */}
      <div className="flex items-center gap-2 text-sm md:text-base mb-10">
        <span className="text-[#4cd964] font-medium">
          Desktop C: \portolio \About me &gt;
        </span>
      </div>

      {/* ── Content ── */}
      <div className="space-y-12">
        <RevealLine>
          <h2 className="text-xl md:text-3xl font-medium leading-relaxed text-zinc-400">
            Hey, I'm <span className="text-white font-bold">Hossain</span> — a{" "}
            <span className="text-white font-bold">Designer</span> and{" "}
            <span className="text-white font-bold">Frontend Developer</span>{" "}
            from Bangladesh 🇧🇩
          </h2>
        </RevealLine>

        <RevealLine>
          <p className="text-lg md:text-2xl leading-relaxed text-zinc-400">
            I've been working in this field for over{" "}
            <span className="text-white font-bold underline decoration-zinc-800 underline-offset-4">
              4 years
            </span>
            , helping different clients turn their ideas into clean and smooth
            Mobile apps or websites.
          </p>
        </RevealLine>

        <RevealLine>
          <p className="text-lg md:text-2xl leading-relaxed text-zinc-400">
            Even though development is my main work,{" "}
            <span className="text-white font-bold">
              I really love designing
            </span>{" "}
            in my free time. For me, it's not just about writing code — it's
            about bringing a design to life so everything feels natural and
            connected.
          </p>
        </RevealLine>

        <RevealLine>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 text-lg md:text-2xl leading-relaxed text-zinc-400">
            <span>My goal is to create work that</span>
            <span className="inline-block px-4 py-1.5 bg-[#4cd964] text-black font-bold rounded-full text-base md:text-xl">
              not only looks good but also feels right
            </span>
            <span>for people to use.</span>
          </div>
        </RevealLine>

        {/* ── Success message ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-white/5 flex items-center gap-2 text-[#4cd964] font-mono text-sm"
        >
          <span>✓ Compiled in 32ms............</span>
        </motion.div>
      </div>
    </div>
  );
}
