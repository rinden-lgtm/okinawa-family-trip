import { Heart, Sun } from "lucide-react";
import { GateForm } from "@/components/gate-form";

export default function GatePage() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,201,74,0.22),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(255,107,92,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(10,160,192,0.16),transparent_35%)]" />

      <div className="relative z-10 w-full max-w-md rounded-[2rem] border-2 border-white/70 bg-white/85 p-8 shadow-[0_20px_50px_rgba(10,160,192,0.16)] backdrop-blur-md md:p-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-hilton-soft px-3 py-1.5 text-xs font-extrabold text-hilton-deep">
          <Sun className="h-3.5 w-3.5 text-sunny" />
          Family Only
          <Heart className="h-3.5 w-3.5 text-gold" fill="currentColor" />
        </div>

        <h1 className="font-display text-3xl font-semibold leading-tight text-hilton-deep md:text-4xl">
          OKINAWA FAMILY TRIP
        </h1>
        <p className="mt-4 text-sm font-medium leading-relaxed text-muted md:text-base">
          このページは家族・親族専用です。
          <br />
          共有されたパスワードを入力してください。
        </p>

        <GateForm />
      </div>
    </main>
  );
}
