import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "A collection of things I've built or building",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="px-5 pt-[150px] pb-[100px] sm:px-8 lg:px-14">
      <Container className="max-w-[1200px]">
        <SectionHeading eyebrow="PROJECTS" className="mb-2">
          A collection of things I have built or building
        </SectionHeading>
        <div className="mt-8">
          <ProjectsGrid />
        </div>
      </Container>
    </section>
  );
}
