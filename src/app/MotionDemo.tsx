"use client";

import { motion } from "framer-motion";

export default function MotionDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4 border border-zinc-700/50 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1,
        }}
        className="w-24 h-24 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/20"
      />
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400"
      >
        Framer Motion Ready!
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-zinc-400 text-center max-w-xs"
      >
        Your animations are now powered by the most popular animation library
        for React.
      </motion.p>
    </div>
  );
}
