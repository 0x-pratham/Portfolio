"use client";

import { Reveal } from "../shared/reveal";

export function AboutHero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container-custom">
        <div className="max-w-5xl">

          <Reveal>
            <p
              className="
              mb-6
              text-sm
              uppercase
              tracking-[0.35em]
              text-[var(--accent)]
              "
            >
              About Prathamesh Bhil
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="
              max-w-5xl
              font-[var(--font-cormorant)]
              text-6xl
              font-light
              leading-[0.95]
              md:text-8xl
              "
            >
              A Curious Student Who Chose to Build Instead of Follow.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="
              mt-12
              max-w-3xl
              text-xl
              leading-relaxed
              text-[var(--warm-grey)]
              "
            >
              I'm Prathamesh Bhil, Founder & CEO of Cosmolix Pvt Ltd and Founder of GenXCode.
              <br /><br />
              My journey began in a small town where curiosity mattered more than grades. While others followed conventional paths, I was fascinated by computers, cybersecurity and the idea of creating something meaningful.
              <br /><br />
              Today, I build technology products, lead communities and create opportunities for aspiring developers, entrepreneurs and innovators while working toward a vision much larger than myself.
            </p>
          </Reveal>

          <div
            className="
            mt-16
            grid
            max-w-4xl
            gap-8
            border-t
            border-[var(--border)]
            pt-12
            md:grid-cols-4
            "
          >
            <Reveal delay={0.3}>
              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl text-[var(--accent)]">2025</p>
                <p className="mt-2 text-sm text-[var(--warm-grey)]">Founded Cosmolix</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl text-[var(--accent)]">2024</p>
                <p className="mt-2 text-sm text-[var(--warm-grey)]">Founded JSPM Coding Club</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl text-[var(--accent)]">1+</p>
                <p className="mt-2 text-sm text-[var(--warm-grey)]">Technology Community</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="transition-all duration-300 hover:-translate-y-1">
                <p className="text-3xl text-[var(--accent)]">∞</p>
                <p className="mt-2 text-sm text-[var(--warm-grey)]">Ambition</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}