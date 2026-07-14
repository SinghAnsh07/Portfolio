"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function ViewsCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") {
          setViews(data.count);
        }
      })
      .catch((err) => console.error("Error updating views:", err));
  }, []);

  if (views === null || views === 0) return null;

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium select-none transform-gpu transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/10 hover:scale-105 active:scale-95 duration-200">
      <Eye className="size-3.5 text-zinc-400 dark:text-zinc-500" />
      <span>{views.toLocaleString()} page views</span>
    </div>
  );
}
