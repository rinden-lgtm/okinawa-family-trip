"use client";

import Image from "next/image";
import { Clock, MapPin, Phone, ExternalLink } from "lucide-react";
import hotel from "@/data/hotel.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn, ScaleIn } from "@/components/motion/reveal";

export function HotelSection() {
  return (
    <section
      id="hotel"
      className="section-pad scroll-mt-20 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Stay"
            title="ホテル"
            description={hotel.nameEn}
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {hotel.images.map((image, index) => (
            <ScaleIn
              key={image.label}
              delay={index * 0.05}
              className={index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden ${
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
                  <p className="text-xs tracking-[0.2em] text-white/95">
                    {image.label}
                  </p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <SlideIn>
            <Card className="h-full p-6 md:p-8">
              <h3 className="font-display text-xl tracking-wide text-hilton">
                {hotel.name}
              </h3>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      電話番号
                    </p>
                    <a
                      href={`tel:${hotel.phone.replace(/-/g, "")}`}
                      className="mt-1 block text-hilton hover:underline"
                    >
                      {hotel.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      住所
                    </p>
                    <p className="mt-1 leading-relaxed">{hotel.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      チェックイン / アウト
                    </p>
                    <p className="mt-1">
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
      </div>
    </section>
  );
}
