"use client";

import { usePageTransition, COVER_SLIDE_MS } from "./PageTransitionProvider";

export function Curtain() {
  const { phase, label, labelVisible } = usePageTransition();

  const transform =
    phase === "covering"
      ? "translate3d(0, 0, 0)"
      : phase === "revealing"
        ? "translate3d(0, -100%, 0)"
        : "translate3d(0, 100%, 0)";

  const transition =
    phase === "idle"
      ? "none"
      : `transform ${COVER_SLIDE_MS}ms cubic-bezier(.76,0,.24,1)`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 900,
        background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
        transform,
        transition,
        willChange: "transform",
        backfaceVisibility: "hidden",
        pointerEvents: phase === "idle" ? "none" : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: "clamp(28px, 5vw, 54px)",
          color: "#fff",
          letterSpacing: "-.02em",
          opacity: labelVisible ? 1 : 0,
          transform: labelVisible
            ? "translateY(0) scale(1)"
            : "translateY(10px) scale(0.94)",
          transition:
            "opacity 380ms cubic-bezier(.2,.7,.2,1), transform 500ms cubic-bezier(.2,.7,.2,1)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
