"use client";

import { motion } from "framer-motion";

export default function Unknown() {
  return (
    <section
      id="unknown"
      className="relative min-h-[500px] w-full bg-black overflow-hidden py-24 selection:bg-[var(--brand-green)] selection:text-black"
    >
      <div className="container mx-auto px-12 md:px-24 flex flex-col justify-center h-full max-w-7xl relative z-10">
        {/* Section Header (Terminal Style) */}
        <div className="space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mt-10"
          >
            <span className="text-[#4cd964] font-medium">
              Driver D: \portolio \Unknown &gt;
            </span>
          </motion.div>
        </div>
        {/* Content Area (As requested by the Magic UI demo snippet) */}
      </div>
      {/* Subdued Glow effect to match other sections */}
    </section>
  );
}
