import Link from "next/link";

import { projects } from "@/data/projects";
import Image from "next/image";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="container-custom">
        <div className="mb-16">
          <p
  className="
    mb-6
    text-sm
    uppercase
    tracking-[0.35em]
    text-accent
  "
>
            Projects
          </p>

          <h2
  className="
    text-5xl
    font-light
    leading-none
    md:text-6xl
  "
>
            Featured Work
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
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

              <div
  className="
    mb-8
    overflow-hidden
    rounded-[1.5rem]
    border
    border-[var(--border)]
  "
>
  <Image
    src={project.image}
    alt={project.title}
    width={800}
    height={600}
    className="
      h-[220px]
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-[1.08]
      group-hover:brightness-105
    "
  />
</div>
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