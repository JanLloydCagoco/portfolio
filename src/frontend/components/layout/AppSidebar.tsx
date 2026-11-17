"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight01Icon, ArrowLeft01Icon } from "@/frontend/components/icons/NavIcons";
import ThemeSegmentedControl from "./ThemeSegmentedControl";

interface NavItem {
  label: string;
  href: string;
  isActive: (pathname: string) => boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Projects",
    href: "/projects",
    isActive: (pathname) => pathname.startsWith("/projects"),
  },
  {
    label: "Experiences",
    href: "/experiences",
    isActive: (pathname) => pathname.startsWith("/experiences"),
  },
  {
    label: "Stack",
    href: "/stack",
    isActive: (pathname) => pathname.startsWith("/stack") || pathname.startsWith("/tech"),
  },
  {
    label: "Certifications",
    href: "/certifications",
    isActive: (pathname) => pathname.startsWith("/certifications"),
  },
];

export default function AppSidebar() {
  const realPathname = usePathname() || "";
  // Optimistic: highlight the clicked tab immediately, before the route commits.
  const [pending, setPending] = useState<{ from: string; to: string } | null>(null);
  const pathname = pending && pending.from === realPathname ? pending.to : realPathname;

  return (
    <>
      {/* Rail: pinned to the left screen edge on tablet (768–1279px), sticky inside the centered frame on desktop */}
      <aside
        aria-label="Sidebar Navigation"
        className="hidden md:flex flex-col justify-between border-r border-[var(--border)] select-none md:max-xl:fixed md:max-xl:inset-y-0 md:max-xl:left-0 md:max-xl:z-20 md:max-xl:w-[228px] md:max-xl:px-5 md:max-xl:pt-9 md:max-xl:pb-[max(1.5rem,env(safe-area-inset-bottom))] md:max-xl:overflow-y-auto md:max-xl:bg-[var(--bg)] md:max-xl:[background-image:var(--bg-texture)] xl:w-[210px] xl:min-w-[210px] xl:max-w-[210px] xl:shrink-0 xl:sticky xl:top-16 xl:h-[calc(100dvh-8rem)] xl:pr-6"
      >
        <div className="space-y-8">
          <div>
            <Link
              href="/"
              scroll={false}
              className="font-pixel text-[19px] tracking-tight text-primary hover:opacity-80 transition-opacity block leading-tight whitespace-nowrap"
            >
              Jan Lloyd Cagoco
            </Link>
          </div>

          <nav
            aria-label="Main Navigation"
            className="flex flex-col space-y-2.5 md:max-xl:space-y-1"
          >
            {NAV_ITEMS.map((item) => {
              const active = item.isActive(pathname);
              return (
                <div key={item.href} className="h-7 md:max-xl:h-10 flex items-center">
                  <Link
                    href={item.href}
                    scroll={false}
                    onClick={() => setPending({ from: realPathname, to: item.href })}
                    aria-current={active ? "page" : undefined}
                    className={`tap-target [--tap-y:5px] inline-flex items-center text-[16px] md:max-xl:text-[20px] tracking-tight transition-colors duration-150 hover:underline underline-offset-4 decoration-[var(--border-strong)] ${
                      active
                        ? "font-medium text-primary"
                        : "text-[var(--text-muted)] hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <span className="w-4 flex items-center justify-start shrink-0 mr-1.5">
                      {active && (
                        <ArrowRight01Icon
                          size={14}
                          className="shrink-0 text-primary"
                          strokeWidth={2.2}
                        />
                      )}
                    </span>
                    <span>{item.label}</span>
                    <span className="w-4 flex items-center justify-start shrink-0 ml-1.5">
                      {active && (
                        <ArrowLeft01Icon
                          size={14}
                          className="shrink-0 text-primary"
                          strokeWidth={2.2}
                        />
                      )}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 space-y-3">
          <ThemeSegmentedControl />

          <div className="space-y-2">
            <p className="text-[12px] md:max-xl:text-[14px] text-secondary leading-snug">
              For collaborations and inquiries, reach me here
            </p>
            <Link
              href="/inquiry"
              scroll={false}
              className={`w-full py-1.5 md:max-xl:py-3 px-3 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] text-secondary hover:text-primary text-[12px] md:max-xl:text-[14px] font-medium inline-flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:translate-y-[0.5px] ${
                pathname.startsWith("/inquiry")
                  ? "bg-[var(--bg)] text-primary border-[var(--border-strong)] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                  : ""
              }`}
            >
              <span>Inquire</span>
              <ArrowRight01Icon size={11} className="shrink-0 opacity-60" strokeWidth={1.8} />
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="h-px flex-1 bg-[var(--border)]" />
              <span className="text-[12px] text-[var(--text-muted)] lowercase select-none">
                or
              </span>
              <div className="h-px flex-1 bg-[var(--border)]" />
            </div>
            <a
              href="mailto:cagocojanlloyd@gmail.com"
              className="tap-target text-[14px] font-medium text-primary hover:underline truncate block text-center"
            >
              cagocojanlloyd@gmail.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
