"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const INDEX_ITEMS = [
  { label: "Experience", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function IndexNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("work");
  const isManualScrollRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    INDEX_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    // Fallback for scroll-to-bottom targeting the last item (contact)
    const handleScroll = () => {
      if (isManualScrollRef.current) return;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveId("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  if (pathname !== "/") return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      isManualScrollRef.current = true;
      setActiveId(id);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const offset = 100; // Breathable header spacing offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 800);
    }
  };

  return (
    <div className="fixed left-[calc(50%-448px-170px)] top-[25vh] z-50 pointer-events-auto hidden xl:block w-[140px] text-left">
      <div className="relative pl-4 py-2">
        {/* Left vertical lining for index */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-0 border-r border-black/15 dark:border-white/5 pointer-events-none" 
          style={{
            maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)',
            WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)'
          }}
        />
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-4 select-none">
          Index
        </h3>
        <nav className="flex flex-col gap-3">
          {INDEX_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out flex items-center gap-1.5 ${
                  isActive
                    ? "text-zinc-900 dark:text-zinc-100 font-semibold"
                    : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {isActive ? (
                  <span className="text-zinc-900 dark:text-zinc-100 font-bold transition-all duration-300 select-none">
                    —
                  </span>
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
