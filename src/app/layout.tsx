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

// Only include links that point to an actual profile page, not a bare
// platform homepage (e.g. "https://twitter.com" with no handle) — schema.org
// sameAs should uniquely identify the person, and a bare domain does the
// opposite.
const sameAs = SOCIAL_LINKS.map((s) => s.href)
  .filter((href): href is string => Boolean(href))
  .filter((href) => new URL(href).pathname.replace(/\/$/, "").length > 0);

const personJsonLd = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Software Engineer",
  description: site.description,
  address: { "@type": "PostalAddress", addressRegion: site.location },
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#person` },
  inLanguage: "en",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, websiteJsonLd],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <AmbientBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
