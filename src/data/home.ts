export type ExploreCard = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  tint?: boolean;
};

export const EXPLORE_CARDS: ExploreCard[] = [
  {
    href: "/skills",
    eyebrow: "SKILLS",
    title: "Java, React, Node & more",
    description: "Languages, frameworks and tools I build with day to day.",
    cta: "See all skills ↗",
  },
  {
    href: "/about",
    eyebrow: "ABOUT",
    title: "1st year CSE student",
    description: "Based in Uttarakhand, India — building products and learning in public.",
    cta: "Read more ↗",
  },
  {
    href: "/journey",
    eyebrow: "JOURNEY",
    title: "From first line of code to Orbit",
    description: "A timeline of what I've learned and shipped since 2024.",
    cta: "View timeline ↗",
  },
  {
    href: "/blog",
    eyebrow: "BLOG",
    title: "Writing is next",
    description: "First post drops once Orbit ships. Nothing here yet.",
    cta: "Check back ↗",
  },
  {
    href: "/resume",
    eyebrow: "RESUME",
    title: "Work in progress",
    description: "Early in my career — a full resume is coming soon.",
    cta: "Learn more ↗",
  },
  {
    href: "/contact",
    eyebrow: "CONTACT",
    title: "Let's build something",
    description: "Open to internships and collaborations right now.",
    cta: "Say hello ↗",
    tint: true,
  },
];
