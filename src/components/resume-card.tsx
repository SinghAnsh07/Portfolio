"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, Award, Github, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  certificateUrl?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  certificateUrl,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className="block cursor-pointer"
      onClick={() => {
        if (description) {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-y-1 gap-x-2 text-base">
              <h3 className="inline-flex items-center font-semibold leading-snug text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 shrink-0",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-left sm:text-right shrink-0">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs mt-0.5">{subtitle}</div>}
          </CardHeader>
          {(description || badges || certificateUrl || href) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description && (
                description.includes("\n•") || description.startsWith("•") ? (
                  <ul className="list-none space-y-1 mt-1">
                    {description.split("\n").filter(Boolean).map((line, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-0.5 text-muted-foreground shrink-0">•</span>
                        <span>{line.replace(/^•\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{description}</p>
                )
              )}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-3">
                {certificateUrl && (
                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    <Award className="size-3" />
                    View Certificate
                  </a>
                )}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    {href.includes("github.com") ? (
                      <>
                        <Github className="size-3" />
                        GitHub Repo
                      </>
                    ) : (
                      <>
                        <Globe className="size-3" />
                        Website
                      </>
                    )}
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
