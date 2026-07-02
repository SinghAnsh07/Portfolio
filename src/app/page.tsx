/* eslint-disable @next/next/no-img-element */
"use client";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { GithubGraph } from "@/components/GithubGraph";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Antigravity = dynamic(() => import('@/components/magicui/Antigravity'), { ssr: false });
import Image from "next/image";
import { BannerParticles } from "@/components/BannerParticles";
import { CurrentTime } from "@/components/CurrentTime";

interface ParticlesProps {
  // your props here
}
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { theme } = useTheme();
  const [showAllProjects, setShowAllProjects] = useState(false);
  return (
    <div style={{ width: "100%", position: "relative" }}>



      {/* Antigravity Background
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <Antigravity
          count={300}
          magnetRadius={4}
          ringRadius={3}
          autoAnimate={true}
          color={theme === "dark" ? "#F4C2C2" : "#660033"}
          particleSize={1}
          waveSpeed={1}
          waveAmplitude={1}
          lerpSpeed={0.3}
          pulseSpeed={1}
        />
      </div> */}


      <main className="flex flex-col min-h-[100dvh] space-y-10">
        {/* Samurai Header Banner */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] overflow-hidden select-none">
            {/* Light Mode Banner */}
            <Image
              src="/samurai-light.jpg"
              alt="Samurai Field Light"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover object-center dark:hidden"
            />
            {/* Dark Mode Banner */}
            <Image
              src="/samurai-dark.jpg"
              alt="Samurai Field Dark"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="hidden object-cover object-center dark:block"
            />
            {/* Sakura Floating Particle Effect */}
            <BannerParticles />

            {/* Blend Gradients — dissolve all four edges into page background */}
            {/* Top — covers top 60% */}
            <div className="absolute inset-x-0 top-0 h-[60%] pointer-events-none z-[5] bg-gradient-to-b from-white dark:from-zinc-950 to-transparent" />
            {/* Bottom — covers bottom 60% */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none z-[5] bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
            {/* Left — covers left 30% */}
            <div className="absolute left-0 top-0 bottom-0 w-[30%] pointer-events-none z-10 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent" />
            {/* Right — covers right 30% */}
            <div className="absolute right-0 top-0 bottom-0 w-[30%] pointer-events-none z-10 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent" />

            {/* Digital Clock */}
            <div className="absolute bottom-4 right-4 z-10 pointer-events-auto bg-white/10 dark:bg-black/35 backdrop-blur-[3px] px-2.5 py-0.5 rounded border border-black/[0.03] dark:border-white/[0.05] shadow-sm">
              <CurrentTime />
            </div>
          </div>
        </BlurFade>

        <section id="hero">
          <div className="mx-auto w-full max-w-4xl space-y-8">
            <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start justify-between">
              <div className="flex-col flex flex-1 space-y-3 text-center sm:text-left items-center sm:items-start">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center sm:text-left"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} `}
                />
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-lg italic text-muted-foreground font-serif text-center sm:text-left"
                  yOffset={8}
                  text='"Premature optimisation is the root of all evil."'
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl text-zinc-500 dark:text-zinc-400 text-center sm:text-left"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-40 border bg-transparent">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-contain"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="work" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {
              DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                    certificateUrl={work.certificateUrl}
                  />
                </BlurFade>
              ))}
          </div>
        </section>
        <section id="education" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Skills & Technologies</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 w-full">
              {DATA.skills.map((skill, id) => {
                const iconSlug = getSkillIconSlug(skill);
                return (
                  <BlurFade 
                    key={skill} 
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    className="grow flex"
                  >
                    <div className="grow flex items-center justify-center gap-2 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0a0a0a] dark:hover:bg-[#121214] border border-black/10 dark:border-white/10 rounded-[6px] transition-colors duration-200 cursor-default">
                      {iconSlug && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconSlug}/71717a`}
                          alt={skill}
                          width={14}
                          height={14}
                          loading="lazy"
                          decoding="async"
                          className="h-3.5 w-3.5 opacity-80"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                      <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">
                        {skill}
                      </span>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>
        <section id="projects" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from Web Development to Data Science and Machine Learning. Here are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {[
                ...DATA.projects.map((p) => ({ ...p, isMini: false })),
                ...DATA.miniprojects.map((p) => ({
                  ...p,
                  href: p.links?.[0]?.href || "#",
                  video: "",
                  isMini: true,
                })),
              ]
                .slice(0, showAllProjects ? undefined : 4)
                .map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={!project.isMini ? project.video : ""}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
            </div>

            {/* Centered View All Toggle Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-lg dark:shadow-black/85 cursor-pointer"
              >
                {showAllProjects ? "Show Less" : "View All"}
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 text-zinc-500 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{
                    transform: showAllProjects ? "rotate(-45deg)" : "none",
                  }}
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <GithubGraph />
        </BlurFade>
        <section id="hackathons" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I participated in {DATA.webdevprojects.length}+ hackathon{DATA.webdevprojects.length > 1 ? 's' : ''}.
                    These experiences allowed me to collaborate with teams, experiment with new technologies,
                    and build innovative solutions under time constraints.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.webdevprojects.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="certifications" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Certifications
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Some of my Certifications & Achievements
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the certifications and Achievements I’ve earned from various platforms, showcasing my dedication
                    to continuous learning and growth in tech.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {DATA.certifications.map((cert, idx) => (
                <BlurFade key={idx} delay={BLUR_FADE_DELAY * 11 + idx * 0.05}>

                  <Link
                    href={cert.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden shadow-md border border-border bg-background hover:shadow-xl transition-all"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full object-cover h-48"
                    />
                    <span className="block p-4 text-center">
                      <h3 className="text-md font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                      <span className="block w-full border rounded-2xl p-2 text-sm mt-2">
                        View Certificate
                      </span>
                    </span>
                  </Link>

                </BlurFade>
              ))}
            </div>
          </div>
        </section>


        {/* <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section> */}
        <section id="contact" className="relative w-full pt-12 scroll-mt-20">
          <div 
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/10 dark:border-white/5 pointer-events-none" 
            style={{
              maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)',
              WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)'
            }}
          />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="absolute top-0 right-0 w-[3px] h-[3px] bg-black/30 dark:bg-white/[0.15] translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on LinkedIn
                  </Link>{" "}
                  and I&apos;ll respond whenever I can.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>


      </main>
    </div>
  );
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
};

function getSkillIconSlug(skill: string): string | null {
  const s = skill.toLowerCase().trim();
  return KNOWN_SLUGS[s] || null;
}
