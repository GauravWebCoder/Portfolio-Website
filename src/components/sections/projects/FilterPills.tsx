"use client";

import { Pill } from "@/components/ui/Pill";
import { PROJECT_FILTERS, type ProjectCategory } from "@/data/projects";

export function FilterPills({
  active,
  onChange,
}: {
  active: "all" | ProjectCategory;
  onChange: (key: "all" | ProjectCategory) => void;
}) {
  return (
    <div className="mb-10 flex flex-wrap gap-2.5">
      {PROJECT_FILTERS.map((f) => (
        <Pill
          key={f.key}
          as="button"
          variant={active === f.key ? "active" : "default"}
          onClick={() => onChange(f.key)}
          aria-pressed={active === f.key}
        >
          {f.label}
        </Pill>
      ))}
    </div>
  );
}
