import { TransitionLink } from "./TransitionLink";
import { site } from "@/data/site";

const FOOTER_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-brd bg-bg-2 relative z-[2] flex flex-wrap items-center justify-between gap-5 border-t px-5 py-12 sm:px-8 lg:px-14">
      <div>
        <div className="font-sans text-2xl font-extrabold tracking-tight">
          GM<span className="text-accent">.</span>
        </div>
        <div className="text-faint mt-1.5 text-sm">
          © {year} {site.name}. All rights reserved.
        </div>
      </div>
      <div className="text-muted flex gap-6 text-sm">
        {FOOTER_LINKS.map((link) => (
          <TransitionLink
            key={link.href}
            href={link.href}
            data-cursor="1"
            data-hover-underline="1"
            className="cursor-pointer"
          >
            {link.label}
          </TransitionLink>
        ))}
      </div>
    </footer>
  );
}
