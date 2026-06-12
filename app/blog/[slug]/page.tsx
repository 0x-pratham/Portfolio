import Link from "next/link";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/mdx";

import { BlogContent } from "@/components/blog/blog-content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: Props) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    const formattedDate =
      post.frontmatter.date instanceof Date
        ? post.frontmatter.date.toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )
        : String(post.frontmatter.date);

    return (
      <>
        <Navbar />

        <main className="py-32">
          <div className="container-custom max-w-5xl">

            {/* Back Navigation */}
            <Link
              href="/blog"
              className="
                mb-12
                inline-flex
                items-center
                text-sm
                text-[var(--warm-grey)]
                transition-colors
                hover:text-[var(--accent)]
              "
            >
              ← Back to Blog
            </Link>

            {/* Hero */}
            <div className="mb-24 border-b border-[var(--border)] pb-16">

              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-[var(--accent)]
                "
              >
                {formattedDate}
              </p>

              <h1
                className="
                  mb-8
                  font-[var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-none
                  md:text-7xl
                "
              >
                {post.frontmatter.title}
              </h1>

              <p
                className="
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-[var(--warm-grey)]
                "
              >
                {post.frontmatter.description}
              </p>

            </div>

            {/* Article Content */}
            <BlogContent
              content={post.content}
            />

          </div>
        </main>

        <Footer />
      </>
    );
  } catch {
    notFound();
  }
}