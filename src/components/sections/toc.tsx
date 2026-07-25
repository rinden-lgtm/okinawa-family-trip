"use client";

import {
  BookOpen,
  Building2,
  Heart,
  Ship,
  Banknote,
  CalendarDays,
  BedDouble,
  Phone,
  MapPinned,
  Car,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn } from "@/components/motion/reveal";

const items: {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
  tone: string;
}[] = [
  {
    href: "#overview",
    label: "????",
    description: "?????????",
    icon: BookOpen,
    tone: "bg-hilton-soft text-hilton",
  },
  {
    href: "#hotel",
    label: "???",
    description: "????????",
    icon: Building2,
    tone: "bg-mint-soft text-mint",
  },
  {
    href: "#wedding",
    label: "?????",
    description: "11/1 ???",
    icon: Heart,
    tone: "bg-sunny-soft text-[#d97706]",
  },
  {
    href: "#cruise",
    label: "????",
    description: "11/2 ?????",
    icon: Ship,
    tone: "bg-lavender-soft text-lavender",
  },
  {
    href: "#payment",
    label: "????",
    description: "??????",
    icon: Banknote,
    tone: "bg-mint-soft text-mint",
  },
  {
    href: "#schedule",
    label: "??????",
    description: "??????",
    icon: CalendarDays,
    tone: "bg-hilton-soft text-hilton-deep",
  },
  {
    href: "#rooms",
    label: "????",
    description: "????????",
    icon: BedDouble,
    tone: "bg-gold-muted text-gold",
  },
  {
    href: "#map",
    label: "MAP",
    description: "??????",
    icon: MapPinned,
    tone: "bg-lavender-soft text-lavender",
  },
  {
    href: "#spots",
    label: "????",
    description: "???????",
    icon: Car,
    tone: "bg-mint-soft text-mint",
  },
  {
    href: "#contacts",
    label: "?????",
    description: "?????????",
    icon: Phone,
    tone: "bg-sunny-soft text-[#d97706]",
  },
];

export function TocSection() {
  return (
    <section id="toc" className="section-pad section-block">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Contents"
            title="??"
            description="????????????????"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScaleIn key={item.href} delay={index * 0.05}>
                <a href={item.href} className="block h-full active:scale-[0.98]">
                  <Card className="flex h-full min-h-[7.5rem] flex-col items-start gap-3 p-4 sm:p-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.tone}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-hilton-deep sm:text-lg">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-medium text-muted sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </a>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
