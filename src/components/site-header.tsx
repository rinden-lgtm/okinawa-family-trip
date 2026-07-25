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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white/90 shadow-[0_8px_30px_rgba(10,160,192,0.12)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          className={cn(
            "font-display text-sm font-semibold transition md:text-base",
            scrolled || open ? "text-hilton-deep" : "text-white"
          )}
        >
          OKINAWA FAMILY TRIP
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold transition",
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
            "rounded-full p-2 lg:hidden",
            scrolled || open ? "bg-hilton-soft text-hilton" : "bg-white/20 text-white"
          )}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl bg-hilton-soft/70 px-3 py-3 text-sm font-bold text-hilton-deep hover:bg-hilton-soft"
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
