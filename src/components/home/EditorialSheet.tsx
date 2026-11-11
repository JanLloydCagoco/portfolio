"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, timelineRecords } from "@/lib/projects";
import { allTechStacks } from "@/lib/tech";
import { TimelineItem } from "@/types";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import OpticalPlateCanvas from "@/components/studio/OpticalPlateCanvas";
import FlutedInspectionDrawer, {
  DrawerMode,
} from "@/components/home/FlutedInspectionDrawer";

type RecordFilter = "all" | TimelineItem["type"];

const SECTION_LINKS = [
  { num: "01", label: "projects", href: "#projects" },
  { num: "02", label: "experience", href: "#experience" },
  { num: "03", label: "stack", href: "#stack" },
  { num: "04", label: "contact", href: "#contact" },
] as const;

export default function EditorialSheet() {
  const [recordFilter, setRecordFilter] = useState<RecordFilter>("all");
  const [drawer, setDrawer] = useState<DrawerMode>({ type: "closed" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredRecords =
    recordFilter === "all"
      ? timelineRecords
      : timelineRecords.filter((r) => r.type === recordFilter);

  useEffect(() => {
    const handleNavigateEvent = (e: Event) => {
      const custom = e as CustomEvent<{
        paneId: string;
        openDrawer?: boolean;
      }>;
      if (custom.detail?.openDrawer) {
        setDrawer({ type: "inquiry" });
      }
    };
    window.addEventListener("portfolio:navigate-pane", handleNavigateEvent);
    return () =>
      window.removeEventListener("portfolio:navigate-pane", handleNavigateEvent);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("cagocojanlloyd@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1040px] mx-auto w-full px-6 sm:px-10 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start">
          {/* ============================================================
              LEFT STICKY PROFILE COLUMN
             ============================================================ */}
          <aside className="w-full lg:w-[264px] shrink-0 lg:sticky lg:top-20 lg:pr-8 lg:border-r lg:border-[var(--border)] space-y-8">
            {/* Identity Block */}
            <div className="space-y-4">
              <Image
                src="/avatar.png"
                alt="Jan Lloyd Cagoco"
                width={56}
                height={56}
                priority
                className="w-14 h-14 rounded-[6px] object-cover hairline-box"
              />

              <div>
                <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-primary leading-snug">
                  Jan Lloyd Cagoco
                </h1>
                <p className="text-[14px] text-secondary mt-0.5">
                  Product Designer · Caloocan, PH
                </p>
                <p className="text-[14px] text-secondary mt-1">
                  Currently designing at{" "}
                  <span className="text-primary font-medium">Rectangle</span>.
                </p>
              </div>
            </div>

            {/* Section Index Links (Desktop) */}
            <nav
              aria-label="Page sections"
              className="hidden lg:flex flex-col space-y-2 pt-2 hairline-t"
            >
              {SECTION_LINKS.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  className="py-1 text-[13px] text-secondary hover:text-primary transition-colors tabular-nums flex items-center gap-2"
                >
                  <span className="text-muted">{item.num}</span>
                  <span>—</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Primary Actions & Theme Switch */}
            <div className="space-y-2.5 pt-2 hairline-t">
              <button
                type="button"
                onClick={() => setDrawer({ type: "inquiry" })}
                className="btn-inquire w-full py-2.5 px-4 rounded-[4px] text-[13px] font-medium flex items-center justify-between cursor-pointer"
              >
                <span>Inquire</span>
                <span>→</span>
              </button>

              <a
                href="/resume.pdf"
                download="Jan-Lloyd-Cagoco-Resume.pdf"
                className="w-full py-2 px-3 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] text-[13px] font-medium text-primary transition-colors flex items-center justify-between tabular-nums"
              >
                <span>Resume PDF</span>
                <span>↓</span>
              </a>

              <div className="hidden lg:block">
                <DarkModeToggle variant="rail" />
              </div>
            </div>
          </aside>

          {/* ============================================================
              RIGHT EDITORIAL STREAM
             ============================================================ */}
          <div className="flex-1 min-w-0 w-full space-y-16 lg:space-y-20">
            {/* ----------------------------------------------------------
                01 — SELECTED PROJECTS
               ---------------------------------------------------------- */}
            <section id="projects" className="space-y-6">
              <div className="pb-3 hairline-b flex items-center justify-between gap-4">
                <h2 className="text-[13px] font-medium text-secondary tabular-nums">
                  01 — selected projects
                </h2>
                <Link
                  href="/projects"
                  className="text-[13px] text-secondary hover:text-primary transition-colors tabular-nums"
                >
                  All projects →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col space-y-3.5"
                  >
                    <OpticalPlateCanvas
                      project={project}
                      plateVariant="A"
                      onInspectClick={() =>
                        setDrawer({ type: "project", project })
                      }
                      className="w-full aspect-[16/10]"
                    />

                    <div className="space-y-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[17px] font-medium tracking-[-0.015em] text-primary">
                          <button
                            type="button"
                            onClick={() =>
                              setDrawer({ type: "project", project })
                            }
                            className="hover:underline text-left cursor-pointer"
                          >
                            {project.name}
                          </button>
                        </h3>
                        <span className="text-[13px] text-secondary tabular-nums">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-[14px] text-secondary leading-relaxed">
                        {project.description}
                      </p>

                      <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[12px]">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-[3px] bg-[var(--bg-elevated)] hairline-box text-secondary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-secondary hover:text-primary transition-colors font-medium"
                        >
                          Case study →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* ----------------------------------------------------------
                02 — EXPERIENCE
               ---------------------------------------------------------- */}
            <section id="experience" className="space-y-5">
              <div className="pb-3 hairline-b flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-[13px] font-medium text-secondary tabular-nums">
                  02 — experience
                </h2>

                <div
                  role="group"
                  aria-label="Filter experience"
                  className="flex items-center gap-3 text-[13px]"
                >
                  {(
                    [
                      { id: "all", label: "All" },
                      { id: "work", label: "Work" },
                      { id: "education", label: "Education" },
                      { id: "achievements", label: "Awards" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setRecordFilter(tab.id)}
                      className={`cursor-pointer transition-colors ${
                        recordFilter === tab.id
                          ? "text-primary font-medium underline"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-[var(--border)] hairline-b">
                {filteredRecords.map((rec) => (
                  <div
                    key={rec.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                      <span className="text-[15px] font-medium text-primary">
                        {rec.title}
                      </span>
                      <span className="text-[14px] text-secondary">
                        · {rec.subtitle}
                      </span>
                    </div>
                    <span className="text-[13px] text-secondary tabular-nums shrink-0">
                      {rec.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ----------------------------------------------------------
                03 — STACK
               ---------------------------------------------------------- */}
            <section id="stack" className="space-y-5">
              <div className="pb-3 hairline-b flex items-center justify-between gap-4">
                <h2 className="text-[13px] font-medium text-secondary tabular-nums">
                  03 — stack
                </h2>
                <Link
                  href="/tech"
                  className="text-[13px] text-secondary hover:text-primary transition-colors tabular-nums"
                >
                  Full index ({allTechStacks.length}) →
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {allTechStacks.map((tech) => (
                  <Link
                    key={tech.name}
                    href="/tech"
                    className="px-3 py-1.5 rounded-[4px] bg-[var(--bg-elevated)]/70 hover:bg-[var(--bg-elevated)] hairline-box flex items-center gap-2 text-[13px] text-primary transition-colors"
                  >
                    <span className="w-4 h-4 text-secondary flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                      {tech.icon}
                    </span>
                    <span>{tech.name}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* ----------------------------------------------------------
                04 — CONTACT
               ---------------------------------------------------------- */}
            <section id="contact" className="space-y-5 pb-8">
              <div className="pb-3 hairline-b flex items-center justify-between gap-4">
                <h2 className="text-[13px] font-medium text-secondary tabular-nums">
                  04 — contact
                </h2>
                <Link
                  href="/inquiry"
                  className="text-[13px] text-secondary hover:text-primary transition-colors"
                >
                  Full form →
                </Link>
              </div>

              <div className="p-6 sm:p-8 rounded-[6px] bg-[var(--bg-elevated)]/50 hairline-box flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-[17px] font-medium text-primary tracking-[-0.015em]">
                    Available for product design roles &amp; select projects.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-[14px]">
                    <a
                      href="mailto:cagocojanlloyd@gmail.com"
                      className="text-secondary hover:text-primary transition-colors underline"
                    >
                      cagocojanlloyd@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2 py-0.5 rounded-[3px] hairline-box bg-[var(--bg)] text-[11px] font-medium text-secondary hover:text-primary cursor-pointer tabular-nums"
                    >
                      {copiedEmail ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setDrawer({ type: "inquiry" })}
                    className="btn-inquire px-5 py-2.5 rounded-[4px] text-[14px] font-medium cursor-pointer"
                  >
                    Start an Inquiry →
                  </button>
                </div>
              </div>

              {/* Quiet Editorial Footer Row */}
              <div className="pt-6 hairline-t flex flex-wrap items-center justify-between gap-4 text-[13px] text-secondary tabular-nums">
                <span>© 2026 Jan Lloyd Cagoco</span>
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Facebook ↗
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Resume PDF ↓
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Slide-Over Case Study & Inquiry Modal */}
      <FlutedInspectionDrawer
        drawer={drawer}
        onClose={() => setDrawer({ type: "closed" })}
        onSelectProject={(project) => setDrawer({ type: "project", project })}
        onOpenInquiry={() => setDrawer({ type: "inquiry" })}
      />
    </div>
  );
}
