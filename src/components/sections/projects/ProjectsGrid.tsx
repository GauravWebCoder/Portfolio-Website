"use client";

import { useState } from "react";
import { PROJECTS, type ProjectCategory } from "@/data/projects";
import { FilterPills } from "./FilterPills";
import { ProjectCard } from "./ProjectCard";
import { RevealGroup } from "@/components/motion/Reveal";

export function ProjectsGrid() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <FilterPills active={active} onChange={setActive} />
      {filtered.length === 0 ? (
        <p className="text-muted text-sm">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px]">
          <RevealGroup>
            {filtered.map((project, i) => (
              <ProjectCard
                key={`${project.slug}-${i}`}
                project={project}
                index={i}
              />
            ))}
          </RevealGroup>
        </div>
      )}
    </>
  );
}
