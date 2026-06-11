import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export function ProjectTechStack({
  project,
}: Props) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="mb-8 text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}