"use client";

import { useState, type KeyboardEvent } from "react";
import { ProjectMotif } from "@/components/motifs/ProjectMotif";
import { useTilt } from "@/lib/hooks/useTilt";
import type { Project } from "@/data/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

const BASE_ROTATE = [-2.4, 1.6, -1.2];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
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
        className="group relative cursor-pointer overflow-hidden rounded-[18px] border border-brd bg-card p-[26px] transition-colors duration-450 hover:border-brd-2 hover:shadow-[0_24px_55px_-24px_rgba(124,102,255,.55)] focus-visible:outline-2 focus-visible:outline-accent"
      >
        <span
          aria-hidden="true"
          className="fan-card-sheen pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="font-sans text-[22px] font-bold">{project.name}</span>
          <span className="rounded-full bg-accent/18 px-2.5 py-1 text-[10px] font-medium text-accent-2">
            {project.tag}
          </span>
        </div>
        <p className="mb-5 text-sm leading-[1.6] text-muted">{project.description}</p>
        <div className="mb-[18px] h-[150px] overflow-hidden rounded-xl border border-brd">
          <ProjectMotif motif={project.motif} />
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-brd bg-card-2 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <ProjectDetailModal project={project} open={open} onOpenChange={setOpen} />
    </>
  );
}
