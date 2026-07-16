"use client";

import type { IconType } from "react-icons";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { SOCIAL_LINKS } from "@/data/contact";

function SocialIconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: IconType;
}) {
  const { ref, onMouseMove, onMouseLeave, style } =
    useMagnetic<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-cursor="1"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="border-brd bg-card hover:bg-card-2 flex size-[42px] items-center justify-center rounded-xl border text-base transition-colors"
    >
      <Icon />
    </a>
  );
}

export function SocialLinks() {
  const links = SOCIAL_LINKS.filter((s): s is typeof s & { href: string } =>
    Boolean(s.href),
  );

  if (links.length === 0) return null;

  return (
    <div className="mt-1.5 flex gap-3">
      {links.map((s) => (
        <SocialIconLink
          key={s.label}
          href={s.href}
          label={s.label}
          icon={s.icon}
        />
      ))}
    </div>
  );
}
