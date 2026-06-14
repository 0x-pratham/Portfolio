export function ValuesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">

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
            What I Believe
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
            Principles That Shape
            Everything I Build.
          </h2>

        </div>

        <div
          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          "
        >

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[var(--accent)]
            "
          >
            <p className="mb-4 font-[var(--font-cormorant)] text-xl text-[var(--accent)]">
              01
            </p>

            <h3 className="mb-6 font-[var(--font-cormorant)] text-4xl font-light">
              Build Before You Wait
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              Opportunities are rarely given.
              They are created.

              From leaving my hometown to
              founding communities and companies,
              every meaningful step in my journey
              began by taking action instead of
              waiting for the perfect moment.
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[var(--accent)]
            "
          >
            <p className="mb-4 font-[var(--font-cormorant)] text-xl text-[var(--accent)]">
              02
            </p>

            <h3 className="mb-6 font-[var(--font-cormorant)] text-4xl font-light">
              Learn By Doing
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              The most valuable lessons rarely
              come from theory alone.

              Real growth happens through
              building, experimenting, failing,
              improving, and repeating the
              process until progress becomes
              inevitable.
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[var(--accent)]
            "
          >
            <p className="mb-4 font-[var(--font-cormorant)] text-xl text-[var(--accent)]">
              03
            </p>

            <h3 className="mb-6 font-[var(--font-cormorant)] text-4xl font-light">
              Communities Create Impact
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              One person can build a product.

              A community can build a movement.

              The strongest opportunities emerge
              when people learn, grow, and
              innovate together.
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[var(--accent)]
            "
          >
            <p className="mb-4 font-[var(--font-cormorant)] text-xl text-[var(--accent)]">
              04
            </p>

            <h3 className="mb-6 font-[var(--font-cormorant)] text-4xl font-light">
              Think Long-Term
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              Great companies, communities,
              and ecosystems are not built in
              months.

              They are built through years of
              consistent effort, patience,
              and vision.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}