"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gridItems = [
  { id: 1, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 2, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 3, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 4, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 5, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 6, spanClass: "md:col-span-2 lg:col-span-2" }, // Leverage 20X double width
  { id: 7, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 8, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 9, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 10, spanClass: "md:col-span-1 lg:col-span-1" },
  { id: 11, spanClass: "md:col-span-1 lg:col-span-1" },
];

export default function BentoFeatures() {
  return (
    <section className="relative bg-black py-24 min-h-screen flex items-center justify-center w-full z-20">
      <div className="w-full">
        {/* Full width container, gap-[1px] with primary color background for continuous lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-[1px] bg-[var(--brand-green)]/30 border-y border-[var(--brand-green)]/30 w-full">
          {gridItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={item.id}
              className={`group relative bg-[#0a0a0a] overflow-hidden ${item.spanClass}`}
            >
              {/* Image Holder with project card hover logic */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/app-1.png"
                  alt={`Bento placeholder ${item.id}`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-30 group-hover:scale-105 group-hover:blur-sm transition-all duration-700 ease-out grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500 z-10" />
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
                  className={`absolute ${pos} w-2 h-2 border-white/10 z-20 pointer-events-none group-hover:border-[var(--brand-green)] transition-colors duration-500
                    ${i === 0 ? "border-t border-l" : ""}
                    ${i === 1 ? "border-t border-r" : ""}
                    ${i === 2 ? "border-b border-l" : ""}
                    ${i === 3 ? "border-b border-r" : ""}
                  `}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
