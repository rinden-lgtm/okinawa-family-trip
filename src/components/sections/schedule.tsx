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
import rentalCars from "@/data/rental-cars.json";
import type { ScheduleItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn } from "@/components/motion/reveal";
import { SameDayArrivalNotice } from "@/components/same-day-arrival-notice";

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
  const tones = [
    "bg-hilton-soft text-hilton border-hilton/20",
    "bg-gold-muted text-gold border-gold/20",
    "bg-sunny-soft text-[#c27803] border-sunny/30",
    "bg-mint-soft text-mint border-mint/20",
    "bg-lavender-soft text-lavender border-lavender/20",
  ];

  return (
    <ol className="relative space-y-0">
      {items.map((item, index) => {
        const Icon = item.icon ? iconMap[item.icon] ?? Sparkles : Sparkles;
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.title}-${index}`} className="relative flex gap-3 pb-7 last:pb-0 sm:gap-4 sm:pb-8">
            {!isLast ? (
              <span className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-[3px] rounded-full bg-gradient-to-b from-hilton via-sunny to-gold" />
            ) : null}
            <span
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border-2 ${tones[index % tones.length]}`}
            >
              <Icon className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <div
              className={cn(
                "min-w-0 flex-1 pt-1",
                item.alert &&
                  "rounded-2xl border-2 border-gold bg-gold-muted px-4 py-3"
              )}
            >
              {item.time ? (
                <p
                  className={cn(
                    "font-bold tracking-wide text-gold",
                    item.alert ? "font-display text-2xl" : "text-xs"
                  )}
                >
                  {item.time}
                </p>
              ) : null}
              <h4 className="mt-1 font-display text-lg font-semibold leading-snug text-hilton-deep">
                {item.title}
              </h4>
              {item.description ? (
                <p
                  className={cn(
                    "mt-1.5 text-[15px] leading-relaxed sm:text-sm",
                    item.alert
                      ? "font-bold text-hilton-deep"
                      : "font-medium text-muted"
                  )}
                >
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
      className="section-pad section-block"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Itinerary"
            title="スケジュール"
            description="Dayをタップして、その日の予定をチェック！"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {days.map((day) => (
              <button
                key={day.id}
                type="button"
                onClick={() => setActiveDay(day.id)}
                className={cn(
                  "min-h-14 min-w-0 rounded-2xl border-2 px-3 py-2.5 text-center font-bold transition active:scale-95 sm:px-3 sm:text-left",
                  activeDay === day.id
                    ? "border-hilton bg-hilton text-white shadow-[0_8px_24px_rgba(10,160,192,0.35)]"
                    : "border-border bg-white text-hilton-deep hover:border-hilton/40 hover:bg-hilton-soft"
                )}
              >
                <span className="block text-xs tracking-wider opacity-80">
                  {day.label}
                </span>
                <span className="mt-0.5 block text-sm leading-tight">{day.date}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        <SlideIn key={current.id}>
          <Card className="p-4 sm:p-6 md:p-8">
            <div className="mb-8 border-b border-border pb-5">
              <p className="inline-flex rounded-full bg-gold-muted px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
                {current.label}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-hilton-deep">
                {current.date}
              </h3>
              {current.subtitle ? (
                <p className="mt-2 text-sm font-medium text-muted">{current.subtitle}</p>
              ) : null}
            </div>

            {current.id === "day2" ? (
              <div className="mb-8">
                <SameDayArrivalNotice />
              </div>
            ) : null}

            <Timeline
              items={
                "items" in current && Array.isArray(current.items)
                  ? current.items
                  : []
              }
            />
          </Card>
        </SlideIn>

        <FadeIn delay={0.08}>
          <Card className="mt-6 overflow-hidden p-0">
            <div className="border-b border-border bg-gradient-to-r from-hilton-soft via-mint-soft to-sunny-soft px-4 py-4 sm:px-5 sm:py-5 md:px-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-hilton shadow-sm">
                  <Car className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-hilton-deep">
                    {rentalCars.title}
                  </h3>
                  <p className="mt-1 whitespace-pre-line text-sm font-medium leading-relaxed text-hilton-deep/80">
                    {rentalCars.note}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              {rentalCars.periods.map((period) => (
                <div
                  key={period.id}
                  className="border-b border-border px-4 py-4 last:border-b-0 sm:px-5 sm:py-5 md:border-b-0 md:px-8 md:py-6 md:odd:border-r"
                >
                  <p className="text-xs font-extrabold tracking-wide text-gold">
                    {period.label}
                  </p>
                  <p className="mt-1 whitespace-pre-line font-display text-lg font-semibold leading-snug text-hilton-deep">
                    {period.summary}
                  </p>
                  {period.vehicles.every((vehicle) => "count" in vehicle && vehicle.count) ? (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {period.vehicles.map((vehicle) => (
                        <div
                          key={`${period.id}-${vehicle.type}`}
                          className={cn(
                            "min-w-0 rounded-2xl px-2 py-3 text-center",
                            vehicle.assignment
                              ? "border-2 border-gold bg-gold-muted"
                              : "bg-hilton-soft"
                          )}
                        >
                          <p className="text-[11px] font-extrabold leading-tight text-hilton">
                            {vehicle.type}
                          </p>
                          <p className="mt-1 font-display text-[1.75rem] font-semibold leading-none text-hilton-deep">
                            {"count" in vehicle ? vehicle.count : ""}
                          </p>
                          {vehicle.assignment ? (
                            <p className="mt-2 text-[13px] font-extrabold leading-snug text-hilton-deep">
                              {vehicle.assignment}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                  <ul className="mt-4 space-y-3">
                    {period.vehicles.map((vehicle) => (
                      <li
                        key={`${period.id}-${vehicle.no}`}
                        className="min-w-0 rounded-2xl bg-hilton-soft/50 px-3 py-3 sm:px-4"
                      >
                        <p className="text-[15px] font-extrabold leading-snug text-hilton-deep sm:text-sm">
                          {vehicle.no ? (
                            <span className="mr-1.5 text-gold">{vehicle.no}</span>
                          ) : null}
                          {vehicle.type}
                        </p>
                        {vehicle.assignment ? (
                          <p className="mt-1 whitespace-pre-line text-[15px] font-medium leading-relaxed text-muted sm:text-sm">
                            {vehicle.assignment}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
