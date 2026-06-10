"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { AuroraBackground } from "@/components/shared/aurora-background";
import { FloatingBadge } from "@/components/shared/floating-badge";

export function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
      "
    >
      <AuroraBackground />

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
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
            <div
              className="
                mb-6
                inline-flex
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-slate-300
                backdrop-blur-lg
              "
            >
              Founder & CEO at Cosmolix Pvt Ltd
            </div>

            <h1
              className="
                mb-6
                text-5xl
                font-bold
                leading-tight
                md:text-7xl
              "
            >
              Prathamesh
              <span className="gradient-text">
                {" "}
                Bhil
              </span>
            </h1>

            <p
              className="
                mb-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-400
                md:text-xl
              "
            >
              Building Software, Security &
              Innovation through modern
              technologies, entrepreneurship,
              and community leadership.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-4
                  font-medium
                  text-black
                  transition
                  hover:scale-[1.03]
                "
              >
                View Projects
                <ArrowRight size={18} />
              </button>

              <button
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-4
                  backdrop-blur-xl
                  transition
                  hover:border-white/20
                "
              >
                Explore Cosmolix
              </button>
            </div>

            <div
              className="
                mt-14
                grid
                grid-cols-2
                gap-8
                md:grid-cols-4
              "
            >
              <div>
                <p className="text-3xl font-bold">
                  20+
                </p>
                <p className="text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  10+
                </p>
                <p className="text-slate-400">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  5+
                </p>
                <p className="text-slate-400">
                  Research
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">
                  100+
                </p>
                <p className="text-slate-400">
                  Community
                </p>
              </div>
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
            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500/30
                  to-cyan-500/30
                  blur-3xl
                "
              />

              <Image
                src="/images/prathamesh-hero.png"
                alt="Prathamesh Bhil Founder and CEO"
                width={500}
                height={600}
                priority
                className="
                  relative
                  z-10
                  object-contain
                "
              />

              <div className="absolute left-[-40px] top-[20%]">
                <FloatingBadge title="Founder" />
              </div>

              <div className="absolute right-[-30px] top-[5%]">
                <FloatingBadge title="CEO" />
              </div>

              <div className="absolute left-[-30px] bottom-[25%]">
                <FloatingBadge title="Cybersecurity" />
              </div>

              <div className="absolute right-[-30px] bottom-[15%]">
                <FloatingBadge title="Cosmolix Pvt Ltd" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}