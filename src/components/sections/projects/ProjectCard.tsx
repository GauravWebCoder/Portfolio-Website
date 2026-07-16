"use client";

import { useState, type KeyboardEvent } from "react";
import { ProjectMotif } from "@/components/motifs/ProjectMotif";
import { useTilt } from "@/lib/hooks/useTilt";
import type { Project } from "@/data/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

const BASE_ROTATE = [-2.4, 1.6, -1.2];

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { ref, onPointerMove, onPointerLeave, style } = useTilt<HTMLDivElement>(
    BASE_ROTATE[index % 3],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        data-cursor="1"
        onClick={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={style}
        className="group border-brd bg-card hover:border-brd-2 focus-visible:outline-accent relative cursor-pointer overflow-hidden rounded-[18px] border p-[26px] transition-colors duration-450 hover:shadow-[0_24px_55px_-24px_rgba(124,102,255,.55)] focus-visible:outline-2"
      >
        <span
          aria-hidden="true"
          className="fan-card-sheen pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="font-sans text-[22px] font-bold">
            {project.name}
          </span>
          <span className="bg-accent/18 text-accent-2 rounded-full px-2.5 py-1 text-[10px] font-medium">
            {project.tag}
          </span>
        </div>
        <p className="text-muted mb-5 text-sm leading-[1.6]">
          {project.description}
        </p>
        <div className="border-brd mb-[18px] h-[150px] overflow-hidden rounded-xl border">
          <ProjectMotif motif={project.motif} />
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="border-brd bg-card-2 text-muted rounded-md border px-2.5 py-1 font-mono text-[11px]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <ProjectDetailModal
        project={project}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
