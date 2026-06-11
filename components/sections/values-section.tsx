const values = [
  "Innovation",
  "Leadership",
  "Integrity",
  "Continuous Learning",
  "Community",
  "Excellence",
];

export function ValuesSection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <h2 className="mb-12 text-4xl font-bold">
          Core Values
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value}
              className="
                rounded-2xl
                border
                border-white/10
                p-6
              "
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}