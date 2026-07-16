"use client";

import { useTheme } from "next-themes";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { useMounted } from "@/lib/hooks/useMounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const { ref, onMouseMove, onMouseLeave, style } =
    useMagnetic<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      type="button"
      data-cursor="1"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="border-brd-2 bg-card text-fg flex size-10 items-center justify-center rounded-full border transition-colors"
    >
      {mounted ? (isDark ? "☾" : "☀") : null}
    </button>
  );
}
