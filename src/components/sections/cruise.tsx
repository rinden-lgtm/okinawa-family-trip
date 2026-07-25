"use client";

import Image from "next/image";
import {
  Anchor,
  Clock,
  MapPin,
  Users,
  Ship,
  ExternalLink,
} from "lucide-react";
import cruise from "@/data/cruise.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion/reveal";

export function CruiseSection() {
  return (
    <section id="cruise" className="section-pad section-block">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Sunset Cruise"
            title="サンセットクルーズ"
            description={`${cruise.date} ／ ${cruise.participants}`}
          />
        </FadeIn>

        <SlideIn>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[16/9] bg-hilton-deep">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={cruise.images[0]?.src}
              >
                <source src={cruise.video} type="video/mp4" />
              </video>
            </div>
          </Card>
        </SlideIn>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MapPin,
              label: "集合場所",
              value: cruise.meetingPlace,
            },
            {
              icon: Clock,
              label: "集合時間",
              value: cruise.meetingTime,
            },
            {
              icon: Ship,
              label: "出港 / 帰港",
              value: `${cruise.departureTime} 〜 ${cruise.returnTime}`,
            },
            {
              icon: Users,
              label: "参加人数",
              value: cruise.participants,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <ScaleIn key={item.label} delay={index * 0.05}>
                <Card className="h-full p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-sunny-soft text-[#c27803]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <p className="text-xs font-bold tracking-wide text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-hilton-deep">
                    {item.value}
                  </p>
                </Card>
              </ScaleIn>
            );
          })}
        </div>

        <FadeIn delay={0.08}>
          <Card className="mt-6 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-hilton-deep">
                  <Anchor className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-xl font-semibold">
                    ご案内
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cruise.notes.map((note) => (
                    <li
                      key={note}
                      className="text-sm font-medium leading-relaxed text-muted"
                    >
                      ・{note}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild variant="gold" className="shrink-0">
                <a href={cruise.mapsUrl} target="_blank" rel="noreferrer">
                  宜野湾港マリーナを地図で開く
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        </FadeIn>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {cruise.images.map((image, index) => (
            <ScaleIn key={image.src} delay={index * 0.03}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-hilton-deep">
                  {image.label}
                </span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
