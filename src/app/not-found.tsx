import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <EmptyState
      eyebrow="404"
      title="Page not found."
      description="The page you're looking for doesn't exist or has moved."
      cta={<Button href="/">Back Home</Button>}
    />
  );
}
