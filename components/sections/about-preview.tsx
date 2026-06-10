import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            About
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Building technology,
            communities, and businesses
            that create impact.
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            I'm Prathamesh Bhil, Founder & CEO
            of Cosmolix Pvt Ltd. My journey spans
            software engineering, cybersecurity,
            entrepreneurship, research, and
            technology leadership.
          </p>

          <Link
            href="/about"
            className="
              inline-flex
              rounded-full
              border
              border-white/10
              px-6
              py-3
              transition
              hover:border-violet-500/50
            "
          >
            Read Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}