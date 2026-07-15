"use client";

import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { motion } from "motion/react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  trigger?: "inView" | "mount";
  className?: string;
  as?: "div" | "span";
};

export function Reveal({
  children,
  delay = 0,
  trigger = "inView",
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  const target = { opacity: 1, y: 0, filter: "blur(0px)" };
  const animateProp =
    trigger === "mount"
      ? { animate: target }
      : { whileInView: target, viewport: { once: true, amount: 0.12 } };

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
      {...animateProp}
      transition={{ duration: 0.8, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  baseDelay = 0,
  step = 80,
  trigger = "inView",
  className,
}: {
  children: ReactNode;
  baseDelay?: number;
  step?: number;
  trigger?: "inView" | "mount";
  className?: string;
}) {
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <>
      {items.map((child, i) => (
        <Reveal
          key={isValidElement(child) && child.key ? child.key : i}
          delay={baseDelay + i * step}
          trigger={trigger}
          className={className}
        >
          {cloneElement(child)}
        </Reveal>
      ))}
    </>
  );
}
