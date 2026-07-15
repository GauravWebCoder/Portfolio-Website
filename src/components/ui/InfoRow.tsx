import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InfoRow({
  icon,
  label,
  value,
  size = "md",
}: {
  icon: ReactNode;
  label: string;
  value: string;
  size?: "sm" | "md";
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span
        className={cn(
          "flex flex-none items-center justify-center rounded-xl border border-brd bg-card-2 text-accent",
          size === "md" ? "size-11 text-lg" : "size-[34px] rounded-[10px] text-[15px]",
        )}
      >
        {icon}
      </span>
      <div>
        <div className={cn("text-faint", size === "md" ? "mb-0.5 text-[13px]" : "text-xs")}>
          {label}
        </div>
        <div className={cn("font-medium", size === "md" ? "text-[15px]" : "text-sm")}>
          {value}
        </div>
      </div>
    </div>
  );
}
