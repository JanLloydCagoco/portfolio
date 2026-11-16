"use client";

import React, { useEffect, useState, useMemo } from "react";
import { ArrowUpRight01Icon } from "@/frontend/components/icons/NavIcons";
import CoordinateStreak from "@/frontend/components/ui/CoordinateStreak";
import { GitHubContributionData, GitHubContributionDay } from "@/types";

const TARGET_USERNAME = "JanLloydCagoco";
const PROFILE_URL = `https://github.com/${TARGET_USERNAME}`;

function formatTooltip(day: GitHubContributionDay): string {
  if (day.level === -1 || !day.date) return "";
  const [y, m, d] = day.date.split("-").map(Number);
  const dateObj = new Date(Date.UTC(y, m - 1, d));
  const formatted = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  if (day.count === 0) {
    return `No contributions on ${formatted}`;
  }
  return `${day.count.toLocaleString()} contribution${day.count === 1 ? "" : "s"} on ${formatted}`;
}

export default function GitHubActivityCard() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [data, setData] = useState<GitHubContributionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadContributions() {
      try {
        const res = await fetch(
          `/api/github/contributions?username=${TARGET_USERNAME}&year=${currentYear}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: GitHubContributionData = await res.json();
        if (isMounted) {
          setData(json);
          setIsLoading(false);
        }
      } catch (err) {
        console.warn("Failed to load GitHub activity data:", err);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadContributions();

    return () => {
      isMounted = false;
    };
  }, [currentYear]);

  const placeholderWeeks: GitHubContributionDay[][] = useMemo(() => {
    const res: GitHubContributionDay[][] = [];
    for (let w = 0; w < 53; w++) {
      const days: GitHubContributionDay[] = [];
      for (let d = 0; d < 7; d++) {
        days.push({ date: "", count: 0, level: 0 });
      }
      res.push(days);
    }
    return res;
  }, []);

  const displayWeeks = data?.weeks || placeholderWeeks;
  const totalContributions = data?.totalContributions ?? 0;
  const displayYear = data?.year || currentYear;

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
      case -1:
        return "opacity-0 pointer-events-none";
      default:
        return "bg-[var(--border)]";
    }
  };

  return (
    <div className="space-y-3.5 select-none">
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-medium text-primary">Github</h2>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[13px] text-secondary hover:text-primary transition-colors group"
        >
          <span className="group-hover:underline underline-offset-4 decoration-[var(--border-strong)]">
            @{TARGET_USERNAME}
          </span>
          <ArrowUpRight01Icon
            size={12}
            className="shrink-0 text-secondary group-hover:text-primary transition-colors"
          />
        </a>
      </div>

      <div className="relative">
        <CoordinateStreak
          position="bottom-right"
          patternId="cad-streak-github-card"
        />

        <div className="relative z-10 w-full p-4 sm:p-5 rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] transition-all">
          <div className="overflow-x-auto scrollbar-none py-1 w-full">
            <div
              className={`w-full min-w-[560px] flex justify-between gap-[2.5px] sm:gap-[3px] ${
                isLoading ? "opacity-60 animate-pulse" : "opacity-100"
              } transition-opacity duration-300`}
            >
              {displayWeeks.map((days, weekIdx) => (
                <div key={weekIdx} className="flex-1 flex flex-col gap-[2.5px] sm:gap-[3px]">
                  {days.map((day, dayIdx) => {
                    const isCellHidden = day.level === -1;
                    return (
                      <div
                        key={dayIdx}
                        title={isCellHidden ? undefined : formatTooltip(day)}
                        aria-hidden={isCellHidden ? "true" : undefined}
                        className={`w-full aspect-square rounded-[2px] transition-transform ${
                          isCellHidden ? "" : "hover:scale-125"
                        } ${getLevelColor(day.level)}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="relative z-10 text-[13px] sm:text-[14px] text-secondary select-none">
        {isLoading && !data ? (
          <span className="inline-block h-3.5 w-10 rounded bg-[var(--border)] animate-pulse align-middle mr-1" />
        ) : (
          <span className="font-semibold text-primary font-grotesk tracking-tight">
            {totalContributions.toLocaleString()}
          </span>
        )}{" "}
        contributions in {displayYear}
      </p>
    </div>
  );
}
