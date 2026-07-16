"use client";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { EclipseInner } from "./EclipseInner";

// Not rendered at all below `md` — avoids mounting the scroll-linked parallax
// listener (and the layered gradient DOM) entirely on mobile, rather than
// just hiding it visually.
export function Eclipse() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (!isDesktop) return null;
  return <EclipseInner />;
}
