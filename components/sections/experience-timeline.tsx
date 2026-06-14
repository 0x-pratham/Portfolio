"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { experienceTimeline } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            Journey
          </p>

          {/* Extra Improvement: Realigned to use premium typography design tokens */}
          <h2 className="font-[var(--font-cormorant)] text-5xl font-light md:text-7xl">
            Experience Timeline
          </h2>
        </div>

        <div className="relative">
          {/* CHANGE 1: Animate Timeline Line Drawing via Scroll Viewports */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute
              left-4
              top-0
              h-full
              w-[2px]
              bg-gradient-to-b
              from-violet-500
              via-violet-400
              to-transparent
              md:left-1/2
            "
          />

          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              // CHANGE 5: Dedicated state initialization per timeline item tracking
              const [hovered, setHovered] = useState(false);
              const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              };

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  // CHANGE 3: Alternate Side Reveal Transitions (Odd Left, Even Right)
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  // CHANGE 7: Component Stagger Offset Delay
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`
                    relative
                    flex
                    flex-col
                    gap-4
                    md:flex-row
                    ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }
                  `}
                >
                  {/* Timeline Card Data Blocks */}
                  <div className="md:w-1/2">
                    {/* CHANGE 4 & 5: Combined Premium Hover Lift and Dynamic Radial Background Spotlights */}
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      style={{
                        background: hovered
                          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 70%)`
                          : "rgba(255, 255, 255, 0.03)",
                      }}
                      className="
                        relative
                        rounded-3xl
                        border
                        border-white/10
                        p-6
                        backdrop-blur-xl
                        transition-colors
                        duration-300
                      "
                    >
                      {/* CHANGE 6: Animated Year Badge Overrides */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.2,
                        }}
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-violet-500/30
                          px-3
                          py-1
                          text-sm
                          text-violet-400
                        "
                      >
                        {item.year}
                      </motion.span>

                      <h3 className="mt-4 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex md:w-1/2" />

                  {/* CHANGE 2: Timeline Dot Spring Pop Custom Variant */}
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="
                      absolute
                      left-4
                      top-8
                      h-5
                      w-5
                      rounded-full
                      border-2
                      border-violet-400
                      bg-neutral-950
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}