import Link from "next/link";
import { Magnetic } from "@/components/shared/magnetic";

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Main centered wrapper for the CTA content */}
        <div className="border-t border-[var(--border)] pt-24 text-center">
          
          <h2 className="mb-8 text-5xl font-light md:text-6xl">
            Let's Build Something Meaningful
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-slate-400">
            Whether you're building a product, scaling a business, or exploring new ideas, 
            I'd be happy to connect and collaborate.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap justify-center gap-6">
            
            {/* Primary Action: Internal Next.js Link */}
            <Magnetic>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--accent)] px-7 py-4 text-[var(--warm-ivory)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-black"
              >
                Contact Me
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
        </div>
      </div>
    </section>
  );
}