import { InfoRow } from "@/components/ui/InfoRow";
import { CONTACT_INFO } from "@/data/contact";

export function ContactInfoList() {
  return (
    <div className="flex flex-col gap-6">
      {CONTACT_INFO.map((c) => (
        <InfoRow key={c.label} icon={c.icon} label={c.label} value={c.value} />
      ))}
    </div>
  );
}
