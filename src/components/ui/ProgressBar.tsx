"use client";

import { motion } from "motion/react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function ProgressBar({
  label,
  value,
  delayMs = 0,
}: {
  label: string;
  value: number;
  delayMs?: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted font-mono">{value}%</span>
      </div>
      <div className="bg-track h-1 overflow-hidden rounded-full">
        <motion.div
          className="h-full w-full origin-left rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: value / 100 }}
          transition={{
            duration: 1.2,
            ease: EASE,
            delay: (300 + delayMs) / 1000,
          }}
        />
      </div>
    </div>
  );
}
