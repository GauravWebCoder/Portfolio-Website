import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch — open to internships and collaborations right now.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ContactSection
      title="CONTACT"
      description="Let's build something amazing together."
      as="h1"
      showSubject
    />
  );
}
