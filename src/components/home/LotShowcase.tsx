"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { useTheme } from "@/providers/ThemeProvider";
import LotStage3D from "@/components/studio/LotStage3D";

export default function LotShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const activeProject = projects[activeIndex] ?? projects[0];

  const sweepColor =
    resolvedTheme === "dark" ? activeProject.sweepDark : activeProject.sweepLight;

  return (
    <section
      className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between hairline-b transition-colors duration-700"
      style={{
        backgroundImage: `radial-gradient(ellipse 80% 65% at 62% 45%, var(--sweep-center) 0%, ${sweepColor} 62%, var(--sweep-edge) 100%)`,
      }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 px-5 sm:px-10 py-6 sm:py-10 items-center">
        {/* Left Column: Giant Tabular Lot Numeral & Architectural Ledger */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
          <div className="text-[clamp(120px,18vw,280px)] font-medium tracking-[-0.06em] leading-[0.82] tabular-nums select-none text-primary">
            {activeProject.lotNumber}
          </div>

          <div>
            <h1 className="text-[30px] sm:text-[34px] font-medium tracking-[-0.03em] leading-[1.05] text-primary mb-4">
              {activeProject.name}
            </h1>

            <div className="text-[14px] tabular-nums border-t border-[var(--border)]">
              <div className="py-2 flex justify-between border-b border-[var(--border)]">
                <span className="text-secondary">Client</span>
                <span className="text-primary font-medium">
                  {activeProject.company}
                </span>
              </div>
              <div className="py-2 flex justify-between border-b border-[var(--border)]">
                <span className="text-secondary">Role</span>
                <span className="text-primary">
                  {activeProject.projectType}
                </span>
              </div>
              <div className="py-2 flex justify-between border-b border-[var(--border)]">
                <span className="text-secondary">Year</span>
                <span className="text-primary">{activeProject.year}</span>
              </div>
            </div>

            <div className="pt-5 flex items-center gap-6">
              <Link
                href={`/projects/${activeProject.slug}`}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-primary border-b border-current pb-0.5 hover:opacity-70 transition-opacity tabular-nums"
              >
                Inspect Lot {activeProject.lotNumber} <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Studio Stage & Lot Switcher Bar */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <LotStage3D
            project={activeProject}
            className="w-full h-[340px] sm:h-[460px] lg:h-[560px]"
          />

          <div className="flex items-center justify-between pt-2 tabular-nums text-[14px]">
            <div className="flex items-center gap-6">
              {projects.map((p, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`cursor-pointer transition-colors ${
                      isActive
                        ? "text-primary font-medium underline underline-offset-8"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {p.lotNumber}&nbsp;&nbsp;{p.name}
                  </button>
                );
              })}
            </div>

            <Link
              href="/projects"
              className="text-secondary hover:text-primary transition-colors"
            >
              Index (0{projects.length}) →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
