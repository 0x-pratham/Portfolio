import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

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
              Building software, communities,
              and technology ventures that
              create meaningful impact.
            </h2>
            </Reveal>

<Reveal delay={0.1}>
            <p
              className="
               mt-12
              content-width
              text-lg
              leading-relaxed
              text-muted
              "
            >
              I started as a student developer driven
              by curiosity for technology,
              cybersecurity, and problem solving.

              <br />
              <br />

              Over time, that curiosity evolved into
              building communities, educational
              platforms, and technology ventures
              that help people learn, grow, and
              innovate.

              <br />
              <br />

              Today, I lead Cosmolix Pvt Ltd,
              develop software products,
              contribute to developer ecosystems
              through GenXCode, and continue
              exploring the intersection of
              engineering, innovation, and
              security.
            </p>
            </Reveal>

            <Reveal delay={0.2}>
            <div
              className="
                mt-16
                grid
                gap-6
                md:grid-cols-2
              "
            >
              <div>
                <p className="text-accent">
                  2024
                </p>

                <p className="mt-2 text-muted">
                  Founded GenXCode and started
                  building developer communities.
                </p>
              </div>

              <div>
                <p className="text-accent">
                  2025
                </p>

                <p className="mt-2 text-muted">
                  Developed educational platforms
                  and technology initiatives.
                </p>
              </div>

              <div>
                <p className="text-accent">
                  2026
                </p>

                <p className="mt-2 text-muted">
                  Founded Cosmolix Pvt Ltd and
                  expanded into software solutions.
                </p>
              </div>

              <div>
                <p className="text-accent">
                  Today
                </p>

                <p className="mt-2 text-muted">
                  Building products, businesses,
                  and communities through
                  technology.
                </p>
              </div>
            </div>
            </Reveal>

            <Link
              href="/about"
              className="
                mt-12
                inline-flex
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}