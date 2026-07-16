import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function HeroIntro() {
  return (
    <div>
      <Reveal trigger="mount">
        <div className="text-muted mb-[18px] flex items-center gap-2.5 text-[15px]">
          Hello, I&apos;m <span className="text-accent text-xs">◆</span>
        </div>
      </Reveal>
      <h1 className="m-0 text-[clamp(52px,9vw,140px)] leading-[0.9] font-extrabold tracking-[-0.04em]">
        <Reveal trigger="mount" as="span" className="block">
          GAURAV
        </Reveal>
        <Reveal
          trigger="mount"
          delay={90}
          as="span"
          className="text-gradient block"
        >
          MATHPAL
        </Reveal>
      </h1>
      <Reveal trigger="mount" delay={160}>
        <p className="mt-[26px] text-[clamp(18px,2vw,24px)] font-medium tracking-[-0.01em]">
          Computer Science Student. Product Builder. Creator
        </p>
      </Reveal>
      <Reveal trigger="mount" delay={220}>
        <p className="text-muted mt-4 max-w-[440px] text-base leading-[1.6]">
          I build products that solve real problems while documenting my
          journey.
        </p>
      </Reveal>
      <Reveal trigger="mount" delay={300}>
        <div className="mt-[38px] flex flex-wrap gap-4">
          <Button href="/projects" icon={<span>↗</span>}>
            Explore My Work
          </Button>
          <Button href="/resume" variant="outline" icon={<span>↓</span>}>
            View Resume
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
