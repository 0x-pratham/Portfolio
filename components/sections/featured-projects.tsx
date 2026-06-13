import Link from "next/link";

import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="container-custom">
        <div
  className="
    mb-16
    flex
    flex-col
    gap-8
    md:flex-row
    md:items-end
    md:justify-between
  "
>
  <div>
    <p
      className="
        mb-4
        text-sm
        uppercase
        tracking-[0.35em]
        text-accent
      "
    >
      Selected Work
    </p>

    <h2
      className="
        font-[var(--font-cormorant)]
        text-5xl
        font-light
        md:text-7xl
      "
    >
      Projects &
      Innovation
    </h2>

    <p
      className="
        mt-4
        max-w-xl
        text-muted
      "
    >
      Software products, cybersecurity
      initiatives, research projects,
      and community platforms.
    </p>
  </div>

  <Link
    href="/projects"
    className="
      text-accent
      uppercase
      tracking-[0.2em]
      transition-all
      hover:translate-x-1
    "
  >
    View All Projects →
  </Link>
</div>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.slug}
              className="
  group
  rounded-[2rem]
  border
  border-[var(--border)]
  bg-[var(--surface)]
  p-8
  transition-all
  duration-700
  hover:-translate-y-2
  hover:border-[var(--accent)]
"
            >

              <span
                className="
  mb-6
  inline-block
  text-xs
  uppercase
  tracking-[0.25em]
  text-accent
"
              >
                {project.category}
              </span>

              <h3 className="mb-4 text-3xl font-light transition-colors
duration-500
group-hover:text-[var(--accent)]">
                {project.title}
              </h3>

              <p className="mb-6 text-muted
leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mb-6">
  <p
    className="
      mb-2
      text-xs
      uppercase
      tracking-[0.25em]
      text-muted
    "
  >
    Outcome
  </p>

  <p
    className="
      text-accent
      leading-relaxed
    "
  >
    Problem
{project.problem}

Solution
{project.solution}

Impact
{project.impact}
  </p>
</div>

              <div className="mb-6">
                <p
  className="
    mono
    mb-6
    text-xs
    text-muted
  "
>
  {project.technologies.join(" · ")}
</p>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="
  relative
  inline-block
  text-accent
"
              >
                View Project <span
  className="
    transition-transform
    duration-500
    group-hover:translate-x-1
  "
>
  →
</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}