import Link from "next/link";

interface Props {
  slug: string;

  title: string;

  description: string;

  date: string;
}

export function BlogCard({
  slug,
  title,
  description,
  date,
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
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
"
    >
    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
        {new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}
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