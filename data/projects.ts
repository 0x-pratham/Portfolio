import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "GenXCode Portal",
    category: "Education Platform",
    description:
      "A modern learning and challenge platform for students and developers.",

    technologies: [
      "React",
      "Vite",
      "Supabase",
      "Tailwind",
    ],

    href: "#",
  },

  {
    id: 2,
    title: "Cosmolix Website",
    category: "Corporate Platform",
    description:
      "Official digital presence for Cosmolix Pvt Ltd.",

    technologies: [
      "Next.js",
      "SEO",
      "Tailwind",
    ],

    href: "#",
  },

  {
    id: 3,
    title: "Cybersecurity Research",
    category: "Research",
    description:
      "Research papers and cybersecurity studies.",

    technologies: [
      "Networking",
      "Security",
      "Research",
    ],

    href: "#",
  },
];