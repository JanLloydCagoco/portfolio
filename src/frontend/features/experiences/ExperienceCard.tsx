import React from "react";
import { ExperienceRecord } from "@/types";
import OperationsBadgeList from "./OperationsBadgeList";

interface ExperienceCardProps {
  experience: ExperienceRecord;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative space-y-3.5">
      <div
        aria-hidden="true"
        className="absolute -left-14 sm:-left-16 top-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center font-pixel text-[13px] sm:text-[14px] text-primary select-none z-10"
      >
        {experience.initial}
      </div>

      <div>
        <h3 className="text-[17px] sm:text-[18px] font-bold text-primary font-grotesk tracking-tight leading-snug">
          {experience.company}
        </h3>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] font-mono text-muted flex-wrap mt-0.5">
          <span>{experience.employmentType}</span>
          {experience.duration && (
            <>
              <span className="text-muted/60">·</span>
              <span className="tabular-nums">{experience.duration}</span>
            </>
          )}
          {experience.location && (
            <>
              <span className="text-muted/60">·</span>
              <span>{experience.location}</span>
            </>
          )}
        </div>
      </div>

      <div className="space-y-5 pt-0.5">
        {experience.roles.map((role, rIdx) => (
          <div key={rIdx} className="space-y-3">
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-semibold text-primary font-grotesk tracking-tight">
                {role.title}
              </h4>
              <div className="text-[11px] font-mono text-muted tracking-wider uppercase tabular-nums mt-0.5">
                {role.period}
                {role.duration && (
                  <span className="mx-1.5 text-muted/60">·</span>
                )}
                {role.duration && <span>{role.duration}</span>}
              </div>
            </div>

            <div className="space-y-2 text-[13px] sm:text-[14px] text-secondary leading-relaxed">
              {role.description.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <OperationsBadgeList
              operations={role.operations}
              initialVisibleCount={2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
