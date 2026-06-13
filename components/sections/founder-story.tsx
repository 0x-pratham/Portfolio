export function FounderStory() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="max-w-5xl">

          {/* Label */}
          <p
            className="
            mb-4
            text-sm
            uppercase
            tracking-[0.35em]
            text-[var(--accent)]
            "
          >
            Founder Journey
          </p>

          {/* Heading */}
          <h2
            className="
            max-w-4xl
            font-[var(--font-cormorant)]
            text-5xl
            font-light
            leading-[1]
            md:text-7xl
            "
          >
            The Story Behind
            The Builder
          </h2>

        </div>

        {/* Story Content */}
        <div
          className="
          mt-20
          grid
          gap-16
          lg:grid-cols-[250px_1fr]
          "
        >

          {/* Left Side */}
          <div>
            <p
              className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--warm-grey)]
              "
            >
              2005 — Present
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-20">

            {/* Chapter 1 */}
            <div>
              <h3
                className="
                mb-6
                font-[var(--font-cormorant)]
                text-4xl
                font-light
                "
              >
                The Beginning
              </h3>

              <p
                className="
                text-lg
                leading-loose
                text-[var(--warm-grey)]
                "
              >
                I was born on October 17, 2005, in a
                middle-class family where education,
                discipline and hard work were deeply
                valued.

                My father, a teacher, always told me
                that I was capable of achieving
                something extraordinary. At the time,
                I didn't fully understand those words,
                but they would eventually shape the
                way I looked at life.

                I was never the student who chased
                grades. What fascinated me wasn't the
                classroom itself. It was curiosity.
              </p>
            </div>

            {/* Chapter 2 */}
            <div>
              <h3
                className="
                mb-6
                font-[var(--font-cormorant)]
                text-4xl
                font-light
                "
              >
                Leaving Home
              </h3>

              <p
                className="
                text-lg
                leading-loose
                text-[var(--warm-grey)]
                "
              >
                After completing my schooling in
                Shegaon, I made a decision that
                surprised many people around me.

                Instead of following the traditional
                academic path, I chose to pursue a
                Diploma in Computer Science and
                Engineering.

                That decision meant leaving my
                hometown and moving to Pune at a
                young age. It was uncomfortable,
                challenging and life-changing.
              </p>
            </div>

            {/* Chapter 3 */}
            <div>
              <h3
                className="
                mb-6
                font-[var(--font-cormorant)]
                text-4xl
                font-light
                "
              >
                Discovering Technology
              </h3>

              <p
                className="
                text-lg
                leading-loose
                text-[var(--warm-grey)]
                "
              >
                My curiosity gradually evolved into
                a deep fascination with cybersecurity,
                networking, software development and
                systems.

                During this period, I joined Team UCC,
                explored ethical hacking and gained
                practical exposure to the security
                world.

                I also completed my first internship
                as a Java Full Stack Developer at
                MicroSpectra Software Technologies.
              </p>
            </div>

            {/* Chapter 4 */}
            <div>
              <h3
                className="
                mb-6
                font-[var(--font-cormorant)]
                text-4xl
                font-light
                "
              >
                Building Something Bigger
              </h3>

              <p
                className="
                text-lg
                leading-loose
                text-[var(--warm-grey)]
                "
              >
                While pursuing my B.Tech in Computer
                Science and Engineering at JSPM
                University, I realized that many
                talented students lacked guidance,
                mentorship and practical industry
                exposure.

                That realization led me to establish
                the JSPM Coding Club.

                Later, alongside my childhood friend
                and business partner Dhanesh Shingade,
                I co-founded Cosmolix Pvt Ltd and
                launched GenXCode to bridge the gap
                between education and industry.
              </p>
            </div>

            {/* Final Quote */}
            <div
              className="
              border-l-2
              border-[var(--accent)]
              pl-8
              "
            >
              <p
                className="
                font-[var(--font-cormorant)]
                text-3xl
                font-light
                italic
                "
              >
                “The journey started with curiosity.
                Today, that same curiosity drives
                every company, community and product
                I build.”
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}