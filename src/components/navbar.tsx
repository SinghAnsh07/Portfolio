"use client"

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MapPin, Users, Mail, ExternalLink, Calendar, Code, ArrowUpRight } from "lucide-react";

const VerifiedBadge = () => (
  <span className="inline-flex items-center justify-center bg-sky-500 text-white rounded-full p-0.5 size-3.5 shrink-0 ml-1">
    <svg className="size-2.5 fill-current" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  </span>
);

function SocialHoverCard({ name, url, icon: Icon }: { name: string; url: string; icon: any }) {
  // Configs for different social networks
  const config = {
    GitHub: {
      banner: "bg-gradient-to-r from-zinc-800 via-zinc-900 to-black",
      bannerImage: "/samurai-dark.jpg", // reuse header samurai image
      title: "Ansh Singh",
      handle: "@SinghAnsh07",
      bio: "Full-Stack Developer | AI Systems | Competitive Programming. Building cool stuff and helping others.",
      verified: true,
      stats: (
        <div className="flex items-center gap-4 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <span className="flex items-center gap-1">
            <Users className="size-3.5" /> <strong>46</strong> followers
          </span>
          <span>•</span>
          <span><strong>88</strong> following</span>
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <MapPin className="size-3" /> Varanasi, India
        </span>
      )
    },
    LinkedIn: {
      banner: "bg-gradient-to-r from-blue-700 to-indigo-900",
      bannerImage: "",
      title: "Ansh Singh",
      handle: "Software Developer Intern",
      bio: "Research Intern @ CSGT, VIT Chennai. Focused on building robust full-stack applications and ML pipelines.",
      verified: true,
      stats: (
        <div className="flex items-center gap-1 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <Users className="size-3.5" /> <strong>500+</strong> connections
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <MapPin className="size-3" /> Varanasi, UP, India
        </span>
      )
    },
    Codolio: {
      banner: "bg-gradient-to-r from-emerald-600 via-teal-900 to-zinc-950",
      bannerImage: "",
      title: "Ansh Singh",
      handle: "@zenansh",
      bio: "DSA & Problem Solving portfolio. Active contributor across coding platforms (LeetCode, CodeChef).",
      verified: false,
      stats: (
        <div className="flex items-center gap-1.5 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <Code className="size-3.5" /> <strong>500+</strong> DSA Problems Solved
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <ExternalLink className="size-3" /> codolio.com/profile/AnshSingh
        </span>
      )
    },
    email: {
      banner: "bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-800",
      bannerImage: "",
      title: "Send Email",
      handle: "snghansh07@gmail.com",
      bio: "Looking for collaboration, internships, or freelance projects? Direct message me anytime!",
      verified: false,
      stats: (
        <div className="flex items-center gap-1 text-[12px] text-zinc-500 dark:text-zinc-400 mt-2">
          <Mail className="size-3.5" /> Direct email contact
        </div>
      ),
      meta: (
        <span className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <Calendar className="size-3" /> Fast response (within 24h)
        </span>
      )
    }
  };

  const current = config[name as keyof typeof config] || config["email"];

  return (
    <HoverCard openDelay={200} closeDelay={150}>
      <HoverCardTrigger asChild>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-12"
          )}
        >
          <Icon className="size-4" />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent 
        className="p-0 overflow-hidden w-80 bg-white/95 dark:bg-zinc-950/95 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-xl z-50 pointer-events-auto"
        side="top"
        align="center"
        sideOffset={12}
      >
        <div className="relative h-20 w-full overflow-hidden">
          {current.bannerImage ? (
            <img 
              src={current.bannerImage} 
              alt="Profile banner" 
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className={cn("w-full h-full", current.banner)} />
          )}
        </div>
        
        {/* Avatar positioned sticking out from banner */}
        <div className="absolute top-10 left-4 z-20">
          <Avatar className="size-14 border-[3px] border-white dark:border-zinc-950 shadow-md">
            <AvatarImage src="/me.png" alt={current.title} />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="pt-8 px-4 pb-4 flex flex-col">
          <div className="flex items-center">
            <h4 className="text-[14px] font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
              {current.title}
            </h4>
            {current.verified && <VerifiedBadge />}
          </div>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
            {current.handle}
          </p>
          
          <p className="text-[11px] text-zinc-600 dark:text-zinc-300 mt-2.5 leading-normal">
            {current.bio}
          </p>
          
          {current.stats}
          
          <div className="h-[1px] bg-black/5 dark:bg-white/5 my-3" />
          
          <div className="flex items-center justify-between">
            {current.meta}
            <Link 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-0.5"
            >
              View profile <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex justify-center origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <SocialHoverCard name={name} url={social.url} icon={social.icon} />
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
