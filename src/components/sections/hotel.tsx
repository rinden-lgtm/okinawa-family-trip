"use client";

import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  ExternalLink,
  Sparkles,
  Wine,
  Coffee,
  BedDouble,
  Waves,
} from "lucide-react";
import hotel from "@/data/hotel.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn, ScaleIn } from "@/components/motion/reveal";

export function HotelSection() {
  const lounge = hotel.executiveLounge;
  const roomGallery = "roomGallery" in hotel ? hotel.roomGallery : [];
  const pools = "pools" in hotel ? hotel.pools : [];

  return (
    <section id="hotel" className="section-pad section-block">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Stay"
            title="ホテル"
            description={hotel.nameEn}
          >
            {"roomType" in hotel && hotel.roomType ? (
              <p className="mx-auto mt-5 inline-flex max-w-[min(100%,22rem)] flex-col items-center gap-1 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-extrabold leading-snug text-white shadow-[0_8px_20px_rgba(255,107,92,0.3)] sm:max-w-none sm:flex-row sm:gap-2 sm:py-2">
                <BedDouble className="h-4 w-4 shrink-0" />
                <span className="whitespace-pre-line sm:whitespace-normal">
                  {hotel.roomType.replace(" ", "\n")}
                </span>
              </p>
            ) : null}
          </SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {hotel.images.map((image, index) => (
            <ScaleIn
              key={`${image.label}-${image.src}`}
              delay={index * 0.05}
              className={
                index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0
                    ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[420px]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-hilton-deep/70 to-transparent px-4 py-3">
                  <p className="text-xs font-bold tracking-wide text-white/95">
                    {image.label}
                  </p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        {"roomDescription" in hotel && hotel.roomDescription ? (
          <FadeIn delay={0.05}>
            <Card className="mt-6 p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-wide text-gold">
                    Room Type
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-hilton-deep md:text-2xl">
                    {hotel.roomType}
                  </h3>
                  {"roomTypeEn" in hotel && hotel.roomTypeEn ? (
                    <p className="mt-1 text-sm font-medium text-muted">
                      {hotel.roomTypeEn}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted">
                    {hotel.roomDescription}
                  </p>
                </div>
                {"roomTypeUrl" in hotel && hotel.roomTypeUrl ? (
                  <Button asChild variant="outline" className="shrink-0">
                    <a href={hotel.roomTypeUrl} target="_blank" rel="noreferrer">
                      客室詳細
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </div>

              {roomGallery.length > 0 ? (
                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {roomGallery.map((image) => (
                    <div
                      key={image.src + image.label}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
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
                  ))}
                </div>
              ) : null}
            </Card>
          </FadeIn>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <SlideIn>
            <Card className="h-full p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-hilton-deep">
                {hotel.name}
              </h3>
              {"roomType" in hotel && hotel.roomType ? (
                <p className="mt-2 inline-flex rounded-full bg-hilton-soft px-3 py-1 text-xs font-bold text-hilton-deep">
                  {hotel.roomType}
                </p>
              ) : null}
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      電話番号
                    </p>
                    <a
                      href={`tel:${hotel.phone.replace(/-/g, "")}`}
                      className="mt-1 block font-medium text-hilton hover:underline"
                    >
                      {hotel.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      住所
                    </p>
                    <p className="mt-1 leading-relaxed">{hotel.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      チェックイン / アウト
                    </p>
                    <p className="mt-1 font-medium">
                      IN {hotel.checkIn} / OUT {hotel.checkOut}
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8 w-full sm:w-auto" variant="gold">
                <a href={hotel.website} target="_blank" rel="noreferrer">
                  公式サイト
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <p className="mt-3 break-all text-xs text-muted">
                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-hilton underline-offset-2 hover:underline"
                >
                  {hotel.website}
                </a>
              </p>
            </Card>
          </SlideIn>

          <SlideIn from="right" delay={0.08}>
            <Card className="overflow-hidden p-0">
              <iframe
                title="ホテル地図"
                src={hotel.mapEmbedUrl}
                className="h-[320px] w-full border-0 md:h-full md:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Card>
          </SlideIn>
        </div>

        <FadeIn delay={0.1}>
          <Card className="mt-6 overflow-hidden p-0">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[240px] md:min-h-[320px]">
                <Image
                  src={lounge.images[0].src}
                  alt={lounge.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-muted text-gold">
                    <Wine className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gold">
                      Exclusive
                    </p>
                    <h3 className="font-display text-xl font-semibold text-hilton-deep">
                      {lounge.title}
                    </h3>
                  </div>
                </div>

                {"badge" in lounge && lounge.badge ? (
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(255,107,92,0.35)]">
                    <Coffee className="h-4 w-4" strokeWidth={2.4} />
                    {lounge.badge}
                  </p>
                ) : null}

                {"breakfast" in lounge && lounge.breakfast ? (
                  <div className="mb-4 rounded-2xl border-2 border-sunny/50 bg-sunny-soft p-4">
                    <div className="flex items-center gap-2 text-hilton-deep">
                      <Coffee className="h-5 w-5 text-[#c27803]" strokeWidth={2.2} />
                      <p className="font-display text-lg font-semibold">
                        {lounge.breakfast.title}
                      </p>
                    </div>
                    <p className="mt-1 text-xs font-bold text-[#c27803]">
                      {lounge.breakfast.hours}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-hilton-deep/90">
                      {lounge.breakfast.description}
                    </p>
                  </div>
                ) : null}

                <p className="text-sm font-medium leading-relaxed text-muted">
                  {lounge.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-hilton-soft px-3 py-1 text-xs font-bold text-hilton-deep">
                    {lounge.floor}
                  </span>
                  <span className="rounded-full bg-sunny-soft px-3 py-1 text-xs font-bold text-[#c27803]">
                    {lounge.hours}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {lounge.highlights.map((item, index) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${
                        index === 0
                          ? "rounded-xl bg-gold-muted px-3 py-2 font-bold text-hilton-deep"
                          : "text-foreground"
                      }`}
                    >
                      {index === 0 ? (
                        <Coffee className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      ) : (
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sunny" />
                      )}
                      <span>{item.replace(/^★\s*/, "")}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {lounge.note}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1 border-t border-border">
              {lounge.images.map((image) => (
                <div key={image.src} className="relative aspect-[16/10]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-hilton-deep">
                    {image.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>

        {pools.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pools.map((pool, index) => (
              <ScaleIn key={pool.id} delay={index * 0.06}>
                <Card className="flex h-full flex-col overflow-hidden p-0">
                  {"images" in pool && pool.images?.length ? (
                    <div className="relative aspect-[16/10] w-full shrink-0">
                      <Image
                        src={pool.images[0].src}
                        alt={pool.images[0].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-hilton-deep">
                        {pool.images[0].label}
                      </span>
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-hilton-soft text-hilton">
                        <Waves className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-hilton">
                          Pool
                        </p>
                        <h3 className="font-display text-xl font-semibold text-hilton-deep">
                          {pool.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-3 inline-flex w-fit rounded-full bg-mint-soft px-3 py-1 text-xs font-extrabold text-mint">
                      {pool.badge}
                    </p>

                    <p className="text-sm font-medium leading-relaxed text-muted">
                      {pool.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-hilton-soft px-3 py-1 text-xs font-bold text-hilton-deep">
                        {pool.location}
                      </span>
                      <span className="rounded-full bg-sunny-soft px-3 py-1 text-xs font-bold text-[#c27803]">
                        {pool.hours}
                      </span>
                      <span className="rounded-full bg-gold-muted px-3 py-1 text-xs font-bold text-gold">
                        {pool.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {pool.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sunny" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs leading-relaxed text-muted">
                      {pool.note}
                    </p>

                    <div className="mt-auto pt-5">
                      <Button asChild variant="outline" size="sm">
                        <a href={pool.url} target="_blank" rel="noreferrer">
                          公式案内
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScaleIn>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
