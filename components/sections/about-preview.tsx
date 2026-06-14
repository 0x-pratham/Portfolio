"use client";

import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function AboutPreview() {
  return (
    // Improvement #8: Section Divider
    <section className="section-padding border-t border-[var(--border)]">
      <div className="container-custom">
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[220px_1fr]
          "
        >
          {/* LEFT */}
          <div>
            {/* About Label: Configured to slide in from left per audit specification */}
            <Reveal direction="left">
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-accent
                "
              >
                About
              </p>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div>
            {/* Main Heading: Set to directional up reveal */}
            <Reveal direction="up">
              <h2
                className="
                  max-w-4xl
                  text-5xl
                  font-light
                  leading-[1]
                  md:text-7xl
                "
              >
                Building software, communities, and technology ventures that
                create meaningful impact.
              </h2>
            </Reveal>

            {/* Paragraphs: Configured with direction="up" and 100ms sequential stagger offsets */}
            {/* Improvement #9: Changed space-y-6 to space-y-8 */}
            <div className="mt-12 content-width space-y-8">
              <Reveal direction="up" delay={0.1}>
                <p className="text-lg leading-relaxed text-muted">
                  I started as a student developer driven by curiosity for
                  technology, cybersecurity, and problem solving.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="text-lg leading-relaxed text-muted">
                  Over time, that curiosity evolved into building communities,
                  educational platforms, and technology ventures that help
                  people learn, grow, and innovate.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="text-lg leading-relaxed text-muted">
                  Today, I lead Cosmolix Pvt Ltd, develop software products,
                  contribute to developer ecosystems through GenXCode, and
                  continue exploring the intersection of engineering,
                  innovation, and security.
                </p>
              </Reveal>
            </div>

            {/* Improvement #6: Missing Founder Identity Layer */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl border-t border-b border-[var(--border)] py-6">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm font-medium text-[var(--warm-ivory)]">Founder of Cosmolix Pvt Ltd</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm font-medium text-[var(--warm-ivory)]">Founder of GenXCode</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm font-medium text-[var(--warm-ivory)]">Cybersecurity Researcher</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm font-medium text-[var(--warm-ivory)]">Technology Leadership</span>
              </div>
            </div>

            {/* Timeline Area */}
            <div className="mt-20 relative">
              {/* Timeline line draw animation precisely following the strict audit parameters */}
              {/* Improvement #4: Timeline Line Stops Too Early */}
              <motion.div
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-[23px]
                  top-0
                  bottom-0
                  w-[2px]
                  origin-top
                  bg-gradient-to-b
                  from-[var(--accent)]
                  via-[var(--accent)]
                  to-[var(--border)]
                "
              />

              {/* Timeline Item: 2024 */}
              {/* Improvement #7: Timeline Cards Wrapper Added */}
              <div className="group/timeline relative flex gap-6 pb-8 rounded-2xl border border-transparent p-3 hover:border-[var(--border)] transition-all duration-300">
                {/* Improvement #3: Timeline Dots Need Life (group-hover:scale-110) */}
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
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.2,
                  }}
                  className="
                    h-6
                    w-6
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                    shrink-0
                    z-10
                    mt-1
                    transition-transform
                    duration-300
                    group-hover/timeline:scale-110
                  "
                />
                {/* Timeline content fade from left with staggered delay */}
                {/* Improvement #2: Timeline Content Needs Better Hover State */}
                <Reveal direction="left" delay={0.2}>
                  <div className="transition-all duration-300 group-hover/timeline:translate-x-1 group-hover/timeline:text-[var(--warm-ivory)]">
                    <p className="text-accent font-medium">2024</p>
                    <p className="mt-2 text-muted">
                      Founded GenXCode and started building developer
                      communities.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Timeline Item: 2025 */}
              {/* Improvement #7: Timeline Cards Wrapper Added */}
              <div className="group/timeline relative flex gap-6 pb-8 rounded-2xl border border-transparent p-3 hover:border-[var(--border)] transition-all duration-300">
                {/* Improvement #3: Timeline Dots Need Life (group-hover:scale-110) */}
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
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.3,
                  }}
                  className="
                    h-6
                    w-6
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                    shrink-0
                    z-10
                    mt-1
                    transition-transform
                    duration-300
                    group-hover/timeline:scale-110
                  "
                />
                {/* Timeline content fade from left with staggered delay */}
                {/* Improvement #2: Timeline Content Needs Better Hover State */}
                <Reveal direction="left" delay={0.3}>
                  <div className="transition-all duration-300 group-hover/timeline:translate-x-1 group-hover/timeline:text-[var(--warm-ivory)]">
                    <p className="text-accent font-medium">2025</p>
                    <p className="mt-2 text-muted">
                      Developed educational platforms and technology
                      initiatives.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Timeline Item: 2026 */}
              {/* Improvement #7: Timeline Cards Wrapper Added */}
              <div className="group/timeline relative flex gap-6 pb-8 rounded-2xl border border-transparent p-3 hover:border-[var(--border)] transition-all duration-300">
                {/* Improvement #3: Timeline Dots Need Life (group-hover:scale-110) */}
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
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.4,
                  }}
                  className="
                    h-6
                    w-6
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                    shrink-0
                    z-10
                    mt-1
                    transition-transform
                    duration-300
                    group-hover/timeline:scale-110
                  "
                />
                {/* Timeline content fade from left with staggered delay */}
                {/* Improvement #2: Timeline Content Needs Better Hover State */}
                <Reveal direction="left" delay={0.4}>
                  <div className="transition-all duration-300 group-hover/timeline:translate-x-1 group-hover/timeline:text-[var(--warm-ivory)]">
                    <p className="text-accent font-medium">2026</p>
                    <p className="mt-2 text-muted">
                      Founded Cosmolix Pvt Ltd and expanded into software
                      solutions.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Timeline Item: Today */}
              {/* Improvement #7: Timeline Cards Wrapper Added */}
              <div className="group/timeline relative flex gap-6 pb-8 rounded-2xl border border-transparent p-3 hover:border-[var(--border)] transition-all duration-300">
                {/* Improvement #3: Timeline Dots Need Life (group-hover:scale-110) */}
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
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.5,
                  }}
                  className="
                    h-6
                    w-6
                    rounded-full
                    border-2
                    border-[var(--accent)]
                    bg-[var(--bg)]
                    shrink-0
                    z-10
                    mt-1
                    transition-transform
                    duration-300
                    group-hover/timeline:scale-110
                  "
                />
                {/* Timeline content fade from left with staggered delay */}
                {/* Improvement #2: Timeline Content Needs Better Hover State */}
                <Reveal direction="left" delay={0.5}>
                  <div className="transition-all duration-300 group-hover/timeline:translate-x-1 group-hover/timeline:text-[var(--warm-ivory)]">
                    <p className="text-accent font-medium">Today</p>
                    <p className="mt-2 text-muted">
                      Building products, businesses, and communities through
                      technology.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Improvement #10: Senior-Level Upgrade Quote Block */}
            <div className="mt-16 border-l-2 border-[var(--accent)] pl-8 italic max-w-2xl">
              <p className="text-lg leading-relaxed text-muted">
                "The goal isn't simply to build software. It's to create opportunities, systems, and communities that outlast the builder."
              </p>
            </div>

            {/* Read Full Story Button with Upgraded Translation and Shadow Dynamics */}
            {/* Improvement #5: Premium Hover Shadow Glow Custom Variable Injection */}
            <Link
              href="/about"
              className="
                group
                mt-12
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                px-6
                py-3
                text-[var(--warm-ivory)]
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(139,92,246,0.08)]
              "
            >
              Read Full Story
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
      </div>
    </section>
  );
}