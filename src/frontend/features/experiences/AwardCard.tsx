import React from "react";
import { AwardRecord } from "@/types";
import OperationsBadgeList from "./OperationsBadgeList";

interface AwardCardProps {
  award: AwardRecord;
}

export default function AwardCard({ award }: AwardCardProps) {
  return (
    <div className="relative space-y-2.5">
      <div
        aria-hidden="true"
        className="absolute -left-14 sm:-left-16 top-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center font-pixel text-[13px] sm:text-[14px] text-primary select-none z-10"
      >
        {award.initial}
      </div>

      <div>
        <h3 className="text-[16px] sm:text-[17px] font-bold text-primary font-grotesk tracking-tight leading-snug">
          {award.title}
        </h3>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] font-mono text-muted flex-wrap mt-0.5">
          <span>{award.subtitle}</span>
          <span className="text-muted/60">·</span>
          <span className="tabular-nums">{award.period}</span>
          <span className="text-muted/60">·</span>
          <span className="text-muted">{award.organization}</span>
        </div>
      </div>

      <OperationsBadgeList
        operations={award.operations}
        initialVisibleCount={2}
      />
    </div>
  );
}
