import { RevealGroup } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { EXPLORE_CARDS } from "@/data/home";
import { cn } from "@/lib/utils";

export function ExploreGrid() {
  return (
    <section className="border-brd relative z-[2] border-t px-5 py-[100px] sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        <RevealGroup step={80}>
          {EXPLORE_CARDS.map((card) => (
            <TransitionLink
              key={card.href}
              href={card.href}
              data-cursor="1"
              className={cn(
                "group relative block cursor-pointer overflow-hidden rounded-[18px] border p-7 transition-transform duration-500 [transition-timing-function:cubic-bezier(.2,.7,.2,1)] hover:-translate-y-2",
                card.tint
                  ? "border-brd-2 from-accent/16 hover:from-accent/22 bg-gradient-to-br to-transparent"
                  : "border-brd bg-card hover:border-brd-2",
              )}
            >
              <span
                aria-hidden="true"
                className="fan-card-sheen pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="text-accent mb-3.5 font-mono text-[11px] tracking-[.2em]">
                {card.eyebrow}
              </div>
              <div className="mb-2.5 text-[19px] font-semibold">
                {card.title}
              </div>
              <div className="text-muted mb-4 text-sm leading-[1.6]">
                {card.description}
              </div>
              <div className="text-accent-2 text-[13px]">{card.cta}</div>
            </TransitionLink>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
