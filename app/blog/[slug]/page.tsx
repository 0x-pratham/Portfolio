import { notFound } from "next/navigation";

import matter from "gray-matter";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/mdx";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(
    (post) => ({
      slug: post.slug,
    })
  );
}

export default async function BlogPost({
  params,
}: Props) {
  const { slug } =
    await params;

  try {
    const post =
      getPostBySlug(slug);

    return (
      <>
        <Navbar />

        <main className="py-24">
          <div className="container-custom max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold">
              {
                post.frontmatter
                  .title
              }
            </h1>

            <article className="prose prose-invert max-w-none">
              {post.content}
            </article>
          </div>
        </main>

        <Footer />
      </>
    );
  } catch {
    notFound();
  }
}