interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p
          className="
            mb-4
            text-sm
            uppercase
            tracking-[0.25em]
            text-accent
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-5xl
          font-light
          leading-none
          md:text-6xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-muted
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}