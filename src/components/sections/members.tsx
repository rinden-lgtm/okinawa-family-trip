"use client";

import { Users } from "lucide-react";
import membersData from "@/data/members.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn } from "@/components/motion/reveal";

export function MembersSection() {
  const groups = membersData.groups;
  const total = groups.reduce((sum, g) => sum + g.members.length, 0);

  return (
    <section
      id="members"
      className="section-pad scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Guests"
            title="参加メンバー"
            description={`全 ${total} 名 / ${groups.length} グループ`}
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((group, index) => (
            <ScaleIn key={group.id} delay={index * 0.06}>
              <Card className="h-full p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-hilton-soft text-hilton">
                      <Users className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <h3 className="font-display text-lg tracking-wide text-hilton">
                      {group.name}
                    </h3>
                  </div>
                  <span className="text-xs tracking-wide text-gold">
                    {group.members.length}名
                  </span>
                </div>
                <ul className="space-y-2">
                  {group.members.map((member) => (
                    <li
                      key={`${group.id}-${member.name}`}
                      className="flex items-center justify-between border-b border-border/70 py-2 last:border-0"
                    >
                      <span className="text-sm text-foreground">
                        {member.name}
                      </span>
                      {member.note ? (
                        <span className="text-xs text-muted">{member.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
