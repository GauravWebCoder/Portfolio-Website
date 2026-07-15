"use client";

import { motion } from "motion/react";

const BLOBS = [
  {
    className: "top-[-15%] left-[-10%] size-[680px]",
    color: "rgba(124,102,255,.38)",
    duration: 28,
    x: [0, 80, -30, 0],
    y: [0, 50, 100, 0],
  },
  {
    className: "top-[20%] right-[-20%] size-[760px]",
    color: "rgba(169,150,255,.3)",
    duration: 34,
    x: [0, -70, 40, 0],
    y: [0, 80, -40, 0],
  },
  {
    className: "bottom-[-20%] left-[10%] size-[620px]",
    color: "rgba(124,102,255,.28)",
    duration: 24,
    x: [0, 50, -80, 0],
    y: [0, -70, 30, 0],
  },
];

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${blob.className}`}
          style={{
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 65%)`,
          }}
          animate={{ x: blob.x, y: blob.y }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
