import type { Metadata } from "next";
import { sora, jetbrainsMono } from "@/lib/fonts";
import { Providers } from "./providers";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { site } from "@/data/site";
import { SOCIAL_LINKS } from "@/data/contact";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Gaurav Mathpal",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Portfolio",
    "B.Tech CSE",
    "Computer Science Student",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  formatDetection: { email: false, address: false, telephone: false },
};

const sameAs = SOCIAL_LINKS.map((s) => s.href).filter((href): href is string => Boolean(href));

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Software Engineer",
  description: site.description,
  address: { "@type": "PostalAddress", addressRegion: site.location },
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <AmbientBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
