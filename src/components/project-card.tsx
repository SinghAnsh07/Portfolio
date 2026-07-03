/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

function getProjectBackgroundImage(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("studynotion")) {
    return "/image copy 5.png";
  }
  if (t.includes("sentiment")) {
    return "/sentiment_dashboard.png";
  }
  if (t.includes("medi connect") || t.includes("mediconnect")) {
    return "/image copy.png";
  }
  if (t.includes("dairydesk")) {
    return "/image copy 3.png";
  }
  if (t.includes("credit risk") || t.includes("default probability")) {
    return "/image copy 4.png";
  }
  if (t.includes("crop disease")) {
    return "/image copy.png";
  }
  if (t.includes("breast cancer")) {
    return "/image copy 4.png";
  }
  if (t.includes("safe lending")) {
    return "/image copy 3.png";
  }
  if (t.includes("hackrx")) {
    return "/image copy 4.png";
  }
  return "/image copy.png";
}

const KNOWN_SLUGS: Record<string, string> = {
  "react": "react",
  "react.js": "react",
  "react.js (vite)": "react",
  "typescript": "typescript",
  "javascript": "javascript",
  "next.js": "nextdotjs",
  "next": "nextdotjs",
  "tailwind css": "tailwindcss",
  "tailwindcss": "tailwindcss",
  "tailwind": "tailwindcss",
  "gsap & three.js": "greensock",
  "gsap": "greensock",
  "three.js": "threedotjs",
  "figma": "figma",
  "node.js": "nodedotjs",
  "node": "nodedotjs",
  "express.js": "express",
  "express": "express",
  "mongodb": "mongodb",
  "mongo": "mongodb",
  "mongoose": "mongodb",
  "supabase": "supabase",
  "firebase": "firebase",
  "firebase auth": "firebase",
  "postman": "postman",
  "git": "git",
  "github": "github",
  "postgresql": "postgresql",
  "postgres": "postgresql",
  "sql": "postgresql",
  "sqlite": "sqlite",
  "drift (sqlite)": "sqlite",
  "prisma orm": "prisma",
  "prisma": "prisma",
  "socket.io": "socketdotio",
  "cloudinary": "cloudinary",
  "flutter": "flutter",
  "dart": "dart",
  "solidity": "solidity",
  "python": "python",
  "scikit-learn": "scikitlearn",
  "fastapi": "fastapi",
  "pandas": "pandas",
  "pydantic": "pydantic",
  "tensorflow": "tensorflow",
  "tensorflow (basic)": "tensorflow",
  "pytorch": "pytorch",
  "cuda": "nvidia",
  "google colab": "googlecolab",
  "hugging face api": "huggingface",
  "huggingface": "huggingface",
  "tableau": "tableau",
  "c": "c",
  "java": "openjdk",
  "c++": "cplusplus",
  "cplusplus": "cplusplus",
  "numpy": "numpy",
  "opencv": "opencv",
  "claude": "anthropic",
  "flask": "flask",
  "mlflow": "mlflow",
  "dvc": "dvc",
  "docker": "docker",
  "lightgbm": "lightgbm",
};

function getSkillIconSlug(skill: string): string | null {
  const s = skill.toLowerCase().trim();
  return KNOWN_SLUGS[s] || null;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const statusColor = "bg-emerald-500";
  const statusLabel = "Live";
  const hasPin = title === "StudyNotion" || title === "DairyDesk";

  return (
    <div className={cn("flex flex-col group w-full", className)}>
      {/* Outer Wrapper with Aspect Ratio */}
      <Link
        href={href || "#"}
        target="_blank"
        className="block cursor-pointer w-full"
      >
        <motion.div
          className="relative w-full aspect-[1.3] rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50/80 dark:bg-[#09090b]/80 shadow-sm p-3.5 pb-0 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md hover:border-black/10 dark:hover:border-white/10 sm:p-4 sm:pb-0"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Top Right Pin Icon */}
          <div className="flex items-center justify-end z-30 min-h-[24px]">
            {hasPin && (
              <div className="w-6 h-6 rounded-[6px] bg-transparent border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 17v5" />
                  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
                </svg>
              </div>
            )}
          </div>

          {/* Ambient Hover Background (Images) */}
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none"
            variants={{
              rest: { opacity: 0, scale: 1 },
              hover: { opacity: 1, scale: 1.05 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              backgroundImage: `url('${getProjectBackgroundImage(title)}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Action Text Overlay */}
          <motion.h1
            className="absolute z-30 text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] pointer-events-none"
            variants={{
              rest: { left: "1rem", top: "1rem", x: "0%", y: "0%", opacity: 0 },
              hover: { left: "50%", top: "25%", x: "-50%", y: "-50%", opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {video ? "Play Video" : "View Project"}
          </motion.h1>

          {/* Icon Overlay in Center */}
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
            variants={{
              rest: { scale: 0.5, opacity: 0 },
              hover: { scale: 1, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
          >
            <div className="h-9 w-9 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/50 dark:border-zinc-800/50">
              {video ? (
                <svg className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100 ml-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              )}
            </div>
          </motion.div>

          {/* Floating screenshot sitting at the bottom */}
          <motion.div
            className="absolute bottom-0 left-1/2 w-[90%] rounded-t-lg overflow-hidden border border-black/5 dark:border-white/[0.1] border-b-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_25px_rgba(0,0,0,0.4)] z-20"
            variants={{
              rest: { height: "82%", y: 0, x: "-50%" },
              hover: { height: "74%", y: 4, x: "-50%" },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none w-full h-full object-cover object-top"
              />
            ) : (
              image && (
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover object-top"
                />
              )
            )}
          </motion.div>
        </motion.div>
      </Link>

      {/* Content Area directly below the wrapper */}
      <div className="mt-4 flex flex-col px-0.5">
        <div className="flex items-start justify-between gap-x-2">
          <h3 className="text-[16px] sm:text-[17px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
            {title}
          </h3>
          {/* Status Badge */}
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-black/5 dark:border-white/10 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-[#09090b] shrink-0">
            <span className={cn("w-1.5 h-1.5 rounded-full", statusColor)} />
            {statusLabel}
          </span>
        </div>

        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mt-2 leading-relaxed text-[13px]">
          {description}
        </Markdown>

        {/* Footer containing Tech icons and Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-3.5">
          <div className="flex flex-wrap items-center gap-2">
            {/* Tech Icons */}
            {tags && tags.length > 0 && (
              <div className="flex items-center gap-2 pr-2 border-r border-zinc-200 dark:border-zinc-800">
                {tags
                  .map((tag) => {
                    const slug = getSkillIconSlug(tag);
                    if (!slug) return null;
                    return (
                      <img
                        key={tag}
                        src={`https://cdn.simpleicons.org/${slug}/71717a`}
                        alt={tag}
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5 opacity-80"
                        title={tag}
                      />
                    );
                  })
                  .filter((item): item is JSX.Element => item !== null)
                  .slice(0, 5)}
              </div>
            )}
            {/* Links */}
            {links && links.length > 0 && (
              <div className="flex items-center gap-1.5">
                {links.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    target="_blank"
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-black/5 dark:border-white/10 text-[10px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50 transition-colors"
                  >
                    {link.icon}
                    {link.type}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* View Project Link */}
          <Link
            href={href || "#"}
            target="_blank"
            className="flex items-center gap-1 text-[12px] font-semibold text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            View Project
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
