export function MissionVision() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* Section Header */}

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
            Purpose & Direction
          </p>

          <h2
            className="
            font-[var(--font-cormorant)]
            text-5xl
            font-light
            leading-[1]
            md:text-7xl
            "
          >
            Building More Than
            Companies.
          </h2>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          gap-8
          lg:grid-cols-2
          "
        >

          {/* Mission */}

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            "
          >
            <p
              className="
              mb-6
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              "
            >
              Mission
            </p>

            <h3
              className="
              mb-8
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              "
            >
              Bridging Education
              and Industry.
            </h3>

            <p
              className="
              text-lg
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              My mission is to reduce the gap
              between academic learning and
              real-world industry expectations.

              Through technology, communities,
              mentorship and entrepreneurship,
              I aim to create opportunities that
              empower students, developers and
              future innovators to build meaningful
              careers and businesses.
            </p>
          </div>

          {/* Vision */}

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            "
          >
            <p
              className="
              mb-6
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              "
            >
              Vision
            </p>

            <h3
              className="
              mb-8
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              "
            >
              Creating an Ecosystem
              of Innovation.
            </h3>

            <p
              className="
              text-lg
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              My long-term vision is to build a
              globally recognized ecosystem of
              businesses, communities and
              technology initiatives that drive
              innovation across multiple sectors.

              Through Cosmolix and future ventures,
              I aspire to create lasting impact,
              foster entrepreneurship and build
              opportunities that extend far beyond
              technology itself.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}