import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "genxcode-portal",

    title: "GenXCode Portal",

    category: "Education Platform",

    description:
      "Learning platform for students and developers.",

    longDescription:
      "GenXCode Portal is a modern educational ecosystem focused on learning, coding challenges, developer growth and community engagement.",

    technologies: [
      "React",
      "Vite",
      "Supabase",
      "Tailwind CSS",
    ],

    featured: true,

    year: "2025",

    status: "Active",

    problem:
      "Students lacked a centralized platform for learning, challenges, and developer growth.",

    solution:
      "Built a modern platform integrating learning resources, coding challenges, and community engagement.",

    results: [
      "Improved student engagement",
      "Centralized learning experience",
      "Community-driven growth",
    ],

    image: "/images/projects/genxcode.png",
  },

  {
    slug: "cosmolix-website",

    title: "Cosmolix Website",

    category: "Corporate Platform",

    description:
      "Official platform for Cosmolix Pvt Ltd.",

    longDescription:
      "A modern company website focused on brand presence, lead generation and service presentation.",

    technologies: [
      "Next.js",
      "TypeScript",
      "SEO",
      "Tailwind CSS",
    ],

    featured: true,

    year: "2026",

    status: "Live",

    problem:
      "The company needed a strong digital identity and lead generation platform.",

    solution:
      "Developed a high-performance website optimized for SEO and client acquisition.",

    results: [
      "Improved online presence",
      "Professional brand image",
      "Lead generation platform",
    ],

    image: "/images/projects/cosmolix.jpg",
  },
];