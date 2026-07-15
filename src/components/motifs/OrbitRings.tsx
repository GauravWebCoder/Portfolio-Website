"use client";

import { motion } from "motion/react";

export function OrbitRings({
  inset = "8px",
  duration = 14,
  color = "rgba(169,150,255,.4)",
}: {
  inset?: string;
  duration?: number;
  color?: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full border"
      style={{ inset, borderColor: color }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
  );
}
