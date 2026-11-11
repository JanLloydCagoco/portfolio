"use client";

import React from "react";
import Link from "next/link";
import ProfileIdentityRow from "./ProfileIdentityRow";
import CertificationCardStack from "./CertificationCardStack";
import GitHubActivityCard from "./GitHubActivityCard";
import SectionHeader from "@/components/ui/SectionHeader";
import DottedSeparator from "@/components/ui/DottedSeparator";
import CoordinateStreak from "@/components/ui/CoordinateStreak";
import { projects } from "@/lib/projects";
import { timelineRecords } from "@/lib/records";
import { allTechStacks } from "@/lib/tech";

export default function OverviewView() {
  // Highlight top 11 core stacks on overview
  const featuredTech = allTechStacks.slice(0, 11);

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* 1. Centered Hero Profile Block & Dotted Separator */}
      <div className="space-y-4">
        <section
          aria-label="Profile Identity"
          className="w-full"
        >
          <ProfileIdentityRow />
        </section>

        {/* 2-Liner Large Circle-Dots Visual Separator */}
        <DottedSeparator />
      </div>

      {/* 2. Projects Summary Block (Reduced space directly below dots) */}
      <section aria-label="Selected Projects" className="space-y-3.5 !mt-5 sm:!mt-6">
        <SectionHeader
          title="Projects"
          linkHref="/projects"
          linkLabel="All projects"
        />

        <div className="space-y-2.5">
          {projects.map((proj, idx) => {
            const isFeaturedStreak = idx === 0;

            const card = (
              <a
                key={proj.slug}
                href={proj.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block p-3.5 sm:p-4 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Left: Enlarged Project Title (NO year below) */}
                  <div className="shrink-0 pt-0.5">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-primary font-grotesk tracking-tight group-hover:underline">
                      {proj.name}
                    </h3>
                  </div>

                  {/* Right: Year (plain text) | [Website] (in container) on top, Short Description below */}
                  <div className="flex flex-col items-end text-right max-w-[380px] sm:max-w-[440px] min-w-0">
                    <div className="inline-flex items-center gap-1.5 text-secondary">
                      <span className="text-[12px] font-mono text-muted tabular-nums">
                        {proj.year}
                      </span>
                      <span className="text-muted/60 text-[11px]">|</span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-[3px] bg-[var(--bg)] border border-[var(--border)] text-secondary">
                        {proj.projectType}
                      </span>
                    </div>
                    <p className="text-[13px] text-secondary leading-snug mt-1.5 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </a>
            );

            if (isFeaturedStreak) {
              return (
                <div key={proj.slug} className="relative">
                  {/* Put FIRST: circular streak at the back of the card (lower left) */}
                  <CoordinateStreak
                    position="bottom-left"
                    patternId="cad-streak-project-csm"
                  />
                  {/* THEN the card sits on top */}
                  {card}
                </div>
              );
            }

            return card;
          })}
        </div>
      </section>

      {/* 3. Experiences Summary Block (Curated employment records) */}
      <section aria-label="Experiences & Credentials" className="space-y-3.5">
        <SectionHeader
          title="Experiences"
          linkHref="/experiences"
          linkLabel="All experiences"
        />

        {/* 3-Column Table Without Headers */}
        <div className="divide-y divide-[var(--border)]">
          {timelineRecords.map((item) => (
            <div
              key={item.id}
              className="py-3 flex items-center justify-between gap-4 text-[14px]"
            >
              <div className="font-medium text-primary min-w-0 truncate sm:w-1/3">
                {item.title}
              </div>
              <div className="text-secondary min-w-0 truncate sm:w-1/3 sm:text-left text-center">
                {item.subtitle}
              </div>
              <div className="text-secondary text-[13px] tabular-nums text-right shrink-0 sm:w-1/3">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Stacks Summary Block */}
      <section aria-label="Tech Stacks" className="space-y-3.5">
        <SectionHeader
          title="Stacks"
          linkHref="/stack"
          linkLabel="View all"
        />

        <div className="flex flex-wrap gap-2">
          {featuredTech.map((tech) => (
            <div
              key={tech.name}
              className="px-3 py-1.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 text-[13px] font-medium text-primary flex items-center gap-2 select-none hover:border-[var(--border-strong)] transition-colors"
            >
              <span className="w-4 h-4 text-secondary flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                {tech.icon}
              </span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Certifications Summary Block */}
      <section aria-label="Certifications" className="space-y-4">
        <SectionHeader
          title="Certifications"
          linkHref="/certifications"
          linkLabel="All certifications"
        />

        <CertificationCardStack />
      </section>

      {/* 6. GitHub Activity Card */}
      <section aria-label="GitHub Activity">
        <GitHubActivityCard />
      </section>
    </div>
  );
}
