"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  Phone,
  Shirt,
  Utensils,
} from "lucide-react";
import wedding from "@/data/wedding.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion/reveal";
import { SameDayArrivalNotice } from "@/components/same-day-arrival-notice";

export function WeddingSection() {
  return (
    <section id="wedding" className="section-pad section-block">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Wedding"
            title="挙式・宴会"
            description={`${wedding.date} ／ ${wedding.venue}`}
          />
        </FadeIn>

        <FadeIn delay={0.04}>
          <div className="mb-8">
            <SameDayArrivalNotice />
          </div>
        </FadeIn>

        <SlideIn>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[16/9]">
              <Image
                src={wedding.heroImage.src}
                alt={wedding.heroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-hilton-deep">
                {wedding.heroImage.label}
              </span>
            </div>
          </Card>
        </SlideIn>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {[
            {
              icon: CalendarDays,
              label: "日程",
              value: "11/1（日）",
            },
            {
              icon: MapPin,
              label: "会場",
              value: wedding.venue,
            },
            {
              icon: Clock,
              label: "挙式",
              value: wedding.ceremony.time,
            },
            {
              icon: Utensils,
              label: "宴会",
              value: `${wedding.banquet.time}（${wedding.banquet.note}）`,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <ScaleIn key={item.label} delay={index * 0.05}>
                <Card className="h-full min-w-0 p-3.5 sm:p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-muted text-gold">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <p className="text-xs font-bold tracking-wide text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 break-words font-display text-sm font-semibold leading-snug text-hilton-deep sm:text-lg">
                    {item.value}
                  </p>
                </Card>
              </ScaleIn>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FadeIn delay={0.06}>
            <Card className="h-full p-4 sm:p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2 text-hilton-deep">
                <Heart className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl font-semibold">
                  {wedding.ceremony.title}
                </h3>
              </div>
              <p className="font-display text-3xl font-semibold text-hilton-deep">
                {wedding.ceremony.time}
              </p>
              <p className="mt-2 text-sm font-bold text-hilton-deep">
                集合 {wedding.ceremony.meetingTime}　{wedding.ceremony.meetingPlace}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-sunny-soft px-3 py-1.5 text-xs font-bold text-[#c27803]">
                <Shirt className="h-3.5 w-3.5" strokeWidth={2.4} />
                {wedding.ceremony.dressCode}
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-muted">
                {wedding.ceremony.description}
              </p>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full p-4 sm:p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2 text-hilton-deep">
                <Utensils className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl font-semibold">
                  {wedding.banquet.title}
                </h3>
              </div>
              <p className="font-display text-3xl font-semibold text-hilton-deep">
                {wedding.banquet.time}
                <span className="ml-2 text-base font-bold text-muted">
                  {wedding.banquet.note}
                </span>
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-muted">
                {wedding.banquet.description}
              </p>
            </Card>
          </FadeIn>
        </div>

        {"kariyushi" in wedding && wedding.kariyushi ? (
          <FadeIn delay={0.12}>
            <Card className="mt-6 p-4 sm:p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-hilton-deep">
                <Shirt className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl font-semibold">
                  {wedding.kariyushi.title}
                </h3>
              </div>
              <p className="font-display text-2xl font-semibold text-hilton-deep">
                {wedding.kariyushi.shop}
              </p>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-muted sm:text-sm">
                {wedding.kariyushi.summary}
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-2xl bg-hilton-soft px-3 py-3">
                  <p className="text-[11px] font-extrabold tracking-wide text-hilton">
                    行き
                  </p>
                  <p className="mt-1 text-[15px] font-extrabold leading-snug text-hilton-deep">
                    {wedding.kariyushi.pickup}
                  </p>
                </div>
                <div className="rounded-2xl bg-gold-muted px-3 py-3">
                  <p className="text-[11px] font-extrabold tracking-wide text-gold">
                    帰り
                  </p>
                  <p className="mt-1 text-[15px] font-extrabold leading-snug text-hilton-deep">
                    {wedding.kariyushi.return}
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-gold px-4 py-4 text-center text-white">
                <p className="text-[11px] font-extrabold tracking-wide">紹介コード</p>
                <p className="font-display text-[2.75rem] font-semibold leading-none tracking-[0.18em]">
                  {wedding.kariyushi.code}
                </p>
                <p className="mt-2 text-base font-extrabold">{wedding.kariyushi.discount}</p>
                <p className="mt-1 text-[13px] font-bold leading-snug">
                  {wedding.kariyushi.discountNote}
                </p>
              </div>
              <div className="mt-4 space-y-3 text-[15px] sm:text-sm">
                <p className="flex items-start gap-2 font-medium leading-relaxed text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="min-w-0 whitespace-pre-line break-words">{wedding.kariyushi.address}</span>
                </p>
                <p className="flex items-start gap-2 font-medium text-muted">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{wedding.kariyushi.hours}</span>
                </p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button asChild variant="gold" className="w-full">
                  <a href={wedding.kariyushi.url} target="_blank" rel="noreferrer">
                    サイトで予約
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={`tel:${wedding.kariyushi.phone.replace(/-/g, "")}`}
                  >
                    <Phone className="h-4 w-4" />
                    {wedding.kariyushi.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={wedding.kariyushi.mapsUrl} target="_blank" rel="noreferrer">
                    地図で開く
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-3 break-all text-xs text-muted">
                <a
                  href={wedding.kariyushi.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-hilton underline-offset-2 hover:underline"
                >
                  {wedding.kariyushi.url}
                </a>
              </p>
            </Card>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.14}>
          <Card className="mt-6 p-4 sm:p-6 md:p-8">
            <div className="mb-3 flex items-center gap-2 text-hilton-deep">
              <Heart className="h-5 w-5 text-gold" />
              <h3 className="font-display text-xl font-semibold">ご案内</h3>
            </div>
            <ul className="space-y-2">
              {wedding.notes.map((note) => (
                <li
                  key={note}
                  className="text-sm font-medium leading-relaxed text-muted"
                >
                  ・{note}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {wedding.images.map((image, index) => (
            <ScaleIn key={image.src} delay={index * 0.03}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
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
