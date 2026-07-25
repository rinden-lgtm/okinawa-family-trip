"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import trip from "@/data/trip.json";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1559128010-7c1adfe9a123?auto=format&fit=crop&w=2400&q=85"
        alt="沖縄・瀬底の海とサンセット"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 w-full section-pad pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-5 text-[11px] uppercase tracking-[0.35em] text-gold-light md:text-xs"
          >
            {trip.tagline}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.35rem] leading-[1.1] tracking-[0.08em] md:text-6xl lg:text-7xl"
          >
            {trip.title}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-sm tracking-[0.22em] text-white/90 md:text-base"
          >
            {trip.dates}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex justify-center"
          >
            <a
              href="#toc"
              className="group inline-flex flex-col items-center gap-2 text-white/80 transition hover:text-white"
              aria-label="目次へスクロール"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">
                Guide
              </span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
