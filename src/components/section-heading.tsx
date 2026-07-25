import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl tracking-[0.04em] text-hilton md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div
        className={cn(
          "gold-rule mt-5",
          align === "center" ? "mx-auto" : ""
        )}
      />
      {description ? (
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
