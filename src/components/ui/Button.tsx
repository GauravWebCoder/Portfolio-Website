"use client";

import type { Ref, ReactNode } from "react";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  icon?: ReactNode;
  magnetic?: boolean;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClass =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-[15px] font-semibold transition-shadow";

const variantClass = {
  solid: "border-none text-white shadow-[0_10px_30px_-8px_var(--accent)]",
  outline: "border border-brd-2 bg-bg-2 text-fg",
};

const variantStyle = {
  solid: {
    background: "linear-gradient(100deg, var(--accent), var(--accent-2))",
  },
  outline: undefined,
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "solid",
    icon,
    magnetic = true,
    className,
  } = props;
  const {
    ref,
    onMouseMove,
    onMouseLeave,
    style: magneticStyle,
  } = useMagnetic<HTMLElement>();

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  const classes = cn(baseClass, variantClass[variant], className);
  const style = {
    ...variantStyle[variant],
    ...(magnetic ? magneticStyle : {}),
  };
  const magneticHandlers = magnetic ? { onMouseMove, onMouseLeave } : {};

  if ("href" in props && props.href) {
    return (
      <TransitionLink
        ref={magnetic ? (ref as Ref<HTMLAnchorElement>) : undefined}
        href={props.href}
        data-cursor="1"
        className={classes}
        style={style}
        {...magneticHandlers}
      >
        {content}
      </TransitionLink>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      ref={magnetic ? (ref as Ref<HTMLButtonElement>) : undefined}
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      data-cursor="1"
      className={classes}
      style={style}
      {...magneticHandlers}
    >
      {content}
    </button>
  );
}
