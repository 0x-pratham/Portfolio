"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;

  direction?: "up" | "left" | "right";

  distance?: number;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  distance = 40,
}: RevealProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -distance }
      : direction === "right"
      ? { opacity: 0, x: distance }
      : { opacity: 0, y: distance };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}