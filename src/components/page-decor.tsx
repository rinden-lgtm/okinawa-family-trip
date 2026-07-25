"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Anchor,
  Cloud,
  Fish,
  Heart,
  Star,
  Sun,
  type LucideIcon,
} from "lucide-react";

const softBlobs: {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
}[] = [
  { top: "8%", left: "4%", size: 180, color: "bg-sunny/20" },
  { top: "18%", right: "2%", size: 220, color: "bg-gold/15" },
  { top: "32%", left: "-4%", size: 260, color: "bg-mint/15" },
  { top: "48%", right: "0%", size: 200, color: "bg-lavender/15" },
  { top: "62%", left: "6%", size: 240, color: "bg-hilton/10" },
  { top: "78%", right: "4%", size: 210, color: "bg-sunny/15" },
  { top: "90%", left: "10%", size: 180, color: "bg-gold/12" },
];

const bubbles = [
  { left: "8%", top: "12%", size: 14, delay: 0, duration: 7 },
  { left: "18%", top: "28%", size: 20, delay: 1.1, duration: 8.5 },
  { left: "86%", top: "20%", size: 16, delay: 0.6, duration: 7.8 },
  { left: "92%", top: "42%", size: 22, delay: 2.2, duration: 9 },
  { left: "6%", top: "55%", size: 18, delay: 1.5, duration: 8 },
  { left: "78%", top: "58%", size: 12, delay: 3, duration: 6.5 },
  { left: "14%", top: "72%", size: 24, delay: 0.3, duration: 9.5 },
  { left: "88%", top: "76%", size: 15, delay: 2.6, duration: 7.2 },
  { left: "10%", top: "88%", size: 18, delay: 1.8, duration: 8.2 },
  { left: "82%", top: "92%", size: 20, delay: 0.9, duration: 8.8 },
];

const icons: {
  Icon: LucideIcon;
  top: string;
  left?: string;
  right?: string;
  color: string;
  size: number;
  duration: number;
}[] = [
  { Icon: Heart, top: "15%", left: "3%", color: "text-gold/35", size: 22, duration: 5 },
  { Icon: Star, top: "24%", right: "4%", color: "text-sunny/40", size: 20, duration: 4.4 },
  { Icon: Fish, top: "38%", left: "2%", color: "text-hilton/30", size: 26, duration: 6 },
  { Icon: Anchor, top: "46%", right: "3%", color: "text-gold/30", size: 22, duration: 5.2 },
  { Icon: Sun, top: "60%", left: "4%", color: "text-sunny/35", size: 24, duration: 5.6 },
  { Icon: Cloud, top: "68%", right: "5%", color: "text-hilton/25", size: 28, duration: 6.4 },
  { Icon: Heart, top: "82%", left: "5%", color: "text-gold/30", size: 18, duration: 4.8 },
  { Icon: Star, top: "88%", right: "6%", color: "text-mint/40", size: 20, duration: 5.1 },
];

export function PageDecor() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="page-dot-pattern absolute inset-0 opacity-70" />

      {softBlobs.map((blob, index) => (
        <div
          key={`blob-${index}`}
          className={`absolute rounded-full blur-3xl ${blob.color}`}
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            width: blob.size,
            height: blob.size,
          }}
        />
      ))}

      {bubbles.map((bubble, index) =>
        reduce ? (
          <span
            key={`pb-${index}`}
            className="soap-bubble opacity-40"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.size,
              height: bubble.size,
            }}
          />
        ) : (
          <motion.span
            key={`pb-${index}`}
            className="soap-bubble"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 10, 0, -8, 0],
              opacity: [0.35, 0.7, 0.55, 0.75, 0.35],
              scale: [1, 1.08, 1, 1.05, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      )}

      {icons.map(({ Icon, top, left, right, color, size, duration }, index) =>
        reduce ? (
          <span
            key={`pi-${index}`}
            className={`page-decor-icon absolute ${color}`}
            style={{ top, left, right }}
          >
            <Icon style={{ width: size, height: size }} strokeWidth={1.8} />
          </span>
        ) : (
          <motion.span
            key={`pi-${index}`}
            className={`page-decor-icon absolute ${color}`}
            style={{ top, left, right }}
            animate={{
              y: [0, -14, 0, 10, 0],
              rotate: [0, index % 2 === 0 ? 8 : -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration,
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              style={{ width: size, height: size }}
              strokeWidth={1.8}
              fill="currentColor"
              fillOpacity={0.2}
            />
          </motion.span>
        )
      )}
    </div>
  );
}
