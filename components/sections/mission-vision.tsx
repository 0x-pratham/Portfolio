export function MissionVision() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              p-8
            "
          >
            <h3 className="mb-4 text-3xl font-bold">
              Mission
            </h3>

            <p className="text-slate-400">
              Build meaningful software solutions
              that create value and impact.
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              p-8
            "
          >
            <h3 className="mb-4 text-3xl font-bold">
              Vision
            </h3>

            <p className="text-slate-400">
              Empower innovation through technology,
              leadership and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}