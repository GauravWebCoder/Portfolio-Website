import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "./Container";

export function EmptyState({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-5 pt-[150px] pb-[100px] text-center sm:px-8 lg:px-14">
      <Container size="narrow" className="flex flex-col items-center">
        <SectionHeading eyebrow={eyebrow} align="center" className="mb-4">
          {title}
        </SectionHeading>
        <Reveal delay={120}>
          <p className="text-muted max-w-[440px] text-base">{description}</p>
        </Reveal>
        {cta && (
          <Reveal delay={180}>
            <div className="mt-7">{cta}</div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
