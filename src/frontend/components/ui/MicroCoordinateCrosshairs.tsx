"use client";

import React from "react";

export function MicroCoordinateCrosshairs() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 right-0 w-[280px] sm:w-[360px] h-[220px] sm:h-[280px] z-0 select-none overflow-hidden text-[var(--stipple-dot)]"
        style={{
          maskImage:
            "radial-gradient(ellipse at 100% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 100% 0%, black 20%, transparent 75%)",
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern
              id="cad-pattern-tr"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="8" cy="8" r="1" fill="currentColor" />
              <circle cx="24" cy="8" r="1" fill="currentColor" />
              <circle cx="40" cy="8" r="1" fill="currentColor" />
              <circle cx="56" cy="8" r="1" fill="currentColor" />

              <circle cx="8" cy="24" r="1" fill="currentColor" />

              <line
                x1="20"
                y1="24"
                x2="28"
                y2="24"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <line
                x1="24"
                y1="20"
                x2="24"
                y2="28"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />

              <circle cx="40" cy="24" r="1" fill="currentColor" />
              <circle cx="56" cy="24" r="1" fill="currentColor" />

              <circle cx="8" cy="40" r="1" fill="currentColor" />
              <circle cx="24" cy="40" r="1" fill="currentColor" />
              <circle cx="40" cy="40" r="1" fill="currentColor" />
              <circle cx="56" cy="40" r="1" fill="currentColor" />

              <circle cx="8" cy="56" r="1" fill="currentColor" />
              <circle cx="24" cy="56" r="1" fill="currentColor" />
              <circle cx="40" cy="56" r="1" fill="currentColor" />
              <circle cx="56" cy="56" r="1" fill="currentColor" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#cad-pattern-tr)" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 w-[280px] sm:w-[360px] h-[220px] sm:h-[280px] z-0 select-none overflow-hidden text-[var(--stipple-dot)]"
        style={{
          maskImage:
            "radial-gradient(ellipse at 0% 100%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 0% 100%, black 20%, transparent 75%)",
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern
              id="cad-pattern-bl"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="8" cy="8" r="1" fill="currentColor" />
              <circle cx="24" cy="8" r="1" fill="currentColor" />
              <circle cx="40" cy="8" r="1" fill="currentColor" />
              <circle cx="56" cy="8" r="1" fill="currentColor" />

              <circle cx="8" cy="24" r="1" fill="currentColor" />

              <line
                x1="20"
                y1="24"
                x2="28"
                y2="24"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <line
                x1="24"
                y1="20"
                x2="24"
                y2="28"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />

              <circle cx="40" cy="24" r="1" fill="currentColor" />
              <circle cx="56" cy="24" r="1" fill="currentColor" />

              <circle cx="8" cy="40" r="1" fill="currentColor" />
              <circle cx="24" cy="40" r="1" fill="currentColor" />
              <circle cx="40" cy="40" r="1" fill="currentColor" />
              <circle cx="56" cy="40" r="1" fill="currentColor" />

              <circle cx="8" cy="56" r="1" fill="currentColor" />
              <circle cx="24" cy="56" r="1" fill="currentColor" />
              <circle cx="40" cy="56" r="1" fill="currentColor" />
              <circle cx="56" cy="56" r="1" fill="currentColor" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#cad-pattern-bl)" />
        </svg>
      </div>
    </>
  );
}

export default MicroCoordinateCrosshairs;
