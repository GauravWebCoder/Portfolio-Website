"use client";

import {
  useCallback,
  useRef,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { useFinePointer } from "./useFinePointer";

const STRENGTH_X = 0.3;
const STRENGTH_Y = 0.4;

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isFinePointer = useFinePointer();

  const onMouseMove = useCallback(
    (e: MouseEvent<T>) => {
      if (!isFinePointer || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      ref.current.style.transform = `translate(${x * STRENGTH_X}px, ${y * STRENGTH_Y}px)`;
    },
    [isFinePointer],
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }, []);

  const style: CSSProperties = {
    transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
  };

  return { ref, onMouseMove, onMouseLeave, style };
}
