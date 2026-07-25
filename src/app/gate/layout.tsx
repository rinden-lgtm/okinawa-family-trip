import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OKINAWA FAMILY TRIP | 認証",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function GateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
