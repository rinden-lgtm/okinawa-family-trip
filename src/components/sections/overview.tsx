"use client";

import { Calendar, MapPin, Hotel } from "lucide-react";
import trip from "@/data/trip.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn } from "@/components/motion/reveal";

const dayTones = [
  "bg-hilton-soft text-hilton-deep",
  "bg-gold-muted text-gold",
  "bg-sunny-soft text-[#c27803]",
  "bg-mint-soft text-[#0f9f6e]",
];

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="section-pad section-block"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Overview"
            title="旅行概要"
            description="家族みんなで楽しむ、瀬底のわくわく4日間"
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          <SlideIn>
            <Card className="h-full p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-hilton-deep">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-hilton-soft">
                  <Calendar className="h-5 w-5 text-hilton" strokeWidth={2.2} />
                </span>
                <h3 className="font-display text-xl font-semibold">日程</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {trip.days.map((day, i) => (
                  <div
                    key={day.date}
                    className={`rounded-2xl px-3 py-4 text-center font-bold ${dayTones[i % dayTones.length]}`}
                  >
                    <p className="font-display text-lg">{day.date}</p>
                    <p className="mt-1 text-xs opacity-80">（{day.weekday}）</p>
                  </div>
                ))}
              </div>
            </Card>
          </SlideIn>

          <SlideIn from="right" delay={0.08}>
            <Card className="h-full p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-hilton-deep">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gold-muted">
                  <Hotel className="h-5 w-5 text-gold" strokeWidth={2.2} />
                </span>
                <h3 className="font-display text-xl font-semibold">宿泊</h3>
              </div>
              <p className="text-base font-medium leading-relaxed text-foreground">
                {trip.hotel}
              </p>
              <div className="mt-6 flex items-start gap-2 rounded-2xl bg-mint-soft px-3 py-3 text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                <p className="text-sm font-medium text-hilton-deep">
                  {trip.location}
                </p>
              </div>
            </Card>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
