import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(
  process.cwd(),
  "content/blog"
);

export function getAllPosts() {
  const files = fs.readdirSync(
    POSTS_PATH
  );

  return files.map((file) => {
    const slug = file.replace(
      ".mdx",
      ""
    );

    const filePath = path.join(
      POSTS_PATH,
      file
    );

    const source =
      fs.readFileSync(
        filePath,
        "utf8"
      );

    const {
      data,
      content,
    } = matter(source);

    return {
  slug,
  frontmatter: {
    ...data,
    date:
      data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date),
  },
  content,
};
  });
}

export function getPostBySlug(
  slug: string
) {
  const filePath = path.join(
    POSTS_PATH,
    `${slug}.mdx`
  );

  const source =
    fs.readFileSync(
      filePath,
      "utf8"
    );

  const {
    data,
    content,
  } = matter(source);

  return {
    frontmatter: data,
    content,
  };
}