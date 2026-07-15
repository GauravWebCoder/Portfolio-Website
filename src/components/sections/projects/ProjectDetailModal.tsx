"use client";

import { AnimatePresence, motion } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { ProjectMotif } from "@/components/motifs/ProjectMotif";
import { TransitionLink } from "@/components/layout/TransitionLink";
import type { Project } from "@/data/projects";

const linkButtonClass =
  "flex items-center gap-2 rounded-xl border border-brd bg-card-2 px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-brd-2 hover:bg-card";

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const hasLinks = Boolean(
    project.liveUrl || project.github || project.youtube || project.linkedin,
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[950] bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed top-1/2 left-1/2 z-[960] max-h-[85vh] w-[calc(100vw-40px)] max-w-[640px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[24px] border border-brd-2 bg-bg-2 p-8 focus:outline-none"
                initial={{ opacity: 0, scale: 0.96, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, y: 12, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Dialog.Title className="font-sans text-2xl font-bold">
                      {project.name}
                    </Dialog.Title>
                    <span className="rounded-full bg-accent/18 px-2.5 py-1 text-[10px] font-medium text-accent-2">
                      {project.tag}
                    </span>
                  </div>
                  <Dialog.Close
                    aria-label="Close"
                    data-cursor="1"
                    className="flex size-9 flex-none items-center justify-center rounded-full border border-brd bg-card text-fg"
                  >
                    ✕
                  </Dialog.Close>
                </div>

                <Dialog.Description className="sr-only">
                  Full details, tech stack, and links for the {project.name} project.
                </Dialog.Description>

                <div className="mb-6 h-[240px] overflow-hidden rounded-2xl border border-brd">
                  <ProjectMotif motif={project.motif} />
                </div>

                <p className="mb-6 text-[15px] leading-[1.7] text-muted">{project.description}</p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-brd bg-card-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {hasLinks && (
                  <div className="flex flex-wrap gap-3 border-t border-brd pt-6">
                    {project.liveUrl &&
                      (project.liveUrl.startsWith("/") ? (
                        <TransitionLink
                          href={project.liveUrl}
                          data-cursor="1"
                          className={linkButtonClass}
                        >
                          Live Demo ↗
                        </TransitionLink>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="1"
                          className={linkButtonClass}
                        >
                          Live Demo ↗
                        </a>
                      ))}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="1"
                        className={linkButtonClass}
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="1"
                        className={linkButtonClass}
                      >
                        <FaYoutube /> YouTube
                      </a>
                    )}
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="1"
                        className={linkButtonClass}
                      >
                        <FaLinkedinIn /> LinkedIn Post
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
