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
    eyebrow: "TOOLKIT",
    title: "Always learning, always building.",
    description:
      "Currently focused on HTML, CSS, JavaScript and the MERN stack while exploring modern web development.",
    cta: "Explore toolkit ↗",
  },
  {
    href: "/about",
    eyebrow: "ABOUT",
    title: "Building one step at a time.",
    description:
      "Based in Uttarakhand, India — a B.Tech CSE student documenting my journey through projects and YouTube.",
    cta: "Know my story ↗",
  },
  {
    href: "/journey",
    eyebrow: "JOURNEY",
    title: "The journey has just begun.",
    description:
      "Follow my path from discovering programming to building products, sharing every milestone along the way.",
    cta: "View timeline ↗",
  },
  {
    href: "/blog",
    eyebrow: "BLOG",
    title: "Lessons from the journey.",
    description:
      "A place where I'll share what I'm learning, building, and discovering throughout my engineering journey.",
    cta: "Coming soon ↗",
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
