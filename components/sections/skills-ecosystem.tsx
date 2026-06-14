"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/shared/reveal";

export function SkillsEcosystem() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <Reveal>
          <div className="mb-16">
            <p
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.35em]
                text-accent
              "
            >
              Expertise
            </p>

            {/* CHANGE 1: Upgrade Heading Typography to align with the premium system */}
            <h2
              className="
                font-[var(--font-cormorant)]
                text-5xl
                font-light
                leading-none
                md:text-7xl
              "
            >
              Areas of Expertise
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.1}
            >
              {/* CHANGE 2 & CHANGE 3: Replace with motion.div, add premium hover settings, and group properties */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                "
              >

                {/* CHANGE 3: Premium Radial Gradient Cursor Spotlight Underlay */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    pointer-events-none
                  "
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(139,92,246,0.12), transparent 60%)",
                  }}
                />

                <h3 className="mb-6 text-3xl font-light relative z-10">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {group.skills.map((skill) => (
                    /* CHANGE 4: Upgraded Interactive Technology Pills */
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-[var(--border)]
                        px-3
                        py-1
                        text-xs
                        transition-all
                        duration-300
                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]
                        bg-[var(--surface-light)]/30
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}