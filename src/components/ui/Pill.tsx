import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  variant?: "default" | "active" | "accent";
  as?: "span" | "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Pill({ children, variant = "default", as = "span", className, ...rest }: PillProps) {
  const classes = cn(
    "rounded-full px-3.5 py-1.5 text-[13px]",
    variant === "active" &&
      "font-medium text-white",
    variant === "default" && "border border-brd bg-card text-muted",
    variant === "accent" &&
      "border border-brd bg-card-2 font-mono text-[11px] text-muted",
    as === "button" && "cursor-pointer",
    className,
  );
  const style =
    variant === "active"
      ? { background: "linear-gradient(100deg, var(--accent), var(--accent-2))" }
      : undefined;

  if (as === "button") {
    return (
      <button type="button" data-cursor="1" className={classes} style={style} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
}
