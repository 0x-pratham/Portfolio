"use client";

import { motion } from "framer-motion";

const items = [
  "Founder",
  "CEO",
  "Software Engineer",
  "Cybersecurity",
  "Researcher",
  "Community Leader",
  "Innovation",
  "Technology",
];

export function SocialProof() {
  return (
    <section className="border-y border-white/10 py-6">
      <div className="container-custom overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...items, ...items].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-slate-400
              "
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}