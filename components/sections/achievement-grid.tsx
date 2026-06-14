"use client";

import { achievements } from "@/data/achievements";
import { motion } from "framer-motion";

export function AchievementGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="mb-20 max-w-4xl">
          {/* Improvement #9: Add Achievement Counter Context Tag */}
          <div className="flex items-center gap-3 mb-4">
            <p
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-[var(--accent)]
              "
            >
              Journey & Milestones
            </p>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-[var(--border)] text-muted">
              Career Timeline
            </span>
          </div>

          <h2
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              leading-none
              md:text-7xl
            "
          >
            Building Through Leadership & Technology.
          </h2>
        </div>

        {/* Timeline Container with Spine Line */}
        <div className="relative pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
          
          {/* Improvement #1: Timeline Spine Upgrade */}
          <div 
            className="
              absolute 
              left-0 
              top-2 
              bottom-2 
              w-[2px] 
              bg-gradient-to-b 
              from-[var(--accent)] 
              via-[var(--border)] 
              to-transparent
            " 
          />

          {achievements.map((achievement, index) => (
            /* Improvement #5: Reveal Animation & Stagger implementation */
            <motion.div
              key={`${achievement.year}-${achievement.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="
                group
                relative
                grid
                gap-6
                md:grid-cols-[120px_1fr]
              "
            >
              {/* Improvement #2: Add Timeline Dots */}
              <div 
                className="
                  absolute 
                  left-[-37px] 
                  md:left-[-53px] 
                  top-8
                  h-4 
                  w-4 
                  rounded-full 
                  border-2 
                  border-[var(--accent)] 
                  bg-[var(--bg)] 
                  z-10
                  transition-transform
                  duration-300
                  group-hover:scale-125
                " 
              />

              {/* Left Column: Year Typography */}
              {/* Improvement #4: Year Highlight Upgrade */}
              <div className="pt-6">
                <p
                  className="
                    text-3xl
                    font-light
                    font-[var(--font-cormorant)]
                    text-[var(--accent)]
                    tracking-wide
                  "
                >
                  {achievement.year}
                </p>
              </div>

              {/* Right Column: Interactive Card Block */}
              {/* Improvement #3: Card Hover Interaction Language */}
              <div
                className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                  transition-all
                  duration-500
                  hover:border-[var(--accent)]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                "
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {/* Improvement #6: Organization Badge Transformation */}
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-[var(--border)]
                      px-3
                      py-1
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[var(--accent)]
                      bg-gradient-to-r from-[var(--surface)] to-transparent
                    "
                  >
                    {achievement.organization}
                  </span>
                </div>

                <h3
                  className="
                    mb-4
                    text-3xl
                    font-light
                    font-[var(--font-cormorant)]
                    text-[var(--warm-ivory)]
                  "
                >
                  {achievement.title}
                </h3>

                <p className="text-[var(--warm-grey)] leading-relaxed text-sm md:text-base">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}