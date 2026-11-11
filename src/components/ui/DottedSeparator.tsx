"use client";

import React from "react";

interface DottedSeparatorProps {
  className?: string;
}

/**
 * CAD Micro Coordinate Crosshairs Horizontal Separator
 *
 * Variation 2: Technical drafting coordinate strip.
 * Dual 16px-pitch coordinate rules with subtle dots and sparse registration
 * crosshairs (+) aligned at every 4th coordinate intersection (64px pitch),
 * framed with smooth bilateral gradient masking.
 */
export function DottedSeparator({ className = "" }: DottedSeparatorProps) {
  const rawId = React.useId();
  const patternId = `cad-separator-pattern-${rawId.replace(/[^a-zA-Z0-9-_]/g, "")}`;

  return (
    <div
      aria-hidden="true"
      className={`w-full py-2 select-none [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <svg
        width="100%"
        height="32"
        className="block w-full overflow-hidden text-[var(--text-muted)] opacity-40 dark:opacity-45"
      >
        <defs>
          <pattern
            id={patternId}
            width="64"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {/* -------------------------------------------------------------
                Row 0 (y = 8): 16px pitch coordinate rule
                Dots at x = 8, 40, 56; Registration Crosshair (+) at x = 24
               ------------------------------------------------------------- */}
            <circle cx="8" cy="8" r="1.15" fill="currentColor" />

            {/* Registration Crosshair (+) at (24, 8) */}
            <line
              x1="20"
              y1="8"
              x2="28"
              y2="8"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
            />
            <line
              x1="24"
              y1="4"
              x2="24"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
            />

            <circle cx="40" cy="8" r="1.15" fill="currentColor" />
            <circle cx="56" cy="8" r="1.15" fill="currentColor" />

            {/* -------------------------------------------------------------
                Row 1 (y = 24): 16px pitch coordinate rule
                Dots at x = 8, 40, 56; Registration Crosshair (+) at x = 24
               ------------------------------------------------------------- */}
            <circle cx="8" cy="24" r="1.15" fill="currentColor" />

            {/* Registration Crosshair (+) at (24, 24) */}
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
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

export default DottedSeparator;
