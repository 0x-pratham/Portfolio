import { achievements } from "@/data/achievements";

export function AchievementGrid() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-violet-400">
            Highlights
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Key Achievements
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <h3 className="mb-4 text-2xl font-bold">
                {achievement.title}
              </h3>

              <p className="text-slate-400">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}