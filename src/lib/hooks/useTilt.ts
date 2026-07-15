"use client";

import { useCallback, useRef, type CSSProperties, type PointerEvent } from "react";
import { useFinePointer } from "./useFinePointer";

const MAX_TILT_DEG = 7;

export function useTilt<T extends HTMLElement>(baseRotateDeg = 0) {
  const ref = useRef<T | null>(null);
  const isFinePointer = useFinePointer();
  const restTransform = `rotate(${baseRotateDeg}deg)`;

  const onPointerMove = useCallback(
    (e: PointerEvent<T>) => {
      if (!isFinePointer || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = px * MAX_TILT_DEG * 2;
      const rotateX = -py * MAX_TILT_DEG * 2;
      ref.current.style.transition = "transform 80ms ease-out";
      ref.current.style.transform =
        `perspective(900px) rotate(${baseRotateDeg}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.03)`;
    },
    [isFinePointer, baseRotateDeg],
  );

  const onPointerLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 450ms cubic-bezier(.2,.7,.2,1)";
    ref.current.style.transform = restTransform;
  }, [restTransform]);

  const style: CSSProperties = {
    transform: restTransform,
    transition: "transform 450ms cubic-bezier(.2,.7,.2,1)",
  };

  return { ref, onPointerMove, onPointerLeave, style };
}
