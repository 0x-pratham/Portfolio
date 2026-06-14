import { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { BlogCard } from "@/components/blog/blog-card";

import { getAllPosts } from "@/lib/mdx";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Blog",

  description:
    "Technology, cybersecurity and startup insights by Prathamesh Bhil.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  // Fixed type assertion by casting to unknown first
  const featuredPost = posts[0] as unknown as { 
    slug: string, 
    frontmatter: { title: string, description: string, date: string } 
  };
  const remainingPosts = posts.slice(1);

  return (
    <>
      <Navbar />

      <main className="py-24">
        <div className="container-custom">
          
          <div className="mb-16 max-w-4xl">
            <Reveal>
              <p
                className="
                mb-4
                text-sm
                uppercase
                tracking-[0.35em]
                text-[var(--accent)]
                "
              >
                Blog
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mb-8 text-5xl font-light md:text-7xl font-[var(--font-cormorant)]">
                Insights, Ideas &<br />Experiences.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl leading-loose text-[var(--warm-grey)]">
                Technology, cybersecurity,<br />entrepreneurship and the lessons<br />learned while building companies,<br />communities and products.
              </p>
            </Reveal>
          </div>

          {featuredPost && (
            <div className="mb-16">
              <h2 className="mb-6 text-sm uppercase tracking-wider text-[var(--warm-grey)]">
                Featured Article
              </h2>
              <div className="grid gap-8 md:grid-cols-1">
                <BlogCard
                  key={featuredPost.slug}
                  slug={featuredPost.slug}
                  title={featuredPost.frontmatter.title}
                  description={featuredPost.frontmatter.description}
                  date={featuredPost.frontmatter.date}
                />
              </div>
            </div>
          )}

          <div className="grid gap-10 md:grid-cols-2">
            {remainingPosts.map((post: any) => (
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