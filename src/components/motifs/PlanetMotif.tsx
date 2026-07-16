"use client";

import { motion } from "motion/react";
import { OrbitRings } from "./OrbitRings";

export function PlanetMotif({ size = 120 }: { size?: number | string }) {
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, transparent 38%, rgba(124,102,255,.35) 42%, transparent 66%)",
        }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute rounded-full"
        style={{
          inset: 22,
          background: "#050409",
          boxShadow:
            "0 0 40px 4px rgba(124,102,255,.6), inset 0 0 22px rgba(0,0,0,.9)",
        }}
      />
      <OrbitRings inset="8px" duration={14} />
    </div>
  );
}
