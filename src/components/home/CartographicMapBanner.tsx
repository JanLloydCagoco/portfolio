"use client";

import dynamic from "next/dynamic";

const OpenFreeMapBanner = dynamic(
  () => import("./OpenFreeMapBanner"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full relative rounded-[6px] overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] select-none">
        <div className="w-full h-[200px] sm:h-[240px] md:h-[260px] relative flex flex-col items-center justify-center text-[11px] font-mono text-muted space-y-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping mb-1" />
          <span>Baggao, Cagayan, Philippines</span>
          <span className="text-[10px] text-muted/70">17.8967° N, 121.8700° E</span>
        </div>
      </div>
    ),
  }
);

export default OpenFreeMapBanner;
