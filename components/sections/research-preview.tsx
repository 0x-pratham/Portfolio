import Link from "next/link";

export function ResearchPreview() {
  const researchProjects = [
    {
      category: "Cognitive Science • NLP",
      title: "Cognitive Workload Assessment Using NLP",
      description:
        "Exploring sensor-free cognitive workload assessment using subjective, behavioral, and textual indicators powered by Natural Language Processing.",
    },
    {
      category: "Cybersecurity • AI",
      title: "Cosmo Cyber",
      description:
        "An indigenous cybersecurity research initiative focused on autonomous security intelligence, threat analysis, and AI-assisted defensive operations.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.35em]
              text-[var(--accent)]
            "
          >
            Research & Innovation
          </p>

          <h2
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              leading-none
              md:text-7xl
            "
          >
            Researching
            <br />
            The Future.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-[var(--warm-grey)]
            "
          >
            My research focuses on artificial intelligence, cybersecurity, cognitive science, and autonomous
            systems, with an emphasis on solving real-world challenges through practical innovation.
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {researchProjects.map((project) => (
            <article
              key={project.title}
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-8
              "
            >
              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-[var(--accent)]
                "
              >
                {project.category}
              </p>

              <h3
                className="
                  mb-6
                  font-[var(--font-cormorant)]
                  text-4xl
                  font-light
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  leading-relaxed
                  text-[var(--warm-grey)]
                "
              >
                {project.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/research"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
              transition-opacity
              hover:opacity-80
            "
          >
            View All Research →
          </Link>
        </div>
      </div>
    </section>
  );
}