"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TouchMap({
  title,
  src,
  className,
}: {
  title: string;
  src: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [src]);

  return (
    <div className="relative">
      <iframe
        title={title}
        src={src}
        className={cn(className, !active && "max-md:pointer-events-none")}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {!active ? (
        <button
          type="button"
          className="absolute inset-x-3 bottom-3 z-10 min-h-11 rounded-full bg-white/95 px-4 text-xs font-bold text-hilton-deep shadow-md md:hidden"
          onClick={() => setActive(true)}
        >
          タップして地図を操作
        </button>
      ) : null}
    </div>
  );
}
