import Link from "next/link";
import { Magnetic } from "@/components/shared/magnetic";
import { Reveal } from "@/components/shared/reveal";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Premium CTA Background & Absolute Glow Effects */}
        <div
          className="
            relative
            overflow-hidden
            border-t
            border-[var(--border)]
            pt-24
            text-center
          "
        >
          <div
            className="
              absolute
              inset-0
              opacity-30
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle at center, rgba(139,92,246,0.12), transparent 70%)",
            }}
          />

          {/* Sequential Animation Overrides for Content Segments */}
          <Reveal>
            <h2 className="mb-8 text-5xl font-light md:text-6xl relative z-10">
              Let's Build Something Meaningful
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mb-12 max-w-2xl text-[var(--warm-grey)] relative z-10">
              Whether you're building a product, scaling a business, or exploring new ideas, 
              I'd be happy to connect and collaborate.
            </p>
          </Reveal>

          {/* Buttons Group */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
              
              {/* Primary Action: Internal Next.js Link with Arrow Right Interactives */}
              <Magnetic>
                <Link
                  href="/contact"
                  className="
                    group 
                    inline-flex 
                    items-center 
                    justify-center
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
                  <span className="inline-block">Contact Me</span>
                  {/* Micro-interactive Arrow Translation */}
                  <ArrowRight 
                    size={16} 
                    className="
                      shrink-0
                      transition-transform 
                      duration-300 
                      group-hover:translate-x-1
                    " 
                  />
                </Link>
              </Magnetic>
              
              {/* Secondary Action: External Anchor Link */}
              <Magnetic>
                <a
                  href="https://cosmolix.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--border)] px-6 py-4 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Visit Cosmolix
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}