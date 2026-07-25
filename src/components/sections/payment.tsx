"use client";

import {
  Banknote,
  Building2,
  CalendarClock,
  Plane,
  User,
} from "lucide-react";
import payment from "@/data/payment.json";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, ScaleIn, SlideIn } from "@/components/motion/reveal";

function yen(amount: number) {
  return `¥${amount.toLocaleString("ja-JP")}`;
}

export function PaymentSection() {
  const bank = payment.bank;

  return (
    <section id="payment" className="section-pad section-block">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Flight Payment"
            title="飛行機代のお支払い"
            description={`${payment.deadline} ／ ${payment.deadlineNote}`}
          />
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Plane,
              label: "お一人様",
              value: yen(payment.amountPerPerson),
            },
            {
              icon: CalendarClock,
              label: "振込期限",
              value: "8月末まで",
            },
            {
              icon: User,
              label: "対象人数",
              value: `${payment.totalParticipants}名様`,
            },
            {
              icon: Banknote,
              label: "合計（参考）",
              value: yen(payment.totalAmount),
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

        <SlideIn>
          <Card className="mt-6 overflow-hidden p-0">
            <div className="border-b border-border bg-gradient-to-r from-hilton-soft via-sunny-soft to-gold-muted px-4 py-4 md:px-8">
              <div className="flex items-center gap-2 text-hilton-deep">
                <Building2 className="h-5 w-5 text-hilton" />
                <h3 className="font-display text-xl font-semibold">
                  お振込先口座
                </h3>
              </div>
              <p className="mt-1 text-sm font-bold text-hilton-deep/80">
                8月末までに各自お振り込みください
              </p>
            </div>
            <div className="grid gap-0 sm:grid-cols-2">
              {[
                { label: "銀行名", value: bank.bankName },
                { label: "支店名", value: bank.branchName },
                {
                  label: "口座種別・番号",
                  value: `${bank.accountType} ${bank.accountNumber}`,
                },
                {
                  label: "口座名義",
                  value: bank.accountHolder,
                  sub: bank.accountHolderJa,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="border-b border-border px-4 py-4 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 md:px-8 md:py-5"
                >
                  <p className="text-xs font-bold tracking-wide text-muted">
                    {row.label}
                  </p>
                  <p className="mt-1 break-all font-display text-lg font-semibold text-hilton-deep md:text-xl">
                    {row.value}
                  </p>
                  {"sub" in row && row.sub ? (
                    <p className="mt-1 text-sm font-medium text-muted">
                      {row.sub}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </Card>
        </SlideIn>

        <FadeIn delay={0.08}>
          <Card className="mt-6 p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-hilton-deep">
              お一人様の内訳
            </h3>
            <ul className="mt-4 space-y-3">
              {payment.breakdown.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-hilton-soft/40 px-4 py-3"
                >
                  <p className="font-bold text-hilton-deep">{row.label}</p>
                  <p className="shrink-0 font-display text-lg font-semibold text-hilton-deep">
                    {yen(row.unitPrice)}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        <FadeIn delay={0.12}>
          <Card className="mt-6 p-6 md:p-8">
            <h3 className="mb-3 font-display text-xl font-semibold text-hilton-deep">
              ご案内
            </h3>
            <ul className="space-y-2">
              {payment.notes.map((note) => (
                <li
                  key={note}
                  className="text-sm font-medium leading-relaxed text-muted"
                >
                  ・{note}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              取扱: {payment.agency}（TEL {payment.agencyPhone}）
            </p>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
