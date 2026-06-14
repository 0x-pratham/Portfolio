import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="py-32">
        <div className="container-custom">

          <Reveal>
            <p className="mb-4 text-[var(--accent)] uppercase tracking-[0.35em]">
              Projects & Initiatives
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-8 font-[var(--font-cormorant)] text-7xl font-light">
              Building Solutions<br />
              That Create Impact.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-3xl text-xl text-[var(--warm-grey)]">
              A collection of projects spanning cybersecurity,
              education technology, artificial intelligence,
              agriculture, and entrepreneurship.
            </p>
          </Reveal>

          {/* Authority Stats Strip Banner */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-12 border-t border-[var(--border)] pt-8">
              <div>
                <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--accent)]">10+</p>
                <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Projects</p>
              </div>
              <div>
                <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--accent)]">5+</p>
                <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Domains</p>
              </div>
              <div>
                <p className="font-[var(--font-cormorant)] text-4xl font-light text-[var(--accent)]">2022+</p>
                <p className="text-xs uppercase tracking-wider text-[var(--warm-grey)] mt-1">Years Building</p>
              </div>
            </div>
          </Reveal>

          {/* Stagger Sequence Grid Container */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    group
                    relative
                    block
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[var(--accent)]
                    hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
                  "
                >
                  {/* Top Accent Line Expansion Animation */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-0
                      bg-[var(--accent)]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* Upgraded Premium Category Chip */}
                  <div className="mb-4 flex">
                    <span className="rounded-full bg-[var(--surface)] border border-[var(--border)] px-3 py-1 text-xs text-[var(--accent)]">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="mb-4 text-3xl font-light transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {project.title}
                  </h2>

                  <p className="text-[var(--warm-grey)] leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Micro-interactive Project Card CTA Action */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[var(--accent)]
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      group-hover:translate-y-0
                    "
                  >
                    <span>View Case Study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}