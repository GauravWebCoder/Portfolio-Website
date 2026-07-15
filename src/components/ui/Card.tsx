import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  hover = "none",
  tint = false,
  className,
  ...rest
}: {
  children: ReactNode;
  hover?: "lift" | "none";
  tint?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-7",
        tint
          ? "border-brd-2 bg-gradient-to-br from-accent/16 to-transparent"
          : "border-brd bg-card",
        hover === "lift" &&
          "transition-transform duration-400 [transition-timing-function:cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 hover:border-brd-2",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
