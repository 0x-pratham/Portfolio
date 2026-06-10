import Link from "next/link";

import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
              "
            >
              <span
                className="
                  mb-4
                  inline-block
                  rounded-full
                  border
                  border-violet-500/20
                  px-3
                  py-1
                  text-xs
                "
              >
                {project.category}
              </span>

              <h3 className="mb-4 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mb-6 text-slate-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      bg-white/5
                      px-3
                      py-1
                      text-xs
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                className="text-violet-400"
              >
                View Project →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}