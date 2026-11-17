"use client";

import React from "react";
import ProfileIdentityRow from "./ProfileIdentityRow";
import CertificationCardStack from "@/frontend/features/certifications/CertificationCardStack";
import SectionHeader from "@/frontend/components/ui/SectionHeader";
import DottedSeparator from "@/frontend/components/ui/DottedSeparator";
import CoordinateStreak from "@/frontend/components/ui/CoordinateStreak";
import TechBadge from "@/frontend/components/ui/TechBadge";
import { projects } from "@/data/projects";
import { timelineRecords } from "@/data/records";
import { allTechStacks } from "@/data/tech";

export default function OverviewView() {
  const featuredTech = allTechStacks;

  return (
    <div className="space-y-16 sm:space-y-20">
      <div className="space-y-4">
        <section aria-label="Profile Identity" className="w-full">
          <ProfileIdentityRow />
        </section>
        <DottedSeparator />
      </div>

      <section aria-label="Selected Projects" className="space-y-3.5 !mt-5 sm:!mt-6">
        <SectionHeader
          title="Projects"
          linkHref="/projects"
          linkLabel="All projects"
        />

        <div className="space-y-2.5">
          {projects.slice(0, 3).map((proj, idx) => {
            const isFeaturedStreak = idx === 0;

            const card = (
              <a
                key={proj.slug}
                href={proj.websiteUrl}
                target={proj.websiteUrl.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="relative z-10 block p-3.5 sm:p-4 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] transition-all group"
              >
                <div className="flex flex-col gap-1.5 @xl:flex-row @xl:items-start @xl:justify-between @xl:gap-4">
                  <div className="@xl:shrink-0 @xl:pt-0.5">
                    <h3 className="text-[20px] font-bold text-primary font-grotesk tracking-tight group-hover:underline">
                      {proj.name}
                    </h3>
                  </div>

                  <div className="flex flex-col @xl:items-end @xl:text-right @xl:max-w-[440px] min-w-0">
                    <div className="inline-flex items-center gap-1.5 text-secondary">
                      <span className="text-[12px] font-mono text-muted tabular-nums">
                        {proj.year}
                      </span>
                      <span className="text-muted/60 text-[12px]">|</span>
                      <span className="text-[12px] font-medium px-2 py-0.5 rounded-[4px] bg-[var(--bg)] border border-[var(--border)] text-secondary">
                        {proj.projectType}
                      </span>
                    </div>
                    <p className="text-[14px] text-secondary leading-snug mt-1.5 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </a>
            );

            if (isFeaturedStreak) {
              return (
                <div key={proj.slug} className="relative">
                  <CoordinateStreak
                    position="bottom-left"
                    patternId="cad-streak-project-csm"
                  />
                  {card}
                </div>
              );
            }

            return card;
          })}
        </div>
      </section>

      <section aria-label="Experiences & Credentials" className="space-y-3.5">
        <SectionHeader
          title="Experiences"
          linkHref="/experiences"
          linkLabel="All experiences"
        />

        <div className="divide-y divide-[var(--border)]">
          {timelineRecords.map((item) => (
            <div
              key={item.id}
              className="py-3 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-0.5 @xl:flex @xl:items-center @xl:justify-between text-[14px]"
            >
              <div className="font-medium text-primary min-w-0 truncate @xl:w-1/3">
                {item.title}
              </div>
              <div className="text-secondary min-w-0 truncate @max-xl:order-3 @max-xl:col-span-2 @max-xl:text-[14px] @xl:w-1/3">
                {item.subtitle}
              </div>
              <div className="text-secondary text-[14px] tabular-nums text-right shrink-0 @xl:w-1/3">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Tech Stacks" className="space-y-3.5">
        <SectionHeader
          title="Stacks"
          linkHref="/stack"
          linkLabel="View all"
        />

        <div className="flex flex-wrap gap-2">
          {featuredTech.slice(0, 9).map((tech, i) => (
            <span key={tech.name} className={i >= 6 ? "max-sm:hidden" : undefined}><TechBadge tech={tech} size="sm" /></span>
          ))}
        </div>
      </section>

      <section aria-label="Certifications" className="space-y-4">
        <SectionHeader
          title="Certifications"
          linkHref="/certifications"
          linkLabel="All certifications"
        />

        <CertificationCardStack />
      </section>
    </div>
  );
}
