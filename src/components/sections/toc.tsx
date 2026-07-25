"use client";

import {
  BookOpen,
  Building2,
  Heart,
  Ship,
  Banknote,
  CalendarDays,
  BedDouble,
  Phone,
  MapPinned,
  Car,
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
  tone: string;
}[] = [
  {
    href: "#overview",
    label: "旅行概要",
    description: "日程・宿泊・テーマ",
    icon: BookOpen,
    tone: "bg-hilton-soft text-hilton",
  },
  {
    href: "#hotel",
    label: "ホテル",
    description: "瀬底リゾート案内",
    icon: Building2,
    tone: "bg-mint-soft text-mint",
  },
  {
    href: "#wedding",
    label: "挙式・宴会",
    description: "11/1 結婚式",
    icon: Heart,
    tone: "bg-sunny-soft text-[#d97706]",
  },
  {
    href: "#cruise",
    label: "クルーズ",
    description: "11/2 サンセット",
    icon: Ship,
    tone: "bg-lavender-soft text-lavender",
  },
  {
    href: "#payment",
    label: "飛行機代",
    description: "振込先・期限",
    icon: Banknote,
    tone: "bg-mint-soft text-mint",
  },
  {
    href: "#schedule",
    label: "スケジュール",
    description: "日ごとの旅程",
    icon: CalendarDays,
    tone: "bg-hilton-soft text-hilton-deep",
  },
  {
    href: "#rooms",
    label: "部屋割り",
    description: "各ルームの宿泊者",
    icon: BedDouble,
    tone: "bg-gold-muted text-gold",
  },
  {
    href: "#map",
    label: "MAP",
    description: "主要スポット",
    icon: MapPinned,
    tone: "bg-lavender-soft text-lavender",
  },
  {
    href: "#spots",
    label: "観光名所",
    description: "車で行ける周辺",
    icon: Car,
    tone: "bg-mint-soft text-mint",
  },
  {
    href: "#contacts",
    label: "緊急連絡先",
    description: "ホテル・代表者など",
    icon: Phone,
    tone: "bg-sunny-soft text-[#d97706]",
  },
];

export function TocSection() {
  return (
    <section id="toc" className="section-pad section-block">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Contents"
            title="目次"
            description="好きなところからチェックしよう！"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScaleIn key={item.href} delay={index * 0.05}>
                <a href={item.href} className="block h-full active:scale-[0.98]">
                  <Card className="flex h-full min-h-[7.5rem] flex-col items-start gap-3 p-4 sm:p-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.tone}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-hilton-deep sm:text-lg">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-medium text-muted sm:text-sm">
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
