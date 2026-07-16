"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps, type MouseEvent } from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { labelForPath } from "@/data/nav";

type TransitionLinkProps = ComponentProps<typeof Link> & {
  label?: string;
};

export const TransitionLink = forwardRef<
  HTMLAnchorElement,
  TransitionLinkProps
>(function TransitionLink({ href, label, onClick, children, ...rest }, ref) {
  const { beginNavigation } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return;

    const hrefStr = typeof href === "string" ? href : (href.pathname ?? "/");
    if (hrefStr.startsWith("http") || hrefStr.startsWith("#")) return;

    e.preventDefault();
    beginNavigation(hrefStr, label ?? labelForPath(hrefStr));
  };

  return (
    <Link ref={ref} href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
});
