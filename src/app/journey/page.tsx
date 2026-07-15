import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/sections/journey/Timeline";

export const metadata: Metadata = pageMetadata({
  title: "Journey",
  description: "A timeline of what I've learned and shipped since 2024.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <section className="px-5 pt-[150px] pb-[100px] sm:px-8 lg:px-14">
      <Container size="narrow">
        <SectionHeading eyebrow="JOURNEY" className="mb-12">
          How I got here.
        </SectionHeading>
        <Timeline />
      </Container>
    </section>
  );
}
