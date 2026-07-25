"use client";

import { useState } from "react";
import {
  Plane,
  PlaneLanding,
  Hotel,
  Sunset,
  Moon,
  Heart,
  Utensils,
  Sparkles,
  DoorOpen,
  Car,
  Home,
  Sun,
  Map,
  Wine,
  type LucideIcon,
} from "lucide-react";
import scheduleData from "@/data/schedule.json";
import type { ScheduleItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn } from "@/components/motion/reveal";

const iconMap: Record<string, LucideIcon> = {
  plane: Plane,
  "plane-landing": PlaneLanding,
  hotel: Hotel,
  sunset: Sunset,
  moon: Moon,
  heart: Heart,
  utensils: Utensils,
  sparkles: Sparkles,
  "door-open": DoorOpen,
  car: Car,
  home: Home,
  sun: Sun,
  map: Map,
  wine: Wine,
};

function Timeline({ items }: { items: ScheduleItem[] }) {
  return (
    <ol className="relative space-y-0">
      {items.map((item, index) => {
        const Icon = item.icon ? iconMap[item.icon] ?? Sparkles : Sparkles;
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.title}-${index}`} className="relative flex gap-4 pb-8 last:pb-0">
            {!isLast ? (
              <span className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-gold/60 to-border" />
            ) : null}
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold-muted text-hilton">
              <Icon className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <div className="min-w-0 flex-1 pt-1">
              {item.time ? (
                <p className="text-xs tracking-[0.18em] text-gold">{item.time}</p>
              ) : null}
              <h4 className="mt-1 font-display text-lg tracking-wide text-hilton">
                {item.title}
              </h4>
              {item.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function ScheduleSection() {
  const days = scheduleData.days;
  const [activeDay, setActiveDay] = useState(days[0]?.id ?? "day1");
  const current = days.find((d) => d.id === activeDay) ?? days[0];

  return (
    <section
      id="schedule"
      className="section-pad scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Itinerary"
            title="スケジュール"
            description="日ごとに切り替えて旅程を確認できます"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {days.map((day) => (
              <button
                key={day.id}
                type="button"
                onClick={() => setActiveDay(day.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2.5 text-left transition",
                  activeDay === day.id
                    ? "border-hilton bg-hilton text-white shadow-[0_8px_24px_rgba(0,58,112,0.2)]"
                    : "border-border bg-white text-hilton hover:border-hilton/30 hover:bg-hilton-soft"
                )}
              >
                <span className="block text-xs tracking-wider opacity-80">
                  {day.label}
                </span>
                <span className="mt-0.5 block text-sm font-medium">
                  {day.date}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <SlideIn key={current.id}>
          <Card className="p-6 md:p-8">
            <div className="mb-8 border-b border-border pb-5">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">
                {current.label}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-wide text-hilton">
                {current.date}
              </h3>
              {current.subtitle ? (
                <p className="mt-2 text-sm text-muted">{current.subtitle}</p>
              ) : null}
            </div>

            {"tabs" in current && current.tabs ? (
              <Tabs defaultValue={current.tabs[0]?.id}>
                <TabsList className="w-full sm:w-auto">
                  {current.tabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id} className="flex-1 sm:flex-none">
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {current.tabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id}>
                    <Timeline items={tab.items} />
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <Timeline items={current.items ?? []} />
            )}
          </Card>
        </SlideIn>
      </div>
    </section>
  );
}
