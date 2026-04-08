"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gridItems = [
  {
    id: 1,
    spanClass: "md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2",
    hasImage: true,
    title: "Mobile App",
    description:
      "This is a mobile app for a company called Empty Marketplace App. This app is used rent cars and for drivers to get their payment via this app.",
    tools: ["Kotlin", "KMP", "Jetpack Compose"],
  },
  {
    id: 3,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "Design System",
    description: "Component library powering the enterprise ecosystem.",
    tools: ["React", "Storybook", "Figma"],
  },
  {
    id: 4,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "AI Dashboard",
    description: "Data visualization tracking neural net performance metrics.",
    tools: ["D3.js", "Next.js", "Python"],
  },
  {
    id: 5,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "E-Commerce",
    description: "High-conversion headless storefront.",
    tools: ["Shopify", "Remix", "Tailwind"],
  },
  {
    id: 6,
    spanClass: "md:col-span-2 lg:col-span-2",
    title: "Quantum UI System",
    description:
      "A high-performance motion design system capable of maintaining 60fps across complex web animations.",
    tools: ["Framer Motion", "React", "WebGL"],
  },
  {
    id: 7,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "Fintech App",
    description: "Real-time trading analytics with sub-millisecond precision.",
    tools: ["WebSockets", "Node.js", "Redis"],
  },
  {
    id: 8,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "Marketing Site",
    description: "Interactive landing page with dynamic scroll stories.",
    tools: ["GSAP", "Three.js", "Next.js"],
  },
  {
    id: 9,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "Admin Panel",
    description: "Internal tools combining data management and CRM.",
    tools: ["React Admin", "GraphQL", "Prisma"],
  },
  {
    id: 10,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "Social Platform",
    description: "Community-driven content aggregator.",
    tools: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 11,
    spanClass: "md:col-span-1 lg:col-span-1",
    title: "Web3 Wallet",
    description: "Secure, non-custodial crypto wallet interface.",
    tools: ["Ethers.js", "Next.js", "Tailwind"],
  },
];

export default function BentoFeatures() {
  return (
    <section className="relative bg-black py-24 min-h-screen flex items-center justify-center w-full z-20">
      <div className="container mx-auto px-4 md:px-2 lg:px-2 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6 w-full">
          {gridItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={item.id}
              className={`group relative bg-[#0a0a0a] overflow-hidden rounded-3xl transition-colors duration-500 border ${item.spanClass} ${
                item.hasImage
                  ? "border-[var(--brand-green)]/40 group-hover:border-[var(--brand-green)]"
                  : "border-white/10 group-hover:border-[var(--brand-green)]"
              }`}
            >
              {/* Image Holder */}
              <div
                className={`absolute inset-0 z-0 ${item.hasImage ? "px-4 py-3" : ""}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/app-1.png"
                    alt={`Bento placeholder ${item.id}`}
                    fill
                    className={`transition-opacity duration-700 ease-out ${
                      item.hasImage
                        ? "object-contain opacity-90"
                        : "object-cover opacity-60 grayscale group-hover:opacity-30"
                    }`}
                  />
                  {!item.hasImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  )}
                </div>
              </div>

              {/* Blurred Info Box Hover Reveal */}
              <div className="absolute left-0 bottom-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-30">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-t border-white/10 z-0" />
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white tracking-widest uppercase truncate">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-xs leading-relaxed mb-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-[var(--brand-green)] uppercase tracking-tighter"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
