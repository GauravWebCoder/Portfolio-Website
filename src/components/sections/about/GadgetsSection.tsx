import { GADGETS } from "@/data/gadgets";
import { GadgetCard } from "./GadgetCard";
import { RevealGroup } from "@/components/motion/Reveal";

export function GadgetsSection() {
  return (
    <div className="mt-[70px]">
      <div className="mb-5 font-mono text-[11px] tracking-[.2em] text-accent">MY GADGETS</div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        <RevealGroup step={60}>
          {GADGETS.map((g) => (
            <GadgetCard key={g.name} {...g} />
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
