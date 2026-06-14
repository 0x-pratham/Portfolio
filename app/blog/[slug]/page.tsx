import Link from "next/link";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/mdx";

import { BlogContent } from "@/components/blog/blog-content";
import { Reveal } from "@/components/shared/reveal";
import { Magnetic } from "@/components/shared/magnetic";

// Fully isolated client wrapper to resolve the 'use client' compilation error
import { ReadingProgressBarWrapper } from "./ReadingProgressBarWrapper";

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

    // Calculate Estimated Read Time based on ~225 words per minute
    const wordCount = post.content.split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 225));

    return (
      <>
        <ReadingProgressBarWrapper />
        <Navbar />

        <main className="py-32">
          <div className="container-custom max-w-5xl">

            {/* Back Navigation */}
            <Link
              href="/blog"
              className="
                group
                mb-12
                inline-flex
                items-center
                text-sm
                text-[var(--warm-grey)]
                transition-colors
                hover:text-[var(--accent)]
              "
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1 mr-1">
                ←
              </span>
              Back to Blog
            </Link>

            {/* Hero */}
            <div className="mb-24 border-b border-[var(--border)] pb-16">

              <Reveal>
                <p
                  className="
                    mb-4
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-[var(--accent)]
                  "
                >
                  {formattedDate} · {readTime} min read
                </p>
              </Reveal>

              <Reveal delay={0.1}>
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
              </Reveal>

              <Reveal delay={0.2}>
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
              </Reveal>

            </div>

            {/* Article Content */}
            <BlogContent
              content={post.content}
            />

            {/* Article End CTA */}
            <div className="mt-24 border-t border-[var(--border)] pt-16 text-center">
              <h3 className="mb-4 font-[var(--font-cormorant)] text-4xl font-light">
                Enjoyed this article?
              </h3>
              
              <p className="mx-auto mb-10 max-w-md text-[var(--warm-grey)]">
                Connect with me or explore more insights.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <Magnetic>
                  <Link
                    href="/blog"
                    className="
                      rounded-full 
                      border 
                      border-[var(--accent)] 
                      px-6 
                      py-3.5 
                      text-sm
                      text-[var(--warm-ivory)] 
                      transition-all 
                      duration-300 
                      hover:bg-[var(--accent)] 
                      hover:text-black
                    "
                  >
                    View More Articles
                  </Link>
                </Magnetic>

                <Magnetic>
                  <Link
                    href="/contact"
                    className="
                      rounded-full 
                      border 
                      border-[var(--border)] 
                      px-6 
                      py-3.5 
                      text-sm
                      transition-all 
                      duration-300 
                      hover:border-[var(--accent)] 
                      hover:text-[var(--accent)]
                    "
                  >
                    Contact Me
                  </Link>
                </Magnetic>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </>
    );
  } catch {
    notFound();
  }
}