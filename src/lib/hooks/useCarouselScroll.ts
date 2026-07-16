"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_SCROLL_SPEED = 0.1;
const RESUME_DELAY_MS = 1200;
const BUTTON_SCROLL_FRACTION = 0.85;

export function useCarouselScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const pauseAutoRef = useRef<() => void>(() => {});
  const scheduleResumeRef = useRef<() => void>(() => {});

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let direction: 1 | -1 = 1;
    let autoPaused = false;
    let resumeTimer: number | undefined;
    let position = el.scrollLeft;

    let isDragging = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const pauseAuto = () => {
      autoPaused = true;
      if (resumeTimer) window.clearTimeout(resumeTimer);
    };
    const scheduleResume = () => {
      if (resumeTimer) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        autoPaused = false;
      }, RESUME_DELAY_MS);
    };
    pauseAutoRef.current = pauseAuto;
    scheduleResumeRef.current = scheduleResume;

    const updateEdges = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScrollPrev(el.scrollLeft > 4);
      setCanScrollNext(el.scrollLeft < max - 4);
    };

    const tick = () => {
      if (!autoPaused && !isDragging) {
        const max = el.scrollWidth - el.clientWidth;
        if (max > 1) {
          position += AUTO_SCROLL_SPEED * direction;
          if (position >= max) {
            position = max;
            direction = -1;
          } else if (position <= 0) {
            position = 0;
            direction = 1;
          }
          el.scrollLeft = position;
        }
      } else {
        position = el.scrollLeft;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onEnter = () => pauseAuto();
    const onLeave = () => {
      if (!isDragging) scheduleResume();
    };
    const onTouchStart = () => pauseAuto();
    const onTouchEnd = () => scheduleResume();
    const onWheel = () => {
      pauseAuto();
      scheduleResume();
    };

    const onPointerDown = (e: PointerEvent) => {
      pauseAuto();
      if (e.pointerType !== "mouse") return;
      isDragging = true;
      dragMoved = false;
      dragStartX = e.clientX;
      dragStartScrollLeft = el.scrollLeft;
      el.classList.add("is-dragging");
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 4) dragMoved = true;
      if (dragMoved) el.scrollLeft = dragStartScrollLeft - dx;
    };
    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove("is-dragging");
      scheduleResume();
    };
    const onClickCapture = (e: MouseEvent) => {
      if (dragMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const onScroll = () => updateEdges();

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("scroll", onScroll, { passive: true });

    updateEdges();
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer) window.clearTimeout(resumeTimer);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollPrev = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    pauseAutoRef.current();
    el.scrollBy({
      left: -el.clientWidth * BUTTON_SCROLL_FRACTION,
      behavior: "smooth",
    });
    scheduleResumeRef.current();
  }, []);

  const scrollNext = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    pauseAutoRef.current();
    el.scrollBy({
      left: el.clientWidth * BUTTON_SCROLL_FRACTION,
      behavior: "smooth",
    });
    scheduleResumeRef.current();
  }, []);

  return { ref, canScrollPrev, canScrollNext, scrollPrev, scrollNext };
}
