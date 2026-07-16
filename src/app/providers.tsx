"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import { PageTransitionProvider } from "@/components/layout/PageTransitionProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Curtain } from "@/components/layout/Curtain";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
    >
      <MotionConfig reducedMotion="user">
        <PageTransitionProvider>
          <CustomCursor />
          <Nav />
          <main className="relative z-[1] flex-1">{children}</main>
          <Footer />
          <Curtain />
        </PageTransitionProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
