"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  "Software Engineering",
  "Cybersecurity",
  "Entrepreneurship",
  "Community Leadership",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Portrait Parallax logic
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        pt-32
        pb-24
      "
    >
      <div className="container-custom relative z-10">
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
                mb-8
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
                mb-8
                max-w-4xl
                text-6xl
                font-light
                leading-[0.92]
                md:text-7xl
              "
            >
              {"Prathamesh Bhil".split(" ").map((word) => (
                <motion.span
                  key={word}
                  variants={headlineWord}
                  className="mr-4 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Humanized UI/UX Shift: Roles integrated organically inside the main copy */}
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

            {/* Action Buttons: View Projects & Explore Cosmolix */}
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
                  <ArrowRight size={18} />
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
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            style={{
              y: imageY,
            }}
            whileHover={{
              rotateY: 4,
              rotateX: -4,
              scale: 1.03,
            }}
            className="
              relative
              flex
              justify-center
              will-change-transform
              cursor-pointer
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
              "
            >
              <Image
                src="/images/prathamesh-hero.png"
                alt="Prathamesh Bhil Founder and CEO"
                width={420}
                height={520}
                priority
                className="
                  relative
                  z-10
                  object-contain
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}