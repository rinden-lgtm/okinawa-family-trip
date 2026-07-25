"use client";

import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import mapData from "@/data/map.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

function embedFor(lat: number, lng: number, zoom = 14) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=ja&z=${zoom}&output=embed`;
}

export function MapSection() {
  const [activeId, setActiveId] = useState(mapData.places[0]?.id ?? "hotel");
  const active =
    mapData.places.find((p) => p.id === activeId) ?? mapData.places[0];

  return (
    <section id="map" className="section-pad scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Map"
            title="MAP"
            description="ピンを選ぶと地図が切り替わります"
          />
        </FadeIn>

        <SlideIn>
          <Card className="overflow-hidden p-0">
            <iframe
              key={active.id}
              title={`${active.name}の地図`}
              src={embedFor(active.lat, active.lng)}
              className="h-[320px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Card>
        </SlideIn>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mapData.places.map((place, index) => (
            <ScaleIn key={place.id} delay={index * 0.05}>
              <Card
                className={cn(
                  "flex h-full cursor-pointer flex-col p-5 transition",
                  activeId === place.id &&
                    "border-hilton/40 ring-1 ring-hilton/20"
                )}
                onClick={() => setActiveId(place.id)}
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-hilton-soft text-hilton">
                    <MapPin className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <a
                    href={place.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-md p-1 text-muted hover:text-hilton"
                    aria-label={`${place.name}をGoogle Mapsで開く`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <h3 className="font-display text-lg tracking-wide text-hilton">
                  {place.name}
                </h3>
                {place.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {place.description}
                  </p>
                ) : null}
              </Card>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
