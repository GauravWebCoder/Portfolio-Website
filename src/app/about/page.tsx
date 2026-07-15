import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { PortraitMotif } from "@/components/motifs/PortraitMotif";
import { Bio } from "@/components/sections/about/Bio";
import { FactsGrid } from "@/components/sections/about/FactsGrid";
import { GadgetsSection } from "@/components/sections/about/GadgetsSection";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "1st year CSE student based in Uttarakhand, India — building products and learning in public.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="px-5 pt-[150px] pb-[100px] sm:px-8 lg:px-14">
      <Container>
        <SectionHeading eyebrow="ABOUT ME" className="mb-9">
          I&apos;m Gaurav Mathpal
        </SectionHeading>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[340px_1fr]">
          <Reveal>
            <PortraitMotif />
          </Reveal>
          <div>
            <Bio />
            <FactsGrid />
          </div>
        </div>
        <GadgetsSection />
      </Container>
    </section>
  );
}
