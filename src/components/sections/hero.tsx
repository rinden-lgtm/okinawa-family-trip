"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Heart, Star, Sun } from "lucide-react";
import trip from "@/data/trip.json";

const bubbles = [
  { left: "6%", size: 18, delay: 0, duration: 11, drift: 18, tint: "rgba(255,201,74,0.12)" },
  { left: "14%", size: 28, delay: 1.2, duration: 14, drift: -22, tint: "rgba(255,107,92,0.1)" },
  { left: "22%", size: 14, delay: 3.5, duration: 10, drift: 12, tint: "rgba(62,207,154,0.12)" },
  { left: "32%", size: 36, delay: 0.8, duration: 16, drift: -16, tint: "rgba(123,140,255,0.1)" },
  { left: "45%", size: 20, delay: 2.4, duration: 12, drift: 20, tint: "rgba(255,255,255,0.08)" },
  { left: "58%", size: 24, delay: 1.6, duration: 13, drift: -14, tint: "rgba(10,160,192,0.12)" },
  { left: "68%", size: 16, delay: 4.1, duration: 11, drift: 16, tint: "rgba(255,201,74,0.14)" },
  { left: "76%", size: 42, delay: 0.4, duration: 17, drift: -24, tint: "rgba(255,107,92,0.08)" },
  { left: "86%", size: 22, delay: 2.8, duration: 12, drift: 10, tint: "rgba(62,207,154,0.1)" },
  { left: "92%", size: 14, delay: 5.2, duration: 9, drift: -12, tint: "rgba(255,255,255,0.1)" },
  { left: "40%", size: 12, delay: 6, duration: 10, drift: 8, tint: "rgba(123,140,255,0.12)" },
  { left: "10%", size: 10, delay: 7.5, duration: 9, drift: -10, tint: "rgba(255,143,122,0.12)" },
];

const floatIcons = [
  {
    Icon: Heart,
    className: "left-[12%] top-[30%] text-gold-light",
    size: 22,
    animate: { y: [0, -18, 0], rotate: [0, -8, 0], scale: [1, 1.12, 1] },
    duration: 4.5,
  },
  {
    Icon: Star,
    className: "right-[14%] top-[22%] text-sunny",
    size: 20,
    animate: { y: [0, 14, 0], rotate: [0, 15, 0], scale: [1, 1.15, 1] },
    duration: 3.8,
  },
  {
    Icon: Heart,
    className: "right-[22%] bottom-[28%] text-white/80",
    size: 16,
    animate: { y: [0, -12, 0], x: [0, 8, 0] },
    duration: 5.2,
  },
  {
    Icon: Star,
    className: "left-[18%] bottom-[24%] text-mint",
    size: 18,
    animate: { y: [0, 10, 0], rotate: [0, -12, 0] },
    duration: 4.2,
  },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const mobileBubbles = bubbles.slice(0, 6);

  return (
    <section className="relative flex min-h-[100svh] min-h-[100dvh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85"
        alt="沖縄の明るいビーチ"
        fill
        priority
        className="object-cover object-[center_35%] scale-105 md:object-[center_40%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hilton/40 via-gold/30 to-hilton-deep/75" />

      {!reduce ? (
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
          {mobileBubbles.map((bubble, index) => (
            <motion.span
              key={`bubble-m-${index}`}
              className="soap-bubble md:hidden"
              style={{
                left: bubble.left,
                bottom: -48,
                width: Math.max(12, bubble.size - 6),
                height: Math.max(12, bubble.size - 6),
                backgroundImage: `radial-gradient(circle at 30% 28%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.08) 42%, ${bubble.tint} 100%)`,
              }}
              initial={{ y: 0, opacity: 0, scale: 0.7 }}
              animate={{
                y: [0, "-115vh"],
                x: [0, bubble.drift, 0],
                opacity: [0, 0.7, 0],
                scale: [0.75, 1, 0.9],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          {bubbles.map((bubble, index) => (
            <motion.span
              key={`bubble-d-${index}`}
              className="soap-bubble hidden md:block"
              style={{
                left: bubble.left,
                bottom: -48,
                width: bubble.size,
                height: bubble.size,
                backgroundImage: `radial-gradient(circle at 30% 28%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.08) 42%, ${bubble.tint} 100%)`,
              }}
              initial={{ y: 0, opacity: 0, scale: 0.7 }}
              animate={{
                y: [0, "-115vh"],
                x: [0, bubble.drift, -bubble.drift * 0.5, bubble.drift * 0.3, 0],
                opacity: [0, 0.8, 0.9, 0.7, 0],
                scale: [0.75, 1, 1.08, 1, 0.85],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {floatIcons.map(({ Icon, className, size, animate, duration }, index) => (
            <motion.span
              key={`icon-${index}`}
              className={`absolute hidden drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] md:block ${className}`}
              animate={animate}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <Icon
                style={{ width: size, height: size }}
                strokeWidth={2.2}
                fill="currentColor"
                fillOpacity={0.35}
              />
            </motion.span>
          ))}
        </div>
      ) : null}

      <div className="relative z-10 w-full section-pad pb-[max(5rem,env(safe-area-inset-bottom))] pt-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border-2 border-white/50 bg-white/25 px-3 py-1.5 shadow-lg backdrop-blur-md md:mb-6 md:px-4 md:py-2"
          >
            <Sun className="h-3.5 w-3.5 shrink-0 text-sunny md:h-4 md:w-4" />
            <span className="truncate text-[11px] font-bold tracking-wide md:text-sm">
              {trip.tagline}
            </span>
            <Heart
              className="h-3.5 w-3.5 shrink-0 text-gold-light md:h-4 md:w-4"
              fill="currentColor"
            />
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.25 }}
            className="font-display text-[clamp(1.85rem,8vw,4.5rem)] leading-[1.08] font-semibold text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
          >
            {trip.title}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.45 }}
            className="mt-5 inline-block rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-wide text-hilton-deep shadow-lg md:mt-6 md:px-5 md:py-2.5 md:text-base"
          >
            {trip.dates}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.58 }}
            className="mx-auto mt-5 max-w-md px-1 text-sm font-medium leading-relaxed text-pretty text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:mt-6 md:text-base"
          >
            {trip.thanks}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex justify-center md:mt-12"
          >
            <a
              href="#toc"
              className="group inline-flex min-h-11 flex-col items-center gap-2 text-white transition active:scale-95"
              aria-label="目次へスクロール"
            >
              <span className="rounded-full bg-gold px-5 py-2.5 text-[11px] font-extrabold tracking-wider shadow-[0_8px_20px_rgba(255,107,92,0.45)]">
                LET&apos;S GO!
              </span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
