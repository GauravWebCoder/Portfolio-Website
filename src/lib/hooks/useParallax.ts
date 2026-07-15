"use client";

import { useScroll, useTransform, useReducedMotion } from "motion/react";

export function useParallax(factor: number) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  return useTransform(scrollY, (v) => (reduceMotion ? 0 : v * factor));
}
