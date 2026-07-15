"use client";

import { useEffect } from "react";
import { usePageTransition } from "@/components/layout/PageTransitionProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  const { onRouteMounted } = usePageTransition();

  useEffect(() => {
    onRouteMounted();
  }, [onRouteMounted]);

  return <>{children}</>;
}
