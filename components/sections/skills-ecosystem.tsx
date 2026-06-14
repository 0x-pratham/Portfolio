"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/shared/reveal";
import { FiZap, FiShield, FiCpu, FiTrendingUp, FiTerminal, FiLayers } from "react-icons/fi";

// Clean, functional React Icons mapping ensuring all exports strictly exist in 'react-icons/fi'
const groupIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: FiZap,
  Backend: FiTerminal,
  Cybersecurity: FiShield,
  Research: FiCpu,
  Entrepreneurship: FiTrendingUp,
};

export function SkillsEcosystem() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div
          className="
            mb-16
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-accent
              "
            >
              Expertise
            </p>

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

            {/* Supporting context line matching the Project section text rhythm */}
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              Engineering, cybersecurity, research, entrepreneurship, and technology leadership.
            </p>
          </div>
        </div>

        {/* Clean layout aligning all boxes into a single row on desktop screens */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            // Fallback icon if a group doesn't perfectly match the key
            const IconComponent = groupIcons[group.title] || FiLayers;

            return (
              /* Alternate Card Reveal matching the FeaturedProjects layout */
              <motion.article
                key={group.title}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  h-full
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
                {/* Premium Research Laboratory Dynamic Glow Backplate Implemented */}
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
                      "radial-gradient(circle at top right, rgba(139,92,246,0.15), transparent 60%)",
                  }}
                />

                {/* Title and Icon row layout with advanced group hover color text color transition */}
                <div className="flex items-center mb-6 relative z-10">
                  <h3 
                    className="
                      text-3xl 
                      font-light 
                      flex 
                      items-center 
                      gap-3
                      transition-colors
                      duration-500
                      group-hover:text-[var(--accent)]
                    "
                  >
                    <IconComponent className="w-6 h-6 text-[var(--accent)] opacity-85" />
                    {group.title}
                  </h3>
                </div>

                {/* Modern Technology Pills Wrapper */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-[var(--border)]
                        px-3
                        py-1
                        text-xs
                        text-[var(--warm-grey)]
                        bg-[var(--surface-light)]/50
                        transition-all
                        duration-300
                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]
                        hover:bg-[var(--accent)]/5
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}