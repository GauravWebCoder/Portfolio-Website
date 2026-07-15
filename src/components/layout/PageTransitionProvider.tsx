"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "motion/react";

type Phase = "idle" | "covering" | "revealing";

type PageTransitionContextValue = {
  phase: Phase;
  label: string;
  labelVisible: boolean;
  beginNavigation: (href: string, label: string) => void;
  onRouteMounted: () => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export const COVER_SLIDE_MS = 550;
const LABEL_DELAY_MS = 200;
// Extra hold after the curtain is fully closed AND the route has mounted,
// so the label reads as a deliberate beat rather than a flicker — kept
// short on purpose: the curtain being fully opaque is what hides the
// route swap, not this delay.
const HOLD_MS = 350;
const REVEAL_DELAY_MS = 80;
const RESET_MS = COVER_SLIDE_MS + 20;

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const [labelVisible, setLabelVisible] = useState(false);

  const navigatingRef = useRef(false);
  const routeReadyRef = useRef(false);
  const minCoverElapsedRef = useRef(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const proceedToReveal = useCallback(() => {
    setLabelVisible(false);
    const t1 = window.setTimeout(() => {
      setPhase("revealing");
      const t2 = window.setTimeout(() => {
        setPhase("idle");
        navigatingRef.current = false;
      }, RESET_MS);
      timers.current.push(t2);
    }, REVEAL_DELAY_MS);
    timers.current.push(t1);
  }, []);

  const maybeProceed = useCallback(() => {
    if (routeReadyRef.current && minCoverElapsedRef.current) {
      proceedToReveal();
    }
  }, [proceedToReveal]);

  const beginNavigation = useCallback(
    (href: string, navLabel: string) => {
      // Already on this route — pushing again wouldn't remount template.tsx,
      // so onRouteMounted would never fire and the curtain would get stuck
      // covering forever. Nothing to transition to, so no-op.
      if (href === pathname) return;
      if (navigatingRef.current) return;
      navigatingRef.current = true;
      routeReadyRef.current = false;
      minCoverElapsedRef.current = false;
      setLabel(navLabel);
      setLabelVisible(false);

      if (reduceMotion) {
        setPhase("idle");
        router.push(href);
        navigatingRef.current = false;
        return;
      }

      setPhase("covering");

      const tLabel = window.setTimeout(() => setLabelVisible(true), LABEL_DELAY_MS);
      // Only swap the route once the curtain has fully covered the viewport —
      // pushing immediately let the new page mount (and flash through the
      // still-rising curtain) before it was actually opaque.
      const tPush = window.setTimeout(() => {
        router.push(href);
      }, COVER_SLIDE_MS);
      const tMinCover = window.setTimeout(() => {
        minCoverElapsedRef.current = true;
        maybeProceed();
      }, COVER_SLIDE_MS + HOLD_MS);
      timers.current.push(tLabel, tPush, tMinCover);
    },
    [reduceMotion, router, pathname, maybeProceed],
  );

  const onRouteMounted = useCallback(() => {
    if (!navigatingRef.current) return;
    routeReadyRef.current = true;
    maybeProceed();
  }, [maybeProceed]);

  useEffect(() => clearTimers, [clearTimers]);

  return (
    <PageTransitionContext.Provider
      value={{ phase, label, labelVisible, beginNavigation, onRouteMounted }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }
  return ctx;
}
