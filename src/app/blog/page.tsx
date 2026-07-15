import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description: "Writing is next — first post drops once Orbit ships.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <EmptyState
      eyebrow="BLOG"
      title="Writing is next."
      description="No posts yet — first one drops once Orbit ships. Check back soon."
    />
  );
}
