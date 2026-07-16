import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { getPublicImage } from "@/lib/getPublicImage";
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
  const portraitSrc = getPublicImage("portrait");

  return (
    <section className="px-5 pt-[150px] pb-[100px] sm:px-8 lg:px-14">
      <Container>
        <SectionHeading eyebrow="ABOUT ME" className="mb-9">
          I&apos;m Gaurav Mathpal
        </SectionHeading>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[340px_1fr]">
          <Reveal>
            {portraitSrc ? (
              <div className="border-brd relative aspect-[3/4] w-full overflow-hidden rounded-[20px] border">
                <Image
                  src={portraitSrc}
                  alt="Gaurav Mathpal"
                  fill
                  sizes="(min-width: 1024px) 340px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <PortraitMotif />
            )}
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
