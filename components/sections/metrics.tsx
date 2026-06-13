const metrics = [
  {
    value: "500+",
    label: "Students Reached",
    description:
      "Through communities, workshops, and mentorship initiatives.",
  },

  {
    value: "20+",
    label: "Projects Built",
    description:
      "Software, cybersecurity, and technology-focused solutions.",
  },

  {
    value: "2+",
    label: "Research Initiatives",
    description:
      "Focused on cybersecurity, AI, and emerging technologies.",
  },

  {
    value: "1",
    label: "Technology Company",
    description:
      "Founder & CEO of Cosmolix Pvt Ltd.",
  },
];

export function Metrics() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Heading */}

        <div className="mb-16 max-w-3xl">
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.35em]
              text-[var(--accent)]
            "
          >
            Impact
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
            Building Through
            Technology.
          </h2>
        </div>

        {/* Metrics Grid */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <h3
                className="
                  font-[var(--font-cormorant)]
                  text-6xl
                  font-light
                "
              >
                {metric.value}
              </h3>

              <h4
                className="
                  mt-4
                  text-lg
                  font-medium
                "
              >
                {metric.label}
              </h4>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-[var(--warm-grey)]
                "
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}