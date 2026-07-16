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
          ? "border-brd-2 from-accent/16 bg-gradient-to-br to-transparent"
          : "border-brd bg-card",
        hover === "lift" &&
          "hover:border-brd-2 transition-transform duration-400 [transition-timing-function:cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
