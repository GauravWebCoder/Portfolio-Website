"use client";

import { useEffect, useRef } from "react";
import { useFinePointer } from "@/lib/hooks/useFinePointer";
import { useReducedMotion } from "motion/react";

export function CustomCursor() {
  const isFinePointer = useFinePointer();
  const reduceMotion = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const active = isFinePointer && !reduceMotion;

  useEffect(() => {
    if (!active) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("cursor-none-desktop");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    dot.style.opacity = "1";
    ring.style.opacity = "1";

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(loop);
    };

    const grow = () => ring.classList.add("cursor-ring--active");
    const shrink = () => ring.classList.remove("cursor-ring--active");

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.("[data-cursor]")) grow();
    };
    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (
        (e.target as HTMLElement).closest?.("[data-cursor]") &&
        !related?.closest?.("[data-cursor]")
      ) {
        shrink();
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    loop();

    return () => {
      document.body.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 38,
          height: 38,
          border: "1px solid var(--accent-2)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999,
          transform: "translate(-50%, -50%)",
          transition:
            "width .25s ease, height .25s ease, background .25s ease, opacity .3s ease",
          opacity: 0,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          background: "var(--accent-2)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999,
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />
    </>
  );
}
