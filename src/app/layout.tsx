import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OKINAWA FAMILY TRIP | 沖縄旅行のしおり",
  description:
    "2026.10.31 - 2026.11.03 Family Wedding & Vacation — ザ・ビーチリゾート瀬底 by ヒルトンクラブ",
  openGraph: {
    title: "OKINAWA FAMILY TRIP",
    description: "家族・親族のための沖縄旅行ガイド",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
