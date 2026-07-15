import { MILESTONES } from "@/data/journey";
import { Reveal } from "@/components/motion/Reveal";

export function Timeline() {
  return (
    <div className="flex flex-col">
      {MILESTONES.map((m, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="grid grid-cols-[80px_auto_1fr] items-start gap-[22px] border-t border-brd py-[26px] sm:grid-cols-[110px_auto_1fr]">
            <div className="font-mono text-[13px] text-faint">{m.year}</div>
            <div className="mt-1.5 size-2.5 rounded-full bg-accent" />
            <div>
              <div className="mb-1.5 text-[17px] font-semibold">{m.title}</div>
              <div className="text-sm leading-[1.6] text-muted">{m.description}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
