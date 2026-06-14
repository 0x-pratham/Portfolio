"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Magnetic } from "@/components/shared/magnetic";
import Link from "next/link";
import { useState, useEffect } from "react";

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headlineWord = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const roles = [
  "building products",
  "solving security problems",
  "growing communities",
  "exploring research",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-center
        pt-32
        pb-24
      "
    >
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.08), transparent 50%)"
        }}
      />

      <div className="container-custom relative z-10 w-full">
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <p
              className="
                mb-10
                text-sm
                uppercase
                tracking-[0.45em]
                text-accent
              "
            >
              Founder · Engineer · Builder
            </p>

            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="show"
              className="
                mb-12
                max-w-4xl
                text-6xl
                font-light
                leading-[1.1]
                md:text-8xl
              "
            >
              {"Hi, I'm Prathamesh.".split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={headlineWord}
                  className="mr-4 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <div
              className="
                mb-10
                max-w-xl
                text-lg
                leading-relaxed
                text-muted
                md:text-xl
              "
            >
              <span>Founder and software engineer exploring solutions through </span>
              <span className="inline-grid [grid-template-columns:1fr] relative vertical-align-middle overflow-hidden text-[var(--accent)] font-medium">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{
                      y: 16,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -16,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="[grid-area:1/1] inline-block underline decoration-1 underline-offset-4"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              {" "}
              <span>
                Building digital products, leading technology initiatives, and creating
                solutions that impact businesses and communities.
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-4
                flex-wrap
              "
            >
              <Magnetic>
                <Link
                  href="/projects"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--accent)]
                    px-7
                    py-4
                    text-[var(--warm-ivory)]
                    transition-all
                    duration-300
                    hover:bg-[var(--accent)]
                    hover:text-black
                  "
                >
                  View Projects
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>

              <Magnetic>
                <Link
                  href="https://www.cosmolix.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    min-h-[56px]
                    px-7
                    py-4
                    text-[var(--warm-ivory)]
                    transition-all
                    duration-300
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                  "
                >
                  Explore Cosmolix
                </Link>
              </Magnetic>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-widest text-muted">
              <span className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-[8px]">●</span> Founder of Cosmolix
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-[8px]">●</span> Founder of GenXCode
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-[8px]">●</span> Cybersecurity Researcher
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--accent)] text-[8px]">●</span> Community Builder
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "inset(0 100% 0 0)",
            }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0% 0 0)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              y: imageY,
            }}
            whileHover={{
              y: -4,
              scale: 1.01,
            }}
            className="
              relative
              flex
              justify-center
              will-change-transform
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-6
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                transition-all
                duration-500
                hover:border-[var(--accent)]
              "
            >
              {/* Ambient Backdrop Glow Behind the PNG */}
              <div 
                className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  background: "radial-gradient(circle at 50% 55%, rgba(139,92,246,0.2), transparent 60%)"
                }}
              />

              {/* Minimal Engineering Matrix Grid Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px"
                }}
              />

              {/* FIX: Mask Container with Blur to smoothly transition the image's bottom boundary */}
              <div className="relative z-10 [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                <Image
                  src="/images/prathamesh-hero.png"
                  alt="Prathamesh Bhil Founder and CEO"
                  width={420}
                  height={520}
                  priority
                  className="relative object-contain"
                />
                
                {/* Backdrop blur element positioning at the bottom edge cut-off area */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent backdrop-blur-[2px] pointer-events-none" />
              </div>

              {/* Floating Minimal Tech Badge */}
              <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 rounded-full border border-[var(--border)]/80 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-widest text-[var(--warm-grey)] font-mono shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                @prathamesh - Cyb. Prof
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted font-mono">Scroll to Explore</span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-muted"
        >
          <ChevronDown size={18} />
        </motion.div>
      </div>
    </section>
  );
}