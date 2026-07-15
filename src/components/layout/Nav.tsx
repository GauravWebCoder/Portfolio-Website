"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionLink";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_ITEMS } from "@/data/nav";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const {
    ref: logoRef,
    onMouseMove: onLogoMouseMove,
    onMouseLeave: onLogoMouseLeave,
    style: logoStyle,
  } = useMagnetic<HTMLAnchorElement>();

  return (
    <nav
      className="fixed inset-x-0 top-0 z-[200] flex items-center justify-between border-b border-brd px-5 py-[22px] backdrop-blur-md sm:px-8 lg:px-14"
      style={{ background: "color-mix(in srgb, var(--bg) 55%, transparent)" }}
    >
      <TransitionLink
        ref={logoRef}
        href="/"
        data-cursor="1"
        onMouseMove={onLogoMouseMove}
        onMouseLeave={onLogoMouseLeave}
        style={logoStyle}
        className="cursor-pointer font-sans text-2xl font-extrabold tracking-tight"
      >
        GM<span className="text-accent">.</span>
      </TransitionLink>

      <div className="hidden items-center gap-7 lg:flex">
        <div className="flex gap-6 text-sm">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                data-cursor="1"
                data-hover-underline="1"
                data-active={active ? "1" : undefined}
                className={cn(
                  "cursor-pointer py-1 transition-colors",
                  active ? "font-semibold text-fg" : "text-muted hover:text-fg",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </TransitionLink>
            );
          })}
        </div>
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-brd-2 bg-card text-fg"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-brd bg-bg-2 p-5 lg:hidden">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base transition-colors",
                  active ? "bg-card font-semibold text-fg" : "text-muted",
                )}
              >
                {item.label}
              </TransitionLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}
