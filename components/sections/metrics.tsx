export function Metrics() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div
          className="
            grid
            gap-8
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            p-10
            md:grid-cols-4
          "
        >
          <div>
            <h3 className="text-5xl font-bold">
              20+
            </h3>

            <p className="text-slate-400">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              5+
            </h3>

            <p className="text-slate-400">
              Research Papers
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              100+
            </h3>

            <p className="text-slate-400">
              Community Members
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              10+
            </h3>

            <p className="text-slate-400">
              Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}