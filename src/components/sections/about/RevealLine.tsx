"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface RevealLineProps {
  children: React.ReactNode;
  offset?: any;
}

export default function RevealLine({
  children,
  offset = ["start 80%", "start 50%"],
}: RevealLineProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="transition-all duration-500 ease-out"
    >
      {children}
    </motion.div>
  );
}
