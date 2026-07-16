"use client";

import { motion } from "motion/react";
import { useParallax } from "@/lib/hooks/useParallax";
import { OrbitRings } from "./OrbitRings";

export function Eclipse() {
  const y = useParallax(0.15);

  return (
    <div
      aria-hidden="true"
      className="eclipse-wrap pointer-events-none absolute top-[44%] right-[-8%] z-0 hidden size-[min(78vh,820px)] -translate-y-1/2 md:block"
    >
      <motion.div style={{ y, position: "relative", width: "100%", height: "100%" }}>
        <div
          className="absolute inset-0 rounded-full blur-[4px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(169,150,255,.55), rgba(124,102,255,.18) 34%, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-[6%] rounded-full"
          style={{
            background: "radial-gradient(circle at 64% 40%, #181528, #08060e 58%)",
            boxShadow:
              "inset -30px -30px 120px rgba(0,0,0,.9), -6px -8px 60px 2px rgba(200,190,255,.45), 0 0 140px 10px rgba(124,102,255,.25)",
          }}
        />
        <OrbitRings inset="20%" duration={60} />
      </motion.div>
    </div>
  );
}
