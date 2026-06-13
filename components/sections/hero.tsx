"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/shared/magnetic";
import Link from "next/link";


export function Hero() {
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

            <h1
  className="
    mb-8
    max-w-4xl
    text-6xl
    font-light
    leading-[0.92]
    md:text-7xl
  "
>
  Prathamesh Bhil
</h1>

<p
  className="
    mb-10
    max-w-xl
    text-lg
    leading-relaxed
    text-muted
    md:text-xl
  "
>
  Founder, software engineer, and cybersecurity enthusiast
  building digital products, leading technology initiatives,
  and creating solutions that impact businesses and
  communities.
</p>

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
<div
  className="
    mt-16
    flex
    flex-wrap
    gap-8
    text-sm
    uppercase
    tracking-[0.15em]
  "
>
  <span className="text-muted">
    Software Engineering
  </span>

  <span className="text-muted">
    Cybersecurity
  </span>

  <span className="text-muted">
    Entrepreneurship
  </span>

  <span className="text-muted">
    Community Leadership
  </span>
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
            className="
              relative
              flex
              justify-center
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