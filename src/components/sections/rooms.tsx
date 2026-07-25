"use client";

import { BedDouble } from "lucide-react";
import roomsData from "@/data/rooms.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn } from "@/components/motion/reveal";

export function RoomsSection() {
  return (
    <section
      id="rooms"
      className="section-pad scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Rooms"
            title="部屋割り"
            description="各部屋の宿泊メンバーです"
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {roomsData.rooms.map((room, index) => (
            <ScaleIn key={room.id} delay={index * 0.06}>
              <Card className="h-full p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hilton-soft text-hilton">
                      <BedDouble className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl tracking-wide text-hilton">
                        {room.name}
                      </h3>
                      {room.type ? (
                        <p className="text-xs tracking-wide text-gold">
                          {room.type}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-xs text-muted">
                    大人{room.adults}名
                    {room.children ? ` / 子ども${room.children}名` : ""}
                  </p>
                </div>
                <ul className="space-y-2">
                  {room.guests.map((guest) => (
                    <li
                      key={`${room.id}-${guest}`}
                      className="border-b border-border/70 py-2 text-sm last:border-0"
                    >
                      {guest}
                    </li>
                  ))}
                </ul>
                {room.note ? (
                  <p className="mt-4 text-xs text-muted">{room.note}</p>
                ) : null}
              </Card>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
