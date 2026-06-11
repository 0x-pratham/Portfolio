import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/shared/reveal";

export function SkillsEcosystem() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <Reveal>
        <div className="mb-16">
          <p
  className="
    mb-6
    text-sm
    uppercase
    tracking-[0.35em]
    text-accent
  "
>
  Expertise
</p>

<h2
  className="
    text-5xl
    font-light
    leading-none
    md:text-6xl
  "
>
  Areas of Expertise
</h2>
        </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2"> 
          {skillGroups.map((group, index) => (
            <Reveal
    key={group.title}
    delay={index * 0.1}
  >
            <div
              className="
  rounded-[2rem]
  border
  border-[var(--border)]
  bg-[var(--surface)]
  p-8
  transition-all
  duration-500
  hover:border-[var(--accent)]
"
            >
              <h3 className="mb-4 text-3xl font-light">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map(
                  (skill) => (
                    <span
                      key={skill}
                      className="
  mono
  text-sm
  text-muted
"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}