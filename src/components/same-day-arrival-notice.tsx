import { Clock } from "lucide-react";
import hotel from "@/data/hotel.json";

export function SameDayArrivalNotice() {
  const notice = hotel.sameDayArrival;

  return (
    <div className="overflow-hidden rounded-3xl border-2 border-gold bg-white shadow-[0_12px_32px_rgba(255,107,92,0.16)]">
      <p className="flex items-center justify-center gap-2 bg-gold px-4 py-2.5 text-center text-sm font-extrabold tracking-wide text-white">
        <Clock className="h-4 w-4 shrink-0" strokeWidth={2.4} />
        {notice.label}
      </p>
      <div className="grid items-stretch gap-3 px-4 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:px-8">
        <div className="rounded-2xl bg-hilton-soft px-4 py-4 text-center">
          <p className="text-xs font-extrabold tracking-wide text-hilton">
            {notice.checkInLabel}
          </p>
          <p className="font-display text-4xl font-semibold text-hilton-deep">
            {notice.checkIn}
          </p>
        </div>
        <p className="text-center text-sm font-extrabold text-gold">それから</p>
        <div className="rounded-2xl bg-gold px-4 py-4 text-center text-white shadow-[0_8px_20px_rgba(255,107,92,0.35)]">
          <p className="text-xs font-extrabold tracking-wide">
            {notice.meetingLabel}
          </p>
          <p className="font-display text-4xl font-semibold">
            {notice.meetingTime}
          </p>
          <p className="mt-1 text-xs font-bold">{notice.meetingPlace}</p>
        </div>
      </div>
      <p className="px-5 pb-5 text-center text-sm font-bold leading-relaxed text-hilton-deep">
        {notice.message}
      </p>
    </div>
  );
}
