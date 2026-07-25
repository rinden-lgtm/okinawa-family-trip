"use client";

import { useEffect, useState } from "react";
import {
  Baby,
  Car,
  Clock,
  ExternalLink,
  MapPinned,
} from "lucide-react";
import spotsData from "@/data/spots.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Filter = "all" | "kids";

function embedFor(lat: number, lng: number, zoom = 13) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=ja&z=${zoom}&output=embed`;
}

export function SpotsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered =
    filter === "kids"
      ? spotsData.spots.filter((s) => s.kids)
      : spotsData.spots;

  const [activeId, setActiveId] = useState(filtered[0]?.id ?? "");

  useEffect(() => {
    const list =
      filter === "kids"
        ? spotsData.spots.filter((s) => s.kids)
        : spotsData.spots;
    if (!list.some((s) => s.id === activeId)) {
      setActiveId(list[0]?.id ?? "");
    }
  }, [filter, activeId]);

  const active =
    filtered.find((s) => s.id === activeId) ?? filtered[0] ?? spotsData.spots[0];

  return (
    <section id="spots" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Day Trip"
            title="車で行ける観光名所"
            description={spotsData.intro}
          />
        </FadeIn>

        <FadeIn delay={0.04}>
          <div className="mb-6 inline-flex rounded-full border-2 border-hilton/15 bg-white p-1 shadow-sm">
            {(
              [
                { id: "all" as const, label: "すべて" },
                { id: "kids" as const, label: "小学生・幼児向け" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition",
                  filter === tab.id
                    ? "bg-hilton text-white shadow-sm"
                    : "text-hilton-deep hover:bg-hilton-soft"
                )}
              >
                {tab.id === "kids" ? (
                  <Baby className="h-4 w-4" strokeWidth={2.2} />
                ) : null}
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <SlideIn>
          <Card className="overflow-hidden p-0">
            <iframe
              key={active.id}
              title={`${active.name}の地図`}
              src={embedFor(active.lat, active.lng)}
              className="h-[280px] w-full border-0 md:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-display text-lg font-semibold text-hilton-deep">
                    {active.name}
                  </p>
                  {active.kids ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold-muted px-2.5 py-1 text-[10px] font-extrabold text-gold">
                      <Baby className="h-3 w-3" strokeWidth={2.4} />
                      小学生・幼児向け
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm font-bold text-[#c27803]">
                  <Clock className="h-4 w-4" strokeWidth={2.2} />
                  ホテルから {active.driveTime}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="gold" size="sm">
                  <a href={active.mapsUrl} target="_blank" rel="noreferrer">
                    Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
                {"officialUrl" in active && active.officialUrl ? (
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={active.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      公式サイト
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </Card>
        </SlideIn>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((spot, index) => (
            <ScaleIn key={spot.id} delay={index * 0.04}>
              <button
                type="button"
                onClick={() => setActiveId(spot.id)}
                className="h-full w-full text-left"
              >
                <Card
                  className={cn(
                    "flex h-full flex-col p-5 transition",
                    activeId === spot.id &&
                      "border-hilton/40 ring-1 ring-hilton/20"
                  )}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-2xl",
                        spot.kids
                          ? "bg-gold-muted text-gold"
                          : "bg-mint-soft text-mint"
                      )}
                    >
                      {spot.kids ? (
                        <Baby className="h-4 w-4" strokeWidth={2.2} />
                      ) : (
                        <Car className="h-4 w-4" strokeWidth={2.2} />
                      )}
                    </span>
                    <span className="rounded-full bg-sunny-soft px-2.5 py-1 text-[10px] font-extrabold text-[#c27803]">
                      {spot.driveTime}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug text-hilton-deep">
                    {spot.name}
                  </h3>
                  {spot.kids ? (
                    <p className="mt-1 text-[11px] font-extrabold tracking-wide text-gold">
                      小学生・幼児向け
                    </p>
                  ) : (
                    <p className="mt-1 text-[11px] font-bold tracking-wide text-muted">
                      {spot.distance}
                    </p>
                  )}
                  <p className="mt-2 text-xs font-medium leading-relaxed text-muted">
                    {spot.description}
                  </p>
                </Card>
              </button>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <Card className="mt-6 flex items-start gap-3 p-5 md:p-6">
            <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-hilton" />
            <p className="text-sm font-medium leading-relaxed text-muted">
              所要時間は渋滞のない場合の目安です。美ら海水族館周辺は週末・祝日に混みやすいので、朝早めの出発がおすすめです。幼児向け施設は休憩・授乳スペースの有無を公式サイトでご確認ください。
            </p>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
