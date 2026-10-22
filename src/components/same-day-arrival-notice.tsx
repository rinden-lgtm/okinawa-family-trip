import { Clock } from "lucide-react";
import hotel from "@/data/hotel.json";

export function SameDayArrivalNotice() {
  const notice = hotel.sameDayArrival;

  return (
    <div className="overflow-hidden rounded-3xl border-2 border-gold bg-white shadow-[0_12px_32px_rgba(255,107,92,0.16)]">
      <p className="flex items-center justify-center gap-2 bg-gold px-3 py-2.5 text-center text-[13px] font-extrabold leading-snug text-white sm:px-4 sm:text-sm">
        <Clock className="h-4 w-4 shrink-0" strokeWidth={2.4} />
        {notice.label}
      </p>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-1.5 px-3 py-4 sm:items-center sm:gap-3 sm:px-8 sm:py-5">
        <div className="rounded-2xl bg-hilton-soft px-2 py-3 text-center sm:px-4 sm:py-4">
          <p className="text-[11px] font-extrabold tracking-wide text-hilton sm:text-xs">
            {notice.checkInLabel}
          </p>
          <p className="font-display text-[1.65rem] font-semibold leading-none text-hilton-deep sm:text-4xl">
            {notice.checkIn}
          </p>
        </div>
        <p className="flex items-center justify-center px-0.5 text-base font-extrabold text-gold sm:text-sm">
          <span className="sm:hidden" aria-hidden>
            →
          </span>
          <span className="hidden sm:inline">それから</span>
        </p>
        <div className="rounded-2xl bg-gold px-2 py-3 text-center text-white shadow-[0_8px_20px_rgba(255,107,92,0.35)] sm:px-4 sm:py-4">
          <p className="text-[11px] font-extrabold tracking-wide sm:text-xs">
            {notice.meetingLabel}
          </p>
          <p className="font-display text-[1.65rem] font-semibold leading-none sm:text-4xl">
            {notice.meetingTime}
          </p>
          <p className="mt-1 text-[11px] font-bold leading-tight sm:text-xs">
            {notice.meetingPlace}
          </p>
        </div>
      </div>
      <p className="px-4 pb-4 text-center text-[13px] font-bold leading-relaxed text-hilton-deep sm:px-5 sm:pb-5 sm:text-sm">
        {notice.message}
      </p>
    </div>
  );
}
