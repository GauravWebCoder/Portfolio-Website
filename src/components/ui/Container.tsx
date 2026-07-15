import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  size = "default",
  className,
}: {
  children: ReactNode;
  size?: "default" | "narrow";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-14",
        size === "default" ? "max-w-[1200px]" : "max-w-[900px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
