"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "X (Twitter)", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Dribbble", href: "#" },
];

export default function Handshake() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black relative px-6 py-40 overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25vw] font-black uppercase tracking-tighter whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-[1px] bg-zinc-800" />
          <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase font-bold">
            The Handshake
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 tracking-tight">
            Ready to push boundaries?
          </h2>
          <motion.a
            href="mailto:hello@designengineer.com"
            whileHover={{ scale: 1.02, color: "#3b82f6" }}
            className="block text-[14vw] sm:text-[10vw] font-black text-white leading-none tracking-tighter uppercase transition-all duration-500"
          >
            Let's Talk
          </motion.a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ y: -4, color: "#fff" }}
              className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase font-bold transition-colors"
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 w-full max-w-7xl px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-800 font-mono text-[9px] uppercase tracking-widest">
        <span>&copy; 2026 DESIGN ENGINEER — NEW YORK CITY</span>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </section>
  );
}
