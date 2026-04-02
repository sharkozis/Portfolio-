"use client";
import { motion, type Transition, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface TextShimmerProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

export function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
  style,
  ...props
}: TextShimmerProps) {
  const MotionComponent = (motion as any)[Component as string] || motion.p;

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:200%_100%] bg-clip-text text-transparent transition-colors duration-200",
        className,
      )}
      style={
        {
          backgroundImage: `linear-gradient(to right, var(--shimmer-from, rgba(255, 255, 255, 0.4)) 0%, var(--shimmer-via, #ffffff) 50%, var(--shimmer-to, rgba(255, 255, 255, 0.4)) 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          ...style,
        } as React.CSSProperties
      }
      {...props}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
    >
      {children}
    </MotionComponent>
  );
}
