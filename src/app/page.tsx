import { HeroSection } from "@/components/sections/hero";
import { TocSection } from "@/components/sections/toc";
import { OverviewSection } from "@/components/sections/overview";
import { MembersSection } from "@/components/sections/members";
import { HotelSection } from "@/components/sections/hotel";
import { ScheduleSection } from "@/components/sections/schedule";
import { RoomsSection } from "@/components/sections/rooms";
import { PackingSection } from "@/components/sections/packing";
import { MapSection } from "@/components/sections/map";
import { ContactsSection } from "@/components/sections/contacts";

export default function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <TocSection />
      <OverviewSection />
      <MembersSection />
      <HotelSection />
      <ScheduleSection />
      <RoomsSection />
      <PackingSection />
      <MapSection />
      <ContactsSection />
      <footer className="border-t border-border bg-hilton-deep px-5 py-12 text-center text-white">
        <p className="font-display text-lg tracking-[0.2em]">
          OKINAWA FAMILY TRIP
        </p>
        <p className="mt-3 text-xs tracking-wide text-white/60">
          2026.10.31 — 2026.11.03 · Family Wedding & Vacation
        </p>
      </footer>
    </main>
  );
}
