"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#overview", label: "概要" },
  { href: "#hotel", label: "ホテル" },
  { href: "#wedding", label: "挙式" },
  { href: "#cruise", label: "クルーズ" },
  { href: "#payment", label: "飛行機代" },
  { href: "#schedule", label: "日程" },
  { href: "#rooms", label: "部屋" },
  { href: "#map", label: "MAP" },
  { href: "#spots", label: "観光" },
  { href: "#contacts", label: "連絡先" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top)]",
        scrolled || open
          ? "bg-white/95 shadow-[0_8px_30px_rgba(10,160,192,0.12)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="section-pad mx-auto flex h-14 max-w-6xl items-center justify-between md:h-16">
        <a
          href="#top"
          className={cn(
            "max-w-[70%] truncate font-display text-sm font-semibold transition md:max-w-none md:text-base",
            scrolled || open ? "text-hilton-deep" : "text-white"
          )}
        >
          OKINAWA FAMILY TRIP
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-xs font-bold transition",
                scrolled
                  ? "text-muted hover:bg-hilton-soft hover:text-hilton"
                  : "text-white/90 hover:bg-white/20"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full xl:hidden",
            scrolled || open ? "bg-hilton-soft text-hilton" : "bg-white/20 text-white"
          )}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[min(70vh,calc(100dvh-3.5rem-env(safe-area-inset-top)))] overflow-y-auto border-t border-border bg-white px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] xl:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-12 items-center justify-center rounded-2xl bg-hilton-soft/70 px-3 py-3 text-center text-sm font-bold text-hilton-deep active:bg-hilton-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
