"use client";

import { useEffect, useState } from "react";


export function CurrentTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setTime(new Date()), 0);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      window.clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);

  if (!time) {
    return (
      <div className="flex items-center opacity-0">
        <div 
          className="text-[18px] sm:text-[22px] tracking-[0.1em] text-zinc-400 dark:text-zinc-500"
          style={{ fontFamily: "'Doto', monospace", fontWeight: 700 }}
        >
          00:00:00
        </div>
      </div>
    );
  }

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex items-center h-[24px] select-none">
      <div 
        className="text-[18px] sm:text-[22px] tracking-[0.1em] flex items-center text-zinc-400 dark:text-zinc-500 h-full font-bold"
        style={{ fontFamily: "'Doto', monospace" }}
      >
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}
