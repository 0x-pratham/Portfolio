"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export function ResearchPreview() {
  const researchProjects = [
    {
      category: "Cognitive Science • NLP",
      title: "Cognitive Workload Assessment Using NLP",
      description:
        "Exploring sensor-free cognitive workload assessment using subjective, behavioral, and textual indicators powered by Natural Language Processing.",
    },
    {
      category: "Cybersecurity • AI",
      title: "Cosmo Cyber",
      description:
        "An indigenous cybersecurity research initiative focused on autonomous security intelligence, threat analysis, and AI-assisted defensive operations.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          {/* Change 1 — Add Reveal System for narrative progression */}
          <Reveal>
            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-[var(--accent)]
              "
            >
              Research & Innovation
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="
                font-[var(--font-cormorant)]
                text-5xl
                font-light
                leading-none
                md:text-7xl
              "
            >
              Researching
              <br />
              The Future.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-[var(--warm-grey)]
              "
            >
              My research focuses on artificial intelligence, cybersecurity, cognitive science, and autonomous
              systems, with an emphasis on solving real-world challenges through practical innovation.
            </p>
          </Reveal>
        </div>

        {/* Research Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {researchProjects.map((project, index) => (
            /* Change 2 & 3 — Animate Cards with Viewport Controls & Hover Depth styling */
            <motion.article
              key={project.title}
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
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[var(--accent)]
              "
            >
              {/* Change 4 — Research Dynamic Laboratory Glow Backplate */}
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

              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-[var(--accent)]
                "
              >
                {project.category}
              </p>

              <h3
                className="
                  mb-6
                  font-[var(--font-cormorant)]
                  text-4xl
                  font-light
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  leading-relaxed
                  text-[var(--warm-grey)]
                "
              >
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          {/* Change 5 — View All Research CTA incorporating dynamic ArrowRight micro-interaction */}
          <Link
            href="/research"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
              transition-opacity
              hover:opacity-80
            "
          >
            View All Research
            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}