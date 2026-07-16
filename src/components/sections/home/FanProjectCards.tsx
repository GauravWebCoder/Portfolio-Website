"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMotif } from "@/components/motifs/ProjectMotif";
import { useCarouselScroll } from "@/lib/hooks/useCarouselScroll";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

const ROTATIONS = ["-6deg", "4deg", "-3deg", "5deg", "-4.5deg", "3.5deg"];

export function FanProjectCards() {
  const {
    ref: scrollRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
  } = useCarouselScroll<HTMLDivElement>();

  return (
    <div className="relative z-[3] mt-auto">
      <div
        ref={scrollRef}
        className="fan-card-scroller flex [scrollbar-width:none] items-start gap-4 overflow-x-auto px-5 pt-10 pb-[70px] sm:gap-5 sm:px-8 sm:pt-12 lg:gap-6 lg:px-14 [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project, i) => (
          <Reveal
            key={`${project.slug}-${i}`}
            trigger="mount"
            delay={380 + i * 50}
          >
            <TransitionLink
              href="/projects"
              data-cursor="1"
              style={{
                ["--card-rotate" as string]: ROTATIONS[i % ROTATIONS.length],
              }}
              className="fan-card group border-brd bg-card-2 relative block w-[clamp(170px,42vw,240px)] shrink-0 overflow-hidden rounded-[22px] border p-4 sm:rounded-[28px] sm:p-6 lg:w-[clamp(260px,22vw,320px)] lg:rounded-[32px] lg:p-7"
            >
              <span
                aria-hidden="true"
                className="fan-card-sheen pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="mb-2.5 flex items-center gap-2">
                <span className="text-base font-bold sm:text-lg lg:text-2xl">
                  {project.name}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-medium",
                    "bg-accent/18 text-accent-2",
                  )}
                >
                  {project.tag}
                </span>
              </div>
              <div className="border-brd h-[100px] overflow-hidden rounded-xl border sm:h-[130px] lg:h-[170px]">
                <ProjectMotif motif={project.motif} />
              </div>
            </TransitionLink>
          </Reveal>
        ))}
      </div>

      <div className="pointer-events-none absolute right-5 bottom-3 z-[4] flex items-center gap-2 sm:right-8 lg:right-14">
        <button
          type="button"
          data-cursor="1"
          aria-label="Scroll projects backward"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
          className="border-brd-2 bg-card text-fg pointer-events-auto flex size-9 items-center justify-center rounded-full border transition-opacity disabled:pointer-events-none disabled:opacity-30 sm:size-10"
        >
          <FaChevronLeft size={14} />
        </button>
        <button
          type="button"
          data-cursor="1"
          aria-label="Scroll projects forward"
          disabled={!canScrollNext}
          onClick={scrollNext}
          className="border-brd-2 bg-card text-fg pointer-events-auto flex size-9 items-center justify-center rounded-full border transition-opacity disabled:pointer-events-none disabled:opacity-30 sm:size-10"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
