import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OKINAWA FAMILY TRIP | 沖縄旅行のしおり",
  description: "家族・親族向けの沖縄旅行しおりです。",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    title: "OKINAWA FAMILY TRIP",
    description: "家族・親族向けの沖縄旅行しおりです。",
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
