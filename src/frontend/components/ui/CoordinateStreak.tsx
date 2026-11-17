"use client";

import React from "react";

interface CoordinateStreakProps {
  position?: "bottom-left" | "bottom-right";
  className?: string;
  patternId?: string;
}

export function CoordinateStreak({
  position = "bottom-left",
  className = "",
  patternId = "cad-streak-pattern",
}: CoordinateStreakProps) {
  const isBottomLeft = position === "bottom-left";

  const defaultClasses = isBottomLeft
    ? "-left-6 sm:-left-8 -bottom-6 sm:-bottom-8 w-[180px] sm:w-[220px] h-[180px] sm:h-[220px]"
    : "-right-8 sm:-right-12 -bottom-8 sm:-bottom-10 w-[240px] sm:w-[280px] h-[240px] sm:h-[280px]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 select-none overflow-hidden text-[var(--text-muted)] opacity-30 dark:opacity-35 ${defaultClasses} ${className}`}
      style={{
        maskImage:
          "radial-gradient(circle at center, black 25%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 25%, transparent 70%)",
      }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="8" cy="8" r="1.15" fill="currentColor" />
            <circle cx="24" cy="8" r="1.15" fill="currentColor" />
            <circle cx="40" cy="8" r="1.15" fill="currentColor" />
            <circle cx="56" cy="8" r="1.15" fill="currentColor" />

            <circle cx="8" cy="24" r="1.15" fill="currentColor" />

            <line
              x1="20"
              y1="24"
              x2="28"
              y2="24"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="20"
              x2="24"
              y2="28"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
            />

            <circle cx="40" cy="24" r="1.15" fill="currentColor" />
            <circle cx="56" cy="24" r="1.15" fill="currentColor" />

            <circle cx="8" cy="40" r="1.15" fill="currentColor" />
            <circle cx="24" cy="40" r="1.15" fill="currentColor" />
            <circle cx="40" cy="40" r="1.15" fill="currentColor" />
            <circle cx="56" cy="40" r="1.15" fill="currentColor" />

            <circle cx="8" cy="56" r="1.15" fill="currentColor" />
            <circle cx="24" cy="56" r="1.15" fill="currentColor" />
            <circle cx="40" cy="56" r="1.15" fill="currentColor" />
            <circle cx="56" cy="56" r="1.15" fill="currentColor" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

export default CoordinateStreak;
