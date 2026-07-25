"use client";

import { Calendar, MapPin, Sparkles, Hotel } from "lucide-react";
import trip from "@/data/trip.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn } from "@/components/motion/reveal";

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="section-pad scroll-mt-20 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Overview"
            title="旅行概要"
            description="家族みんなで過ごす、瀬底の4日間"
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          <SlideIn>
            <Card className="h-full p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-hilton">
                <Calendar className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <h3 className="font-display text-xl tracking-wide">日程</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {trip.days.map((day) => (
                  <div
                    key={day.date}
                    className="rounded-xl bg-hilton-soft/70 px-3 py-4 text-center"
                  >
                    <p className="font-display text-lg text-hilton">
                      {day.date}
                    </p>
                    <p className="mt-1 text-xs text-muted">（{day.weekday}）</p>
                  </div>
                ))}
              </div>
            </Card>
          </SlideIn>

          <SlideIn from="right" delay={0.08}>
            <Card className="h-full p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-hilton">
                <Hotel className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <h3 className="font-display text-xl tracking-wide">宿泊</h3>
              </div>
              <p className="text-base leading-relaxed text-foreground">
                {trip.hotel}
              </p>
              <div className="mt-6 flex items-start gap-2 text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm">{trip.location}</p>
              </div>
            </Card>
          </SlideIn>
        </div>

        <FadeIn delay={0.12}>
          <Card className="mt-4 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3 text-hilton">
              <Sparkles className="h-5 w-5 text-gold" strokeWidth={1.6} />
              <h3 className="font-display text-xl tracking-wide">テーマ</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {trip.themes.map((theme) => (
                <span
                  key={theme}
                  className="border border-gold/40 bg-gold-muted px-4 py-2 text-sm tracking-wide text-hilton"
                >
                  {theme}
                </span>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
