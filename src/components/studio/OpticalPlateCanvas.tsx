"use client";

import React from "react";
import { Project } from "@/types";

export type OpticalMode = "halftone" | "dither" | "mosaic";
export type PlateVariant = "A" | "B" | "C";

interface OpticalPlateCanvasProps {
  project: Project;
  plateVariant?: PlateVariant;
  initialMode?: OpticalMode;
  interactive?: boolean;
  showControls?: boolean;
  className?: string;
  onInspectClick?: () => void;
}

export default function OpticalPlateCanvas({
  project,
  plateVariant = "A",
  interactive = true,
  className = "",
  onInspectClick,
}: OpticalPlateCanvasProps) {
  const isWorkspace = project.screenTheme.layout === "workspace";

  return (
    <div
      onClick={onInspectClick}
      className={`group relative overflow-hidden rounded-[6px] hairline-box halftone-well flex items-center justify-center p-5 sm:p-7 select-none ${
        onInspectClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {/* Discreet Synthetic Stand-In Provenance Pill */}
      <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-[3px] bg-[var(--bg)]/90 hairline-box text-[10px] font-medium tracking-[0.04em] tabular-nums text-muted">
        SYNTHETIC STAND-IN
      </div>

      {/* Foreground Crisp UI Mockup Artifact */}
      {isWorkspace ? (
        /* =========================================================
           PROJECT ONE: Crisp Desktop SaaS / Web Application Mockup
           ========================================================= */
        <div className="w-full max-w-[520px] rounded-[6px] bg-[var(--bg)] hairline-box shadow-mockup overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1">
          {/* Browser / Window Top Chrome */}
          <div className="h-7 px-3 hairline-b bg-[var(--bg-elevated)]/60 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
            </div>
            <div className="px-3 py-0.5 rounded-[3px] bg-[var(--bg)] hairline-box text-[10px] text-secondary tabular-nums truncate max-w-[180px]">
              {plateVariant === "A"
                ? "app.companyone.com/overview"
                : plateVariant === "B"
                ? "design.companyone.com/tokens"
                : "app.companyone.com/workflows"}
            </div>
            <div className="w-8" />
          </div>

          {/* Window Content Body */}
          {plateVariant === "A" && (
            <div className="grid grid-cols-12 min-h-[195px] sm:min-h-[215px]">
              {/* Left Sidebar */}
              <div className="col-span-3 hairline-r p-2.5 flex flex-col justify-between bg-[var(--bg-elevated)]/25">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 pb-1.5 hairline-b">
                    <span
                      className="w-3.5 h-3.5 rounded-[3px] flex items-center justify-center text-[10px] font-semibold text-white shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      C
                    </span>
                    <span className="text-[10px] font-medium text-primary truncate">
                      Company One
                    </span>
                  </div>
                  <div className="px-1.5 py-1 rounded-[3px] bg-[var(--bg-elevated)] text-[10px] font-medium text-primary">
                    Overview
                  </div>
                  <div className="px-1.5 py-1 text-[10px] text-secondary">
                    Projects
                  </div>
                  <div className="px-1.5 py-1 text-[10px] text-secondary">
                    Analytics
                  </div>
                  <div className="px-1.5 py-1 text-[10px] text-secondary">
                    Settings
                  </div>
                </div>
                <div className="pt-2 hairline-t flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[var(--border-strong)]" />
                  <span className="text-[10px] text-secondary truncate">
                    Workspace v2.4
                  </span>
                </div>
              </div>

              {/* Right Main Dashboard */}
              <div className="col-span-9 p-3 sm:p-3.5 flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-primary">
                      Product Overview
                    </div>
                    <div className="text-[10px] text-secondary">
                      Updated today · Q4 release cycle
                    </div>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded-[3px] text-[10px] font-medium text-white"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    + New Release
                  </span>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-2 tabular-nums">
                  <div className="p-2 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/40">
                    <div className="text-[10px] text-secondary">Active Users</div>
                    <div className="text-[13px] font-semibold text-primary mt-0.5">
                      24.8k
                    </div>
                    <div className="text-[10px] text-secondary mt-0.5">+14.2%</div>
                  </div>
                  <div className="p-2 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/40">
                    <div className="text-[10px] text-secondary">Conversion</div>
                    <div className="text-[13px] font-semibold text-primary mt-0.5">
                      4.62%
                    </div>
                    <div className="text-[10px] text-secondary mt-0.5">+0.8%</div>
                  </div>
                  <div className="p-2 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/40">
                    <div className="text-[10px] text-secondary">Response</div>
                    <div className="text-[13px] font-semibold text-primary mt-0.5">
                      118ms
                    </div>
                    <div className="text-[10px] text-secondary mt-0.5">Optimal</div>
                  </div>
                </div>

                {/* Clean Bar Chart Block */}
                <div className="p-2.5 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/25 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-secondary mb-1.5">
                    <span>Weekly Engagement</span>
                    <span className="tabular-nums">Mon — Sun</span>
                  </div>
                  <div className="flex items-end justify-between gap-1.5 h-11 pt-1">
                    {[42, 64, 52, 78, 92, 70, 86].map((val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-t-[2px] transition-all duration-300"
                        style={{
                          height: `${val}%`,
                          backgroundColor:
                            idx === 4
                              ? "var(--accent)"
                              : "var(--border-strong)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {plateVariant === "B" && (
            /* Variant B: Clean Design System & Typography Specimen */
            <div className="p-4 min-h-[195px] sm:min-h-[215px] flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between pb-2 hairline-b">
                <span className="text-[11px] font-semibold text-primary">
                  Design System &amp; Brand Foundations
                </span>
                <span className="text-[10px] text-secondary tabular-nums">
                  v2.0 Tokens
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/35 space-y-1.5">
                  <div className="text-[10px] text-secondary">Typography Scale</div>
                  <div className="text-[18px] font-semibold leading-none text-primary">
                    Aa Bb Cc
                  </div>
                  <div className="text-[10px] text-secondary">
                    Display · 32px / 1.15 · -0.02em
                  </div>
                </div>

                <div className="p-2.5 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/35 space-y-2">
                  <div className="text-[10px] text-secondary">Color Palette</div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-6 h-6 rounded-[3px]"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <span className="w-6 h-6 rounded-[3px] bg-[var(--text-primary)]" />
                    <span className="w-6 h-6 rounded-[3px] bg-[var(--text-secondary)]" />
                    <span className="w-6 h-6 rounded-[3px] hairline-box bg-[var(--bg)]" />
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/25 flex items-center justify-between gap-2">
                <span className="text-[10px] text-secondary">
                  Interactive Controls
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-1 rounded-[3px] text-[10px] font-medium text-white"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Primary Action
                  </span>
                  <span className="px-2.5 py-1 rounded-[3px] hairline-box bg-[var(--bg)] text-[10px] font-medium text-primary">
                    Secondary
                  </span>
                </div>
              </div>
            </div>
          )}

          {plateVariant === "C" && (
            /* Variant C: Workflow & Release Pipeline */
            <div className="p-4 min-h-[195px] sm:min-h-[215px] flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between pb-2 hairline-b">
                <span className="text-[11px] font-semibold text-primary">
                  Product Release Pipeline
                </span>
                <span className="text-[10px] text-secondary tabular-nums">
                  3 Active Sprints
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 flex-1">
                {[
                  {
                    col: "In Discovery",
                    items: ["User Onboarding", "Search Filters"],
                  },
                  {
                    col: "In Design",
                    items: ["Checkout Flow", "Billing Portal"],
                  },
                  {
                    col: "Shipped",
                    items: ["Design Tokens", "Navigation v2"],
                  },
                ].map((group) => (
                  <div
                    key={group.col}
                    className="p-2 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/30 space-y-1.5"
                  >
                    <div className="text-[10px] font-medium text-secondary">
                      {group.col}
                    </div>
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="p-1.5 rounded-[3px] bg-[var(--bg)] hairline-box text-[10px] text-primary font-medium"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* =========================================================
           PROJECT TWO: Crisp Mobile App UI Mockup (Dual Phone Frames)
           ========================================================= */
        <div className="flex items-center justify-center gap-4 sm:gap-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
          {/* Primary Phone Screen */}
          <div className="w-[156px] sm:w-[172px] rounded-[18px] bg-[var(--bg)] hairline-box shadow-mockup p-2.5 flex flex-col justify-between min-h-[225px] sm:min-h-[240px]">
            {/* Top Speaker Pill */}
            <div className="w-10 h-1 rounded-full bg-[var(--border-strong)] mx-auto mb-2" />

            {plateVariant !== "B" ? (
              <div className="flex-1 flex flex-col justify-between space-y-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-secondary">Good morning</div>
                    <div className="text-[11px] font-semibold text-primary">
                      Daily Overview
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full bg-[var(--bg-elevated)] hairline-box" />
                </div>

                {/* Primary Balance / Summary Card */}
                <div
                  className="p-2.5 rounded-[8px] text-white space-y-1"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <div className="text-[10px] opacity-85">Monthly Goal</div>
                  <div className="text-[14px] font-semibold tabular-nums">
                    84% Complete
                  </div>
                  <div className="w-full h-1 rounded-full bg-white/25 overflow-hidden">
                    <div className="w-4/5 h-full bg-white" />
                  </div>
                </div>

                {/* Activity Rows */}
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded-[6px] bg-[var(--bg-elevated)]/60 hairline-box flex items-center justify-between text-[10px]">
                    <span className="text-primary font-medium">Design Sync</span>
                    <span className="text-secondary tabular-nums">10:00 AM</span>
                  </div>
                  <div className="p-1.5 rounded-[6px] bg-[var(--bg-elevated)]/60 hairline-box flex items-center justify-between text-[10px]">
                    <span className="text-primary font-medium">Prototype Review</span>
                    <span className="text-secondary tabular-nums">2:30 PM</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Variant B: Mobile Component Sheet */
              <div className="flex-1 flex flex-col justify-between space-y-2.5">
                <div className="text-[10px] font-semibold text-primary">
                  Mobile UI Kit
                </div>
                <div className="p-2 rounded-[6px] bg-[var(--bg-elevated)]/60 hairline-box space-y-1.5">
                  <div className="text-[10px] text-secondary">Notifications</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-primary font-medium">
                      Push Alerts
                    </span>
                    <span
                      className="w-6 h-3.5 rounded-full p-0.5 flex justify-end"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-white" />
                    </span>
                  </div>
                </div>
                <div
                  className="py-1.5 rounded-[6px] text-center text-[10px] font-medium text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Continue →
                </div>
              </div>
            )}

            {/* Home Indicator */}
            <div className="w-12 h-1 rounded-full bg-[var(--border-strong)] mx-auto mt-2.5" />
          </div>

          {/* Secondary Companion Phone Screen (visible on sm+) */}
          <div className="hidden sm:flex w-[156px] rounded-[18px] bg-[var(--bg)] hairline-box shadow-mockup p-2.5 flex-col justify-between min-h-[215px] opacity-95">
            <div className="w-10 h-1 rounded-full bg-[var(--border-strong)] mx-auto mb-2" />
            <div className="flex-1 flex flex-col justify-between space-y-2">
              <div className="text-[10px] font-semibold text-primary">
                Weekly Insights
              </div>
              <div className="p-2.5 rounded-[8px] bg-[var(--bg-elevated)]/50 hairline-box flex-1 flex flex-col justify-between">
                <div className="text-[10px] text-secondary">Activity Trend</div>
                <div className="flex items-end justify-between gap-1 h-14 pt-2">
                  {[35, 55, 48, 82, 68, 94].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-[2px]"
                      style={{
                        height: `${h}%`,
                        backgroundColor:
                          i === 5 ? "var(--accent)" : "var(--border-strong)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-secondary pt-1">
                <span>Retention</span>
                <span className="text-primary font-semibold tabular-nums">
                  92.4%
                </span>
              </div>
            </div>
            <div className="w-12 h-1 rounded-full bg-[var(--border-strong)] mx-auto mt-2.5" />
          </div>
        </div>
      )}

      {/* Subtle Fluted Glass Bottom Hover Bar */}
      {interactive && onInspectClick && (
        <div className="absolute inset-x-0 bottom-0 h-9 px-4 fluted-glass hairline-t flex items-center justify-between text-[12px] font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>Inspect Case Study</span>
          <span>→</span>
        </div>
      )}
    </div>
  );
}
