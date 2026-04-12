"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gridItems = [
  {
    id: 1,
    spanClass: "md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2",
    hasImage: true,
    isMobileApp: true,
    imageSrc: "/app-1.png",
    title: "Mobile App",
    description:
      "This is a mobile app for a company called Empty Marketplace App. This app is used rent cars and for drivers to get their payment via this app.",
    tools: ["Kotlin", "KMP", "Jetpack Compose"],
  },
  {
    id: 3,
    spanClass: "md:col-span-1 lg:col-span-1",
    hasImage: true,
    imageSrc: "/ruins.png",
    imageClass: "object-cover",
    paddingClass: "p-0",
    title: "3D Design",
    description: "a 3d based scene design",
    tools: ["Blender"],
  },
  {
    id: 4,
    spanClass: "md:col-span-1 lg:col-span-1",
    hasImage: true,
    imageSrc: "/game scene.png",
    imageClass: "object-cover",
    paddingClass: "p-0",
    title: "3D Design",
    description: "a 3d based scene design",
    tools: ["Blender"],
  },
  {
    id: 5,
    spanClass: "md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2",
    hasImage: true,
    isMobileApp: true,
    imageSrc: "/app-2.png",
    title: "Figma Dashboard",
    description:
      "This is a dashboard for a company called Walsh. This dashboard is used to manage the hospital accounts and their services.",
    tools: ["Figma"],
  },
  {
    id: 6,
    spanClass: "md:col-span-2 lg:col-span-2",
    hasImage: true,
    imageSrc: "/shoe poster.png",
    paddingClass: "p-0",
    imageClass: "object-cover",
    title: "Shoe Poster",
    description:
      "This is a poster for a shoe company called TRIOT. This poster is used to promote the new shoe.",
    tools: ["Illustrator", "Canva"],
  },
  {
    id: 7,
    spanClass: "md:col-span-1 lg:col-span-1",
    hasImage: true,
    imageSrc: "/poster1.png",
    imageClass: "object-cover",
    paddingClass: "p-0",
    title: "Poster Design",
    description: "",
    tools: ["Illustrator", "Canva"],
  },
  {
    id: 8,
    spanClass: "md:col-span-1 lg:col-span-1",
    hasImage: true,
    imageSrc: "/poster2.png",
    imageClass: "object-cover",
    paddingClass: "p-0",
    title: "Poster Design",
    description: "",
    tools: ["Illustrator", "Canva"],
  },
  {
    id: 9,
    spanClass: "md:col-span-1 lg:col-span-1",
    hasImage: true,
    imageSrc: "/poster3.jpg",
    imageClass: "object-cover",
    paddingClass: "p-0",
    title: "Poster Design",
    description: "",
    tools: ["Illustrator", "Canva"],
  },
  {
    id: 10,
    spanClass: "md:col-span-1 lg:col-span-1",
    hasImage: true,
    imageSrc: "/poster4.png",
    imageClass: "object-cover",
    paddingClass: "p-0",
    title: "Poster Design",
    description: "",
    tools: ["Illustrator", "Canva"],
  },
];

export default function BentoFeatures() {
  return (
    <section className="relative bg-black pb-8 pt-0 w-full z-20">
      <div className="container mx-auto px-4 md:px-2 lg:px-2 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6 w-full">
          {gridItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={item.id}
              className={`group relative bg-[#0a0a0a] overflow-hidden rounded-3xl transition-colors duration-500 border ${item.spanClass} ${
                item.isMobileApp
                  ? "border-[var(--brand-green)]/40 group-hover:border-[var(--brand-green)]"
                  : "border-white/10 group-hover:border-white/20"
              }`}
            >
              {/* Image Holder */}
              <div
                className={`absolute inset-0 z-0 ${item.hasImage ? item.paddingClass || "px-4 pb-3 pt-0" : ""}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.imageSrc || "/app-1.png"}
                    alt={`Bento placeholder ${item.id}`}
                    fill
                    className={`transition-opacity duration-700 ease-out ${
                      item.hasImage
                        ? `${item.imageClass || "object-contain"} opacity-90`
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
                  <p className="text-zinc-400 text-xs leading-tight mb-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tools?.map((tool, i) => (
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
