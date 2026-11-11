"use client";

import React, { useMemo } from "react";
import { ArrowUpRight01Icon } from "@/lib/icons";
import CoordinateStreak from "@/components/ui/CoordinateStreak";

export default function GitHubActivityCard() {
  // Deterministic contribution matrix: 52 weeks x 7 days (Full Year)
  const weeks = useMemo(() => {
    const WEEKS_COUNT = 52;
    const DAYS_PER_WEEK = 7;
    const result: number[][] = [];

    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let w = 0; w < WEEKS_COUNT; w++) {
      const days: number[] = [];
      for (let d = 0; d < DAYS_PER_WEEK; d++) {
        const rand = random();
        let level = 0;
        if (rand > 0.72) level = 4;
        else if (rand > 0.52) level = 3;
        else if (rand > 0.35) level = 2;
        else if (rand > 0.18) level = 1;
        days.push(level);
      }
      result.push(days);
    }
    return result;
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-950/25 dark:bg-emerald-500/25";
      case 2:
        return "bg-emerald-700/50 dark:bg-emerald-500/50";
      case 3:
        return "bg-emerald-600/75 dark:bg-emerald-400/80";
      case 4:
        return "bg-emerald-600 dark:bg-emerald-400";
      default:
        return "bg-[var(--border)]";
    }
  };

  return (
    <div className="space-y-3.5 select-none">
      {/* Regular Section Label Header: "Github" without logo on left, link on right */}
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-medium text-primary">Github</h2>

        <a
          href="https://github.com/janlloyd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[13px] text-secondary hover:text-primary transition-colors group"
        >
          <span className="group-hover:underline underline-offset-4 decoration-[var(--border-strong)]">@janlloyd</span>
          <ArrowUpRight01Icon
            size={12}
            className="shrink-0 text-secondary group-hover:text-primary transition-colors"
          />
        </a>
      </div>

      {/* Card Wrapper: Holds streak in the back, card on top */}
      <div className="relative">
        {/* Put FIRST: circular streak at the back of the card (lower right) */}
        <CoordinateStreak
          position="bottom-right"
          patternId="cad-streak-github-card"
        />

        {/* THEN the card: sits on top */}
        <div className="relative z-10 w-full p-4 sm:p-5 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] transition-all">
          {/* Contribution Activity Dot Grid: Full width responsive edge-to-edge */}
          <div className="overflow-x-auto scrollbar-none py-1 w-full">
          <div className="w-full min-w-[560px] flex justify-between gap-[2.5px] sm:gap-[3px]">
            {weeks.map((days, weekIdx) => (
              <div key={weekIdx} className="flex-1 flex flex-col gap-[2.5px] sm:gap-[3px]">
                {days.map((level, dayIdx) => (
                  <div
                    key={dayIdx}
                    title={`Activity level: ${level}`}
                    className={`w-full aspect-square rounded-[2px] transition-transform hover:scale-125 ${getLevelColor(
                      level
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* Metric text OUTSIDE the card container */}
      <p className="relative z-10 text-[13px] sm:text-[14px] text-secondary select-none">
        <span className="font-semibold text-primary font-grotesk tracking-tight">
          3,087
        </span>{" "}
        contributions in the last year
      </p>
    </div>
  );
}
