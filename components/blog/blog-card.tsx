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
        block
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        transition
        hover:border-violet-500/40
      "
    >
      <p className="mb-3 text-sm text-violet-400">
        {date}
      </p>

      <h2 className="mb-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="text-slate-400">
        {description}
      </p>
    </Link>
  );
}