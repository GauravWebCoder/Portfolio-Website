import { InfoRow } from "@/components/ui/InfoRow";
import { FACTS } from "@/data/about";

export function FactsGrid() {
  return (
    <div className="mt-[30px] grid grid-cols-1 gap-x-6 gap-y-[18px] sm:grid-cols-2">
      {FACTS.map((f) => (
        <InfoRow key={f.label} icon={f.icon} label={f.label} value={f.value} size="sm" />
      ))}
    </div>
  );
}
