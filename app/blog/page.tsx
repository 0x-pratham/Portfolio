import { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { BlogCard } from "@/components/blog/blog-card";

import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",

  description:
    "Technology, cybersecurity and startup insights by Prathamesh Bhil.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <main className="py-24">
        <div className="container-custom">
          <h1 className="mb-12 text-5xl font-bold">
            Blog
          </h1>

          <div className="grid gap-8">
            {posts.map((post: any) => (
  <BlogCard
    key={post.slug}
    slug={post.slug}
    title={post.frontmatter.title}
    description={post.frontmatter.description}
    date={post.frontmatter.date}
  />
))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}