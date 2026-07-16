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
    name: "Orbit OS",
    tag: "Concept",
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
    github: "https://github.com/GauravMathpal/VibeTune",
    liveUrl: "https://vibetune-mu.vercel.app/",
    youtube: "https://youtube.com/",
    linkedin: "https://www.linkedin.com/posts/gaurav-mathpal_vibetune-ai-reactjs-ugcPost-7385353050099621888-ikCS/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7385353051718619137&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFYnNE0BWsJsUZpRSEAqwf3XCmIT2vy1syA",
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
    tag: "Live",
    category: "platforms",
    description:
      "Built my first website — a School Management System using WordPress for my school. Didn't have its source code now.",
    stack: ["Was Lived on WordPress"],
    motif: "cityscape",
    github: "https://github.com/GauravMathpal",
    liveUrl: "https://gauravmathpal.dev/",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com/Gaurav-Mathpal",
  },
  {
    slug: "Upcoming",
    name: "Next Project",
    tag: "Concept",
    category: "platforms",
    description:
      "Maybe your idea? I'm always open to collaborations and new opportunities. Let's build something amazing together.",
    stack: ["CommingSoon™"],
    motif: "cityscape",
    github: "https://github.com/GauravMathpal",
    liveUrl: "https://gauravmathpal.dev/",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com/Gaurav-Mathpal",
  },
];

// export const PROJECT_FILTERS: { key: "all" | ProjectCategory; label: string }[] = [
//   { key: "all", label: "All" },
//   { key: "web-apps", label: "Web Apps" },
//   { key: "tools", label: "Tools" },
//   { key: "platforms", label: "Platforms" },
// ];
