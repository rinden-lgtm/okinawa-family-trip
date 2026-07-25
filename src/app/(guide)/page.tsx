import { HeroSection } from "@/components/sections/hero";
import { TocSection } from "@/components/sections/toc";
import { OverviewSection } from "@/components/sections/overview";
import { HotelSection } from "@/components/sections/hotel";
import { WeddingSection } from "@/components/sections/wedding";
import { CruiseSection } from "@/components/sections/cruise";
import { PaymentSection } from "@/components/sections/payment";
import { ScheduleSection } from "@/components/sections/schedule";
import { RoomsSection } from "@/components/sections/rooms";
import { MapSection } from "@/components/sections/map";
import { SpotsSection } from "@/components/sections/spots";
import { ContactsSection } from "@/components/sections/contacts";
import { PageDecor } from "@/components/page-decor";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main id="top">
      <HeroSection />

      <div className="relative isolate">
        <PageDecor />

        <div className="relative z-10">
          <div className="section-band">
            <TocSection />
          </div>
          <div className="section-band section-band-warm">
            <OverviewSection />
          </div>
          <div className="section-band">
            <HotelSection />
          </div>
          <div className="section-band section-band-warm">
            <WeddingSection />
          </div>
          <div className="section-band section-band-mint">
            <CruiseSection />
          </div>
          <div className="section-band">
            <PaymentSection />
          </div>
          <div className="section-band section-band-warm">
            <ScheduleSection />
          </div>
          <div className="section-band section-band-mint">
            <RoomsSection />
          </div>
          <div className="section-band">
            <MapSection />
          </div>
          <div className="section-band section-band-warm">
            <SpotsSection />
          </div>
          <div className="section-band section-band-mint">
            <ContactsSection />
          </div>

          <footer className="relative overflow-hidden px-5 py-14 text-center text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-hilton via-[#2bb3c9] to-gold" />
            <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-sunny/30 blur-xl" />
            <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-mint/25 blur-xl" />
            <div className="relative">
              <p className="font-display text-2xl font-semibold">
                OKINAWA FAMILY TRIP
              </p>
              <p className="mt-3 text-sm font-bold tracking-wide text-white/90">
                2026.10.31 — 2026.11.03
              </p>
              <p className="mt-2 text-xs font-medium text-white/75">
                Family Wedding & Vacation — Have a great trip!
              </p>
              <a
                href="https://sesoko.hiltonjapan.co.jp/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-white/20 px-5 py-2 text-xs font-bold tracking-wide text-white backdrop-blur-sm transition hover:bg-white/30"
              >
                ヒルトン沖縄瀬底リゾート公式サイト
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
