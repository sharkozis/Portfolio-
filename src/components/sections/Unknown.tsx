"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import { X } from "lucide-react";
import Image from "next/image";

import { getVideos } from "@/app/actions";

export default function Unknown() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experimentalWorks, setExperimentalWorks] = useState<any[]>([]);

  // Load videos dynamically from the public/video folder
  useEffect(() => {
    async function fetchVideos() {
      const files = await getVideos();
      const mapped = files.map((file) => ({
        id: file,
        title: file.replace(".mp4", "").replace("-", " ").toUpperCase(),
        type: file.startsWith("land") ? "landscape" : "square",
        src: `/video/${file}`,
      }));
      setExperimentalWorks(mapped);
    }
    fetchVideos();
  }, []);

  // Scroll lock implementation with layout shift prevention
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (isModalOpen) {
      if (lenis) lenis.stop();
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  return (
    <section
      id="unknown"
      className="relative w-full bg-black overflow-hidden pt-32 pb-24 selection:bg-[var(--brand-green)] selection:text-black"
    >
      <div className="container mx-auto px-12 md:px-24 flex flex-col items-center justify-center h-full max-w-7xl relative z-10">
        {/* Section Header (Terminal Style) */}
        <div className="space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#4cd964] font-medium">
              Driver 404: \portolio \Unknown &gt;
            </span>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-center justify-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-0">
              Explore the{" "}
              <span className="text-[var(--brand-green)]">Unknown</span>
            </h2>
            <p className="text-zinc-500 max-w-lg text-lg">
              Click below to reveal experimental skills
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <AnimatedShinyButton
              className="px-14 shadow-2xl h-14 text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Explore
            </AnimatedShinyButton>
          </motion.div>
        </div>
      </div>

      {/* Full-screen Modal with 10px margin */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-[10px] z-[110] bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-[#0d0d0d]/50 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--brand-green)] animate-pulse" />
                  <span className="text-sm font-mono text-[var(--brand-green)] uppercase tracking-[0.3em]">
                    Experimental Module
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div
                className="flex-1 overflow-y-auto modal-scrollbar overscroll-contain min-h-0"
                data-lenis-prevent
              >
                <div className="max-w-6xl mx-auto p-8 md:p-16 space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Motion <br /> Designer
                      </h3>
                      <p className="text-neutral-400 text-xl leading-relaxed font-light">
                        I love to create motion graphics and animations. Here
                        are some of my experimental works.
                      </p>
                    </div>

                    <div className="relative w-[60%] mx-auto aspect-[3.35/4] rounded-[2rem] bg-neutral-900/50 backdrop-blur-md border border-white/10 overflow-hidden p-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <Image
                          src="/ae.jpg"
                          alt="After Effects"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="space-y-12">
                    {/* Landscape Videos Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {experimentalWorks
                        .filter((w) => w.type === "landscape")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="group relative aspect-video rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-[var(--brand-green)]/30 transition-colors"
                          >
                            <video
                              src={item.src}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                    </div>

                    {/* Square Videos Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                      {experimentalWorks
                        .filter((w) => w.type === "square")
                        .map((item) => (
                          <div
                            key={item.id}
                            className="group relative aspect-square rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-[var(--brand-green)]/30 transition-colors"
                          >
                            <video
                              src={item.src}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                    </div>

                    <div className="pt-12 pb-24 text-center">
                      <p className="text-xl md:text-4xl font-light text-white/50 leading-relaxed">
                        <span className="text-shimmer">
                          {" "}
                          Well, i love to explore skills
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
