import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Work in progress — a full resume is coming soon.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <EmptyState
      eyebrow="RESUME"
      title="Work in progress."
      description="Still early in my career — a proper resume is coming soon. For now, reach out directly."
      cta={<Button href="/contact">Get in Touch</Button>}
    />
  );
}
