import { MILESTONES } from "@/data/journey";
import { Reveal } from "@/components/motion/Reveal";

export function Timeline() {
  return (
    <div className="flex flex-col">
      {MILESTONES.map((m, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="border-brd grid grid-cols-[80px_auto_1fr] items-start gap-[22px] border-t py-[26px] sm:grid-cols-[110px_auto_1fr]">
            <div className="text-faint font-mono text-[13px]">{m.year}</div>
            <div className="bg-accent mt-1.5 size-2.5 rounded-full" />
            <div>
              <div className="mb-1.5 text-[17px] font-semibold">{m.title}</div>
              <div className="text-muted text-sm leading-[1.6]">
                {m.description}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
