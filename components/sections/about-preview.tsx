import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="section-padding">
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
            {/* First Change: About Label Animation */}
            <Reveal>
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
            <Reveal>
              <h2
                className="
                  max-w-4xl
                  text-5xl
                  font-light
                  leading-[1]
                  md:text-6xl
                "
              >
                Building software, communities, and technology ventures that
                create meaningful impact.
              </h2>
            </Reveal>

            {/* Second Change: Split Paragraph Into 3 Reveals with 100ms stagger */}
            <div className="mt-12 content-width space-y-6">
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-muted">
                  I started as a student developer driven by curiosity for
                  technology, cybersecurity, and problem solving.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg leading-relaxed text-muted">
                  Over time, that curiosity evolved into building communities,
                  educational platforms, and technology ventures that help
                  people learn, grow, and innovate.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-lg leading-relaxed text-muted">
                  Today, I lead Cosmolix Pvt Ltd, develop software products,
                  contribute to developer ecosystems through GenXCode, and
                  continue exploring the intersection of engineering,
                  innovation, and security.
                </p>
              </Reveal>
            </div>

            {/* Third & Fifth Change: Timeline Transformation & Hover Lift */}
            <div className="mt-20 relative">
              {/* Vertical Timeline Line */}
              <div
                className="
                  absolute
                  left-[11px]
                  top-0
                  bottom-0
                  w-[2px]
                  bg-gradient-to-b
                  from-[var(--accent)]
                  to-transparent
                "
              />

              {/* Timeline Item: 2024 */}
              <Reveal delay={0.2}>
                <div className="relative flex gap-6 pb-12">
                  <div
                    className="
                      h-6
                      w-6
                      rounded-full
                      border-2
                      border-[var(--accent)]
                      bg-[var(--bg)]
                      shrink-0
                    "
                  />
                  <div className="transition-all duration-300 hover:-translate-y-1">
                    <p className="text-accent font-medium">2024</p>
                    <p className="mt-2 text-muted">
                      Founded GenXCode and started building developer
                      communities.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Timeline Item: 2025 */}
              <Reveal delay={0.3}>
                <div className="relative flex gap-6 pb-12">
                  <div
                    className="
                      h-6
                      w-6
                      rounded-full
                      border-2
                      border-[var(--accent)]
                      bg-[var(--bg)]
                      shrink-0
                    "
                  />
                  <div className="transition-all duration-300 hover:-translate-y-1">
                    <p className="text-accent font-medium">2025</p>
                    <p className="mt-2 text-muted">
                      Developed educational platforms and technology
                      initiatives.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Timeline Item: 2026 */}
              <Reveal delay={0.4}>
                <div className="relative flex gap-6 pb-12">
                  <div
                    className="
                      h-6
                      w-6
                      rounded-full
                      border-2
                      border-[var(--accent)]
                      bg-[var(--bg)]
                      shrink-0
                    "
                  />
                  <div className="transition-all duration-300 hover:-translate-y-1">
                    <p className="text-accent font-medium">2026</p>
                    <p className="mt-2 text-muted">
                      Founded Cosmolix Pvt Ltd and expanded into software
                      solutions.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Timeline Item: Today */}
              <Reveal delay={0.5}>
                <div className="relative flex gap-6 pb-12">
                  <div
                    className="
                      h-6
                      w-6
                      rounded-full
                      border-2
                      border-[var(--accent)]
                      bg-[var(--bg)]
                      shrink-0
                    "
                  />
                  <div className="transition-all duration-300 hover:-translate-y-1">
                    <p className="text-accent font-medium">Today</p>
                    <p className="mt-2 text-muted">
                      Building products, businesses, and communities through
                      technology.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Fourth Change: Read Full Story Button Link with Arrow Motion */}
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