import { achievements } from "@/data/achievements";

export function AchievementGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">

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
            Journey & Milestones
          </p>

          <h2
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-light
              leading-none
              md:text-7xl
            "
          >
            Building Through
            Leadership &
            Technology.
          </h2>

        </div>

        <div className="space-y-10">

          {achievements.map((achievement) => (
            <div
              key={`${achievement.year}-${achievement.title}`}
              className="
                grid
                gap-8
                border-l
                border-[var(--border)]
                pl-8
                md:grid-cols-[120px_1fr]
              "
            >
              <div>
                <p
                  className="
                    text-xl
                    font-medium
                    text-[var(--accent)]
                  "
                >
                  {achievement.year}
                </p>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-8
                "
              >
                <p
                  className="
                    mb-2
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-[var(--accent)]
                  "
                >
                  {achievement.organization}
                </p>

                <h3
                  className="
                    mb-4
                    text-3xl
                    font-light
                    font-[var(--font-cormorant)]
                  "
                >
                  {achievement.title}
                </h3>

                <p className="text-[var(--warm-grey)] leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}