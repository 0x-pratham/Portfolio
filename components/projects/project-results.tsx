import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export function ProjectResults({
  project,
}: Props) {
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="mb-8 text-3xl font-bold">
          Results
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {project.results.map((result) => (
            <div
              key={result}
              className="
                rounded-3xl
                border
                border-white/10
                p-6
              "
            >
              {result}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}