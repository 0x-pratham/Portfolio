"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-padding"
    >
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
            {/* Change 1 — Add Reveal on Selected Work Label, Heading, and Description */}
            <Reveal>
              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-accent
                "
              >
                Selected Work
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-light
                  md:text-7xl
                "
              >
                Projects & Innovation
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                  mt-4
                  max-w-xl
                  text-muted
                "
              >
                Software products, cybersecurity initiatives, research projects,
                and community platforms.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-accent
                uppercase
                tracking-[0.2em]
                text-sm
                transition-all
              "
            >
              View All Projects
              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            /* Change 2 & Change 3 — Alternate Card Reveal (Odd Left, Even Right) and Premium Hover scale/lift */
            <motion.article
              key={project.slug}
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
              {/* Change 4 — Editorial Project Number layout */}

              {/* Research Laboratory Dynamic Glow Backplate */}
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

              <span
                className="
                  mb-6
                  inline-block
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-accent
                "
              >
                {project.category}
              </span>

              <h3
                className="
                  mb-4
                  text-3xl
                  font-light
                  transition-colors
                  duration-500
                  group-hover:text-[var(--accent)]
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mb-6
                  text-muted
                  leading-relaxed
                "
              >
                {project.longDescription}
              </p>

              {/* Change 6 — Structured Outcome Section with separated paragraph block styles */}
              <div className="mb-6 space-y-3">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-muted
                    mb-1
                  "
                >
                  Outcome
                </p>

                <div className="text-sm space-y-3 leading-relaxed">
                  <div className="bg-[var(--surface-light)] border border-[var(--border)]/40 rounded-xl p-3">
                    <span className="text-accent font-medium block text-xs uppercase tracking-wider mb-1">Problem</span>
                    <p className="text-muted text-xs md:text-sm">{project.problem}</p>
                  </div>
                  
                  <div className="bg-[var(--surface-light)] border border-[var(--border)]/40 rounded-xl p-3">
                    <span className="text-accent font-medium block text-xs uppercase tracking-wider mb-1">Solution</span>
                    <p className="text-muted text-xs md:text-sm">{project.solution}</p>
                  </div>
                  
                  <div className="bg-[var(--surface-light)] border border-[var(--border)]/40 rounded-xl p-3">
                    <span className="text-accent font-medium block text-xs uppercase tracking-wider mb-1">Impact</span>
                    <p className="text-muted text-xs md:text-sm">{project.impact}</p>
                  </div>
                </div>
              </div>

              {/* Change 5 — Modern Technology Pills Wrapper */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-[var(--border)]
                        px-3
                        py-1
                        text-xs
                        text-[var(--warm-grey)]
                        bg-[var(--surface-light)]/50
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Change 7 — View Project Link with advanced group Arrow Nudge */}
              <Link
                href={`/projects/${project.slug}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-accent
                  text-sm
                  uppercase
                  tracking-wider
                "
              >
                View Project{" "}
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-2
                  "
                />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}