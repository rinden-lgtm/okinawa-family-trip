"use client";

import {
  BookOpen,
  Users,
  Building2,
  CalendarDays,
  BedDouble,
  Briefcase,
  Phone,
  MapPinned,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn } from "@/components/motion/reveal";

const items: {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    href: "#overview",
    label: "旅行概要",
    description: "日程・宿泊・テーマ",
    icon: BookOpen,
  },
  {
    href: "#members",
    label: "参加メンバー",
    description: "グループ別の参加者",
    icon: Users,
  },
  {
    href: "#hotel",
    label: "ホテル",
    description: "瀬底リゾート案内",
    icon: Building2,
  },
  {
    href: "#schedule",
    label: "スケジュール",
    description: "日ごとの旅程",
    icon: CalendarDays,
  },
  {
    href: "#rooms",
    label: "部屋割り",
    description: "各ルームの宿泊者",
    icon: BedDouble,
  },
  {
    href: "#packing",
    label: "持ち物",
    description: "チェックリスト",
    icon: Briefcase,
  },
  {
    href: "#contacts",
    label: "緊急連絡先",
    description: "ホテル・代表者など",
    icon: Phone,
  },
  {
    href: "#map",
    label: "MAP",
    description: "主要スポット",
    icon: MapPinned,
  },
];

export function TocSection() {
  return (
    <section id="toc" className="section-pad scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Contents"
            title="目次"
            description="必要な情報へすぐに移動できます"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScaleIn key={item.href} delay={index * 0.05}>
                <a href={item.href} className="block h-full">
                  <Card className="flex h-full flex-col items-start gap-3 p-4 sm:p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-hilton-soft text-hilton">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display text-base tracking-wide text-hilton sm:text-lg">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs text-muted sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </a>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
