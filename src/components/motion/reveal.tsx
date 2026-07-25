"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40, rotate: -1.5 },
  visible: { opacity: 1, x: 0, rotate: 0 },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40, rotate: 1.5 },
  visible: { opacity: 1, x: 0, rotate: 0 },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1 },
};

function useMotionSafe() {
  return useReducedMotion();
}

export function FadeIn({ children, className, delay = 0 }: MotionProps) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeVariants}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
  delay = 0,
  from = "left",
}: MotionProps & { from?: "left" | "right" }) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={from === "left" ? slideLeftVariants : slideRightVariants}
      transition={{ type: "spring", stiffness: 130, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0 }: MotionProps) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scaleVariants}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay }}
    >
      {children}
    </motion.div>
  );
}
