"use client";

import {
  Hotel,
  Plane,
  User,
  Hospital,
  Shield,
  Ambulance,
  Phone,
  type LucideIcon,
} from "lucide-react";
import contactsData from "@/data/contacts.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn } from "@/components/motion/reveal";

const iconMap: Record<string, LucideIcon> = {
  hotel: Hotel,
  plane: Plane,
  user: User,
  hospital: Hospital,
  shield: Shield,
  ambulance: Ambulance,
};

export function ContactsSection() {
  return (
    <section
      id="contacts"
      className="section-pad section-block"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Emergency"
            title="緊急連絡先"
            description="困ったときはこちらを確認してください"
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactsData.contacts.map((contact, index) => {
            const Icon = iconMap[contact.icon] ?? Phone;
            return (
              <ScaleIn key={contact.id} delay={index * 0.05}>
                <Card className="h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hilton-soft text-hilton">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      {contact.label}
                    </p>
                  </div>
                  <h3 className="font-display text-lg leading-snug tracking-wide text-hilton">
                    {contact.name}
                  </h3>
                  {contact.phone ? (
                    <a
                      href={`tel:${contact.phone.replace(/-/g, "")}`}
                      className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-hilton hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5 text-gold" />
                      {contact.phone}
                    </a>
                  ) : null}
                  {contact.note ? (
                    <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-muted">
                      {contact.note}
                    </p>
                  ) : null}
                </Card>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
