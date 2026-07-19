export type ProjectCategory = "web-apps" | "tools" | "platforms";
export type ProjectTag = "Featured" | "Live" | "Concept" | "Upcoming" | "Was Live";
export type ProjectMotifKey = "orbit" | "waveform" | "portfolio" | "cityscape";

export type Project = {
  slug: string;
  name: string;
  tag: ProjectTag;
  category: ProjectCategory;
  description: string;
  stack: string[];
  motif: ProjectMotifKey;
  github?: string;
  liveUrl?: string;
  youtube?: string;
  linkedin?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "orbit",
    name: "Orbit OS",
    tag: "Upcoming",
    category: "platforms",
    description:
      "An all-in-one platform for students to manage academics, tasks, notes and resources in one place.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    motif: "orbit",
    liveUrl: "https://orbit.gauravmathpal.dev",
    linkedin: "https://linkedin.com/gaurav-mathpal",
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
    github: "https://github.com/GauravMathpal/VibeTune",
    liveUrl: "https://vibetune.gauravmathpal.dev",
    youtube: "https://youtube.com/",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7385353051718619137/",
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    tag: "Live",
    category: "web-apps",
    description:
      "My personal portfolio, designed and built from scratch to showcase my projects, document my journey, and experiment with modern web interactions.",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
    motif: "portfolio",
    github: "https://github.com/GauravMathpal/Portfolio-Website",
    liveUrl: "https://gauravmathpal.dev/",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com/gaurav-mathpal",
  },
  {
    slug: "School-Management-System",
    name: "School Management System",
    tag: "Was Live",
    category: "platforms",
    description:
      "Built my first website — a School Management System using WordPress for my school. Didn't have its source code now.",
    stack: ["Was Lived on WordPress"],
    motif: "portfolio",
  },
  {
    slug: "Upcoming",
    name: "Next Project",
    tag: "Upcoming",
    category: "platforms",
    description:
      "Maybe your idea? I'm always open to collaborations and new opportunities. Let's build something amazing together.",
    stack: ["CommingSoon™"],
    motif: "portfolio",
  },
];

export const PROJECT_FILTERS: {
  key: "all" | ProjectCategory;
  label: string;
}[] = [
  { key: "all", label: "All" },
  { key: "web-apps", label: "Web Apps" },
  { key: "tools", label: "Tools" },
  { key: "platforms", label: "Platforms" },
];
