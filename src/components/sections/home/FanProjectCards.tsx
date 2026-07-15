import { TransitionLink } from "@/components/layout/TransitionLink";
import { Reveal } from "@/components/motion/Reveal";
import { Waveform } from "@/components/motifs/Waveform";
import { PlanetMotif } from "@/components/motifs/PlanetMotif";
import { CityscapeMotif } from "@/components/motifs/CityscapeMotif";

const sheen = (
  <span
    aria-hidden="true"
    className="fan-card-sheen pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
  />
);

export function FanProjectCards() {
  return (
    <div className="relative z-[3] mt-auto flex snap-x snap-mandatory items-start justify-start gap-4 overflow-x-auto px-5 pb-[70px] [scrollbar-width:none] sm:px-8 lg:snap-none lg:justify-center lg:gap-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
      <Reveal trigger="mount" delay={420}>
        <TransitionLink
          href="/projects"
          data-cursor="1"
          className="fan-card fan-card-left group relative block w-[clamp(210px,19vw,280px)] shrink-0 snap-center overflow-hidden rounded-[32px] border border-brd bg-card-2 p-7 backdrop-blur-[5px] lg:-mr-14"
        >
          {sheen}
          <div className="font-sans text-[22px] font-bold">VibeTune</div>
          <div className="mb-5 text-sm text-faint">Music Platform</div>
          <Waveform height={64} />
        </TransitionLink>
      </Reveal>

      <Reveal trigger="mount" delay={380}>
        <TransitionLink
          href="/projects"
          data-cursor="1"
          className="fan-card fan-card-center group relative z-[4] block w-[clamp(260px,24vw,360px)] shrink-0 snap-center overflow-hidden rounded-[40px] border border-brd-2 bg-card-2 p-9 text-center backdrop-blur-[6px]"
        >
          {sheen}
          <div className="font-sans text-[28px] font-bold">Orbit</div>
          <div className="mb-5 text-sm text-faint">Student Operating System</div>
          <PlanetMotif size={150} />
        </TransitionLink>
      </Reveal>

      <Reveal trigger="mount" delay={420}>
        <TransitionLink
          href="/projects"
          data-cursor="1"
          className="fan-card fan-card-right group relative block w-[clamp(210px,19vw,280px)] shrink-0 snap-center overflow-hidden rounded-[32px] border border-brd bg-card-2 p-7 backdrop-blur-[5px] lg:-ml-14"
        >
          {sheen}
          <div className="font-sans text-[22px] font-bold">TimeArena</div>
          <div className="mb-3.5 text-sm text-faint">Gaming Platform</div>
          <div className="h-[140px] overflow-hidden rounded-xl border border-brd">
            <CityscapeMotif />
          </div>
        </TransitionLink>
      </Reveal>
    </div>
  );
}
