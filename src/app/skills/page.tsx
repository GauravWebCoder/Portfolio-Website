import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { RevealGroup } from "@/components/motion/Reveal";
import { SKILL_GROUPS } from "@/data/skills";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description: "Languages, frameworks and tools I build with day to day.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <section className="px-5 pt-[150px] pb-[100px] sm:px-8 lg:px-14">
      <Container>
        <SectionHeading eyebrow="SKILLS" className="mb-11">
          Current ToolKit.
        </SectionHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
          <RevealGroup>
            {SKILL_GROUPS.map((group) => (
              <Card key={group.title}>
                <div className="mb-4 font-mono text-xs tracking-[.14em] text-accent">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
