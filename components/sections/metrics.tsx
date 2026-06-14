"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
  {
    value: 500,
    suffix: "+",
    label: "Students Reached",
    context: "Community Impact",
    description: "Through communities, workshops, and mentorship initiatives.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects Built",
    context: "Engineering Output",
    description: "Software, cybersecurity, and technology-focused solutions.",
  },
  {
    value: 2,
    suffix: "+",
    label: "Research Initiatives",
    context: "Academic Focus",
    description: "Focused on cybersecurity, AI, and emerging technologies.",
  },
  {
    value: 1,
    suffix: "",
    label: "Founder & CEO",
    context: "Cosmolix Pvt Ltd",
    description: "Technology Venture",
  },
];

// Reusable Count-Up Component targeting Viewport Entry
function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.floor(latest));
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return roundedValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toString() + suffix;
      }
    });
  }, [roundedValue, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export function Metrics() {
  return (
    // Improvement #9: Premium Hero-to-Metrics Top Border Section Divider
    <section className="section-padding border-t border-[var(--border)] relative z-10">
      <div className="container-custom">
        
        {/* Improvement #2: Premium Reveal Stagger Animation Header Mapping */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.35em]
              text-[var(--accent)]
            "
          >
            Impact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              leading-none
              md:text-7xl
            "
          >
            Building Through Technology.
          </motion.h2>
        </div>

        {/* Metrics Grid */}
        <div
          className="
            grid
            gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {metrics.map((metric, index) => {
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-gradient-to-b from-[var(--surface)] to-transparent
                  backdrop-blur-sm
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                "
              >
                {/* Improvement #4: Premium Accent Line Top Border interaction hook */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-[var(--accent)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Improvement #7: Tiny context tag label above metric values */}
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2">
                  {metric.context}
                </span>

                {/* Improvement #1 & #5: Active Number Tracking with Hover Color Shifting */}
                <h3
                  className="
                    font-[var(--font-cormorant)]
                    text-6xl
                    font-light
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                    md:text-7xl
                  "
                >
                  <CountUpNumber value={metric.value} suffix={metric.suffix} />
                </h3>

                {/* Improvement #6: Luxury spacing using mt-6 margins */}
                <h4
                  className="
                    mt-6
                    text-lg
                    font-medium
                    text-[var(--warm-ivory)]
                  "
                >
                  {metric.label}
                </h4>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-[var(--warm-grey)]
                  "
                >
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}