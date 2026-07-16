import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  children,
  as = "h1",
  align = "left",
  className,
}: {
  eyebrow: string;
  children: ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}) {
  const Heading = as;

  return (
    <div
      className={cn(
        align === "center" && "flex flex-col items-center text-center",
      )}
    >
      <Reveal>
        <div className="text-muted mb-1.5 flex items-center gap-2.5 text-[15px]">
          {eyebrow} <span className="text-accent text-xs">◆</span>
        </div>
      </Reveal>
      <Reveal delay={60}>
        <Heading
          className={cn(
            "m-0 text-[clamp(30px,4.5vw,50px)] leading-[1.05] font-bold tracking-[-0.03em]",
            className,
          )}
        >
          {children}
        </Heading>
      </Reveal>
    </div>
  );
}
