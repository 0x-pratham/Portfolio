export function AboutHero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container-custom">
        <div className="max-w-5xl">

          <p
            className="
            mb-6
            text-sm
            uppercase
            tracking-[0.35em]
            text-[var(--accent)]
            "
          >
            About Prathamesh Bhil
          </p>

          <h1
            className="
            max-w-5xl
            font-[var(--font-cormorant)]
            text-6xl
            font-light
            leading-[0.95]
            md:text-8xl
            "
          >
            A Curious Student
            Who Chose to Build
            Instead of Follow.
          </h1>

          <p
            className="
            mt-12
            max-w-3xl
            text-xl
            leading-relaxed
            text-[var(--warm-grey)]
            "
          >
            I'm Prathamesh Bhil, Founder & CEO of Cosmolix Pvt Ltd and Founder of GenXCode.

            My journey began in a small town where curiosity mattered more than grades. While others followed conventional paths, I was fascinated by computers, cybersecurity and the idea of creating something meaningful.

            Today, I build technology products, lead communities and create opportunities for aspiring developers, entrepreneurs and innovators while working toward a vision much larger than myself.
          </p>
          <div
  className="
  mt-16
  grid
  max-w-4xl
  gap-8
  border-t
  border-[var(--border)]
  pt-12
  md:grid-cols-4
  "
>

  <div>
    <p className="text-3xl text-[var(--accent)]">
      2025
    </p>

    <p className="mt-2 text-sm text-[var(--warm-grey)]">
      Founded Cosmolix
    </p>
  </div>

  <div>
    <p className="text-3xl text-[var(--accent)]">
      2024
    </p>

    <p className="mt-2 text-sm text-[var(--warm-grey)]">
      Founded JSPM Coding Club
    </p>
  </div>

  <div>
    <p className="text-3xl text-[var(--accent)]">
      1+
    </p>

    <p className="mt-2 text-sm text-[var(--warm-grey)]">
      Technology Community
    </p>
  </div>

  <div>
    <p className="text-3xl text-[var(--accent)]">
      ∞
    </p>

    <p className="mt-2 text-sm text-[var(--warm-grey)]">
      Ambition
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}