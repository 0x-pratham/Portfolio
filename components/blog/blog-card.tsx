import Link from "next/link";

interface Props {
  slug: string;

  title: string;

  description: string;

  date: string;
  
  // Added index prop for handling the sequential card stagger loading animation
  index?: number;
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  index = 0,
}: Props) {
  // Assuming a standard average reading speed estimation baseline (~225 words per minute)
  const wordCount = description.split(/\s+/).length + title.split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 5));

  return (
    <Link
      href={`/blog/${slug}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      className="
group
relative
block
overflow-hidden
rounded-3xl
border
border-[var(--border)]
bg-[var(--surface)]
p-10 md:p-12
transition-all
duration-500
hover:-translate-y-2
hover:border-[var(--accent)]
hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]
"
    >
      {/* Top Accent Line */}
      <div
        className="
        absolute
        left-0
        top-0
        h-[2px]
        w-0
        bg-[var(--accent)]
        transition-all
        duration-500
        group-hover:w-full
        "
      />

      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })} · {readTime} min read
      </p>

      <h2 className="
mb-5
font-[var(--font-cormorant)]
text-3xl
font-light
leading-tight
transition-colors
duration-300
group-hover:text-[var(--accent)]
">
        {title}
      </h2>

      <p className="leading-relaxed text-[var(--warm-grey)]">
        {description}
      </p>

      <div
        className="
        mt-8
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-[var(--accent)]
        opacity-80
        group-hover:opacity-100
        transition-opacity
        duration-300
        "
      >
        <span>Read Article</span>

        <span
          className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        >
          →
        </span>
      </div>
    </Link>
  );
}