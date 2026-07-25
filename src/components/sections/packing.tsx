"use client";

import { useEffect, useMemo, useState } from "react";
import packingData from "@/data/packing.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, SlideIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "okinawa-trip-packing-checked";

export function PackingSection() {
  const items = packingData.items;
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore
    }
  }, [checked]);

  const categories = useMemo(() => {
    const map = new Map<string, typeof items>();
    for (const item of items) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return Array.from(map.entries());
  }, [items]);

  const doneCount = items.filter((item) => checked[item.id]).length;

  return (
    <section
      id="packing"
      className="section-pad scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Packing"
            title="持ち物"
            description={`チェックリスト（${doneCount}/${items.length}）`}
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map(([category, categoryItems], index) => (
            <SlideIn
              key={category}
              from={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.04}
            >
              <Card className="h-full p-6">
                <h3 className="mb-4 font-display text-lg tracking-wide text-hilton">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {categoryItems.map((item) => {
                    const isChecked = Boolean(checked[item.id]);
                    return (
                      <li key={item.id}>
                        <label
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-xl border border-transparent px-2 py-2 transition hover:bg-hilton-soft/50",
                            isChecked && "opacity-60"
                          )}
                        >
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={(value) =>
                              setChecked((prev) => ({
                                ...prev,
                                [item.id]: value === true,
                              }))
                            }
                            className="mt-0.5"
                          />
                          <span>
                            <span
                              className={cn(
                                "block text-sm text-foreground",
                                isChecked && "line-through"
                              )}
                            >
                              {item.label}
                            </span>
                            {item.note ? (
                              <span className="mt-0.5 block text-xs text-muted">
                                {item.note}
                              </span>
                            ) : null}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
