"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { useEffect, useState } from "react";

export default function SpaceBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || theme !== "dark") return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {/* --- Shooting Stars --- */}
      {/* 1. Down-Left */}
      <div 
        className="absolute top-[10vh] left-[80vw] w-[200px] h-[2px] bg-gradient-to-r from-transparent to-white rounded-full opacity-0 animate-[shootingStar_12s_linear_infinite]" 
        style={{ '--angle': '150deg' } as React.CSSProperties} 
      />
      {/* 2. Down-Right (delayed) */}
      <div 
        className="absolute top-[20vh] left-[20vw] w-[150px] h-[2px] bg-gradient-to-r from-transparent to-white rounded-full opacity-0 animate-[shootingStar_15s_linear_infinite]" 
        style={{ '--angle': '30deg', animationDelay: '5s' } as React.CSSProperties} 
      />
      {/* 3. Up-Left (delayed) */}
      <div 
        className="absolute top-[80vh] left-[70vw] w-[250px] h-[2px] bg-gradient-to-r from-transparent to-white rounded-full opacity-0 animate-[shootingStar_20s_linear_infinite]" 
        style={{ '--angle': '210deg', animationDelay: '11s' } as React.CSSProperties} 
      />

      {/* --- Planets --- */}
      {/* 1. Saturn drifting Left */}
      <div 
        className="absolute animate-[planetDrift_60s_linear_infinite]"
        style={{ '--start-x': '110vw', '--start-y': '15vh', '--end-x': '-30vw', '--end-y': '40vh' } as React.CSSProperties}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="opacity-20 animate-[planetSpin_30s_linear_infinite]">
          <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="40" ry="10" transform="rotate(-20 50 50)" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* 2. Small ringless planet drifting Right & Up */}
      <div 
        className="absolute animate-[planetDrift_80s_linear_infinite]"
        style={{ '--start-x': '-20vw', '--start-y': '70vh', '--end-x': '120vw', '--end-y': '20vh', animationDelay: '10s' } as React.CSSProperties}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="opacity-30">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="animate-[planetSpin_20s_linear_infinite]" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. Gas giant drifting slowly Down-Left */}
      <div 
        className="absolute animate-[planetDrift_120s_linear_infinite]"
        style={{ '--start-x': '80vw', '--start-y': '-20vh', '--end-x': '20vw', '--end-y': '120vh', animationDelay: '5s' } as React.CSSProperties}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="opacity-10 animate-[planetSpin_60s_linear_infinite_reverse]">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" />
          <path d="M 5 50 Q 50 20 95 50" stroke="white" strokeWidth="1" fill="none" />
          <path d="M 10 30 Q 50 10 90 30" stroke="white" strokeWidth="1" fill="none" />
          <path d="M 10 70 Q 50 90 90 70" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </div>
  );
}
