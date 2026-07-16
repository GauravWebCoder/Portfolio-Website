import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { site } from "./site";

export const CONTACT_INFO = [
  { icon: "✉", label: "Email", value: site.email },
  { icon: "⚲", label: "Location", value: site.location },
  { icon: "◈", label: "Open to", value: "Internships, Collaborations" },
];

export type SocialLink = {
  label: string;
  icon: IconType;
  href: string | null;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/gaurav-mathpal/",
  },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/GauravMathpal" },
  { label: "X", icon: FaXTwitter, href: "https://twitter.com" },
  { label: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
];
