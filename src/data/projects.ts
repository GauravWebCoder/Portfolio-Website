export type ProjectCategory = "web-apps" | "tools" | "platforms";
export type ProjectTag = "Featured" | "Live" | "Concept";
export type ProjectMotifKey = "orbit" | "waveform" | "portfolio" | "cityscape";

export type Project = {
  slug: string;
  name: string;
  tag: ProjectTag;
  category: ProjectCategory;
  description: string;
  stack: string[];
  motif: ProjectMotifKey;
  // DEMO PLACEHOLDER LINKS — obviously-fake example.com/github.com/example URLs
  // so the project modal's link buttons are visible for now. Replace every
  // field below with real URLs before/soon after deploying.
  github?: string;
  liveUrl?: string;
  youtube?: string;
  linkedin?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "orbit",
    name: "Orbit",
    tag: "Featured",
    category: "platforms",
    description:
      "An all-in-one platform for students to manage academics, tasks, notes and resources in one place.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    motif: "orbit",
    github: "https://github.com/example/orbit",
    liveUrl: "https://example.com/orbit",
    youtube: "https://youtube.com/watch?v=example-orbit",
    linkedin: "https://linkedin.com/posts/example-orbit",
  },
  {
    slug: "vibetune",
    name: "VibeTune",
    tag: "Featured",
    category: "web-apps",
    description:
      "Real-time music platform to listen together, chat together with friends across the world.",
    stack: ["React", "Socket.io", "Supabase", "Tailwind"],
    motif: "waveform",
    github: "https://github.com/example/vibetune",
    liveUrl: "https://example.com/vibetune",
    youtube: "https://youtube.com/watch?v=example-vibetune",
    linkedin: "https://linkedin.com/posts/example-vibetune",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    tag: "Live",
    category: "web-apps",
    description:
      "You are looking at it right now. Built with love and lots of coffee, animated end to end.",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
    motif: "portfolio",
    github: "https://github.com/example/portfolio",
    liveUrl: "/",
    youtube: "https://youtube.com/watch?v=example-portfolio",
    linkedin: "https://linkedin.com/posts/example-portfolio",
  },
  {
    slug: "timearena",
    name: "TimeArena",
    tag: "Concept",
    category: "platforms",
    description:
      "Gaming platform concept with tournaments and leaderboards for competitive players.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    motif: "cityscape",
    github: "https://github.com/example/timearena",
    liveUrl: "https://example.com/timearena",
    youtube: "https://youtube.com/watch?v=example-timearena",
    linkedin: "https://linkedin.com/posts/example-timearena",
  },
];

export const PROJECT_FILTERS: { key: "all" | ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web-apps", label: "Web Apps" },
  { key: "tools", label: "Tools" },
  { key: "platforms", label: "Platforms" },
];
