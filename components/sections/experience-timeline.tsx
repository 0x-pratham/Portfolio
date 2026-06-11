"use client";

import { motion } from "framer-motion";

import { experienceTimeline } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience Timeline
          </h2>
        </div>

        <div className="relative">
          <div
            className="
              absolute
              left-4
              top-0
              h-full
              w-px
              bg-white/10
              md:left-1/2
            "
          />

          <div className="space-y-12">
            {experienceTimeline.map(
              (item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
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
                  <div className="md:w-1/2">
                    <div
                      className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-6
                        backdrop-blur-xl
                      "
                    >
                      <span className="text-sm text-violet-400">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-1/2" />

                  <div
                    className="
                      absolute
                      left-4
                      top-8
                      h-4
                      w-4
                      rounded-full
                      bg-violet-500
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}