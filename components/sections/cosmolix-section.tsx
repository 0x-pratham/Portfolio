export function CosmolixSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        {/* Header */}

        <div className="max-w-4xl">
          <p
            className="
            mb-4
            text-sm
            uppercase
            tracking-[0.35em]
            text-[var(--accent)]
            "
          >
            Cosmolix
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
            Why Cosmolix Exists.
          </h2>
        </div>

        {/* Content */}

        <div
          className="
          mt-20
          grid
          gap-16
          lg:grid-cols-[1fr_350px]
          "
        >

          {/* Story */}

          <div>

            <p
              className="
              text-lg
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              Cosmolix was never created with the
              intention of becoming just another
              software company.

              It was born from a belief that
              technology should create
              opportunities.

              Throughout my journey, I witnessed
              talented individuals struggle because
              they lacked guidance, industry
              exposure, and access to meaningful
              opportunities.

              I realized that technology alone was
              not enough.

              What people truly needed was an
              ecosystem that combined learning,
              innovation, entrepreneurship, and
              execution.
            </p>

            <p
              className="
              mt-10
              text-lg
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              Cosmolix became the foundation for
              building that ecosystem.

              Through software solutions,
              communities, educational initiatives,
              and future ventures, the goal is to
              create lasting impact while helping
              individuals and businesses unlock
              their full potential.
            </p>

            <p
              className="
              mt-10
              text-lg
              leading-loose
              text-[var(--warm-grey)]
              "
            >
              Today, Cosmolix powers initiatives
              like GenXCode and serves as the first
              chapter in a much larger vision that
              continues to evolve every day.
            </p>

          </div>

          {/* Principles Card */}

          <div
            className="
            h-fit
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-8
            "
          >

            <p
              className="
              mb-8
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              "
            >
              Core Principles
            </p>

            <div className="space-y-8">

              <div>
                <h3 className="mb-2 text-xl">
                  Innovation
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Creating solutions that move
                  industries forward.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl">
                  Entrepreneurship
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Encouraging builders to create
                  opportunities instead of waiting
                  for them.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl">
                  Community
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Empowering people through
                  collaboration and shared growth.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl">
                  Impact
                </h3>

                <p className="text-[var(--warm-grey)]">
                  Building things that create real
                  value for people and businesses.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}