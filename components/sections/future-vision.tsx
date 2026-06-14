export function FutureVision() {
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
            The Road Ahead
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
            The Future
            I'm Building.
          </h2>

        </div>

        {/* Main Content */}

        <div
          className="
          mt-16
          max-w-4xl
          "
        >

          <p
            className="
            text-xl
            leading-loose
            text-[var(--warm-grey)]
            "
          >
            Every project, community, and company
            I build today is part of a much larger
            vision.

            My goal is not simply to create software.

            My goal is to create opportunities,
            empower innovators, encourage
            entrepreneurship, and build systems
            that generate long-term impact.
          </p>

          <p
            className="
            mt-10
            text-xl
            leading-loose
            text-[var(--warm-grey)]
            "
          >
            Through Cosmolix, GenXCode, and future
            ventures, I aim to contribute to an
            ecosystem where technology, education,
            research, and innovation work together
            to solve meaningful problems.
          </p>

        </div>

        {/* Future Vision Cards */}

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
            group
            transition-all
            duration-300
            hover:-translate-y-2
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            "
          >
            <h3
              className="
              mb-6
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              group-hover:text-[var(--accent)]
              "
            >
              Technology
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              Building software products,
              platforms, and digital solutions
              that create real value for people
              and businesses.
            </p>
          </div>

          <div
            className="
            group
            transition-all
            duration-300
            hover:-translate-y-2
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            "
          >
            <h3
              className="
              mb-6
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              group-hover:text-[var(--accent)]
              "
            >
              Communities
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              Expanding GenXCode into a larger
              ecosystem that empowers students,
              developers, creators, and future
              entrepreneurs.
            </p>
          </div>

          <div
            className="
            group
            transition-all
            duration-300
            hover:-translate-y-2
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            "
          >
            <h3
              className="
              mb-6
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              group-hover:text-[var(--accent)]
              "
            >
              Innovation
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              Exploring emerging technologies,
              cybersecurity, AI, automation,
              and future-oriented solutions that
              can shape industries.
            </p>
          </div>

          <div
            className="
            group
            transition-all
            duration-300
            hover:-translate-y-2
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-10
            "
          >
            <h3
              className="
              mb-6
              font-[var(--font-cormorant)]
              text-4xl
              font-light
              group-hover:text-[var(--accent)]
              "
            >
              Cosmo Group
            </h3>

            <p className="leading-loose text-[var(--warm-grey)]">
              The long-term vision is to build
              a globally recognized ecosystem of
              companies operating across multiple
              sectors while creating meaningful
              impact at scale.
            </p>
          </div>

        </div>

        {/* Closing Quote */}

        <div
          className="
          mt-24
          border-l-2
          border-[var(--accent)]
          pl-8
          opacity-90
          hover:opacity-100
          transition-opacity
          "
        >
          <p
            className="
            max-w-4xl
            font-[var(--font-cormorant)]
            text-3xl
            font-light
            italic
            leading-relaxed
            "
          >
            “I don't believe success is built by
            following existing paths.

            I believe it is built by creating new
            ones and helping others walk them.”
          </p>
        </div>

      </div>
    </section>
  );
}