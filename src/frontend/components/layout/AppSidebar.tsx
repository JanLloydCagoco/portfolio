"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight01Icon, ArrowLeft01Icon } from "@/frontend/components/icons/NavIcons";
import ThemeSegmentedControl from "./ThemeSegmentedControl";

interface NavItem {
  label: string;
  href: string;
  isActive: (pathname: string) => boolean;
}

const NAV_ITEMS: NavItem[] = [
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
  const pathname = usePathname() || "";

  return (
    <>
      {/* Desktop Sidebar (>= 1024px) */}
      <aside
        aria-label="Sidebar Navigation"
        className="hidden lg:flex flex-col w-[210px] min-w-[210px] max-w-[210px] shrink-0 sticky top-10 lg:top-16 h-[calc(100vh-8rem)] justify-between border-r border-[var(--border)] pr-5 lg:pr-6 select-none"
      >
        <div className="space-y-8">
          <div>
            <Link
              href="/"
              scroll={false}
              prefetch={false}
              className="font-pixel text-[19px] tracking-tight text-primary hover:opacity-80 transition-opacity block leading-tight whitespace-nowrap"
            >
              Jan Lloyd Cagoco
            </Link>
          </div>

          <nav aria-label="Main Navigation" className="flex flex-col space-y-2.5">
            {NAV_ITEMS.map((item) => {
              const active = item.isActive(pathname);
              return (
                <div key={item.href} className="h-7 flex items-center">
                  <Link
                    href={item.href}
                    scroll={false}
                    prefetch={false}
                    className={`inline-flex items-center text-[16px] sm:text-[17px] tracking-tight transition-colors duration-150 hover:underline underline-offset-4 decoration-[var(--border-strong)] ${
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

        <div className="pt-8 space-y-4">
          <ThemeSegmentedControl />

          <div className="space-y-1">
            <p className="text-[13px] sm:text-[14px] text-secondary leading-snug">
              For collaboration and inquiry, Reach me here
            </p>
            <a
              href="mailto:cagocojanlloyd@gmail.com"
              className="text-[15px] sm:text-[16px] font-medium text-primary hover:underline truncate block pt-0.5"
            >
              cagocojanlloyd@gmail.com
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Header (< 1024px) */}
      <header className="lg:hidden w-full pb-6 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            scroll={false}
            prefetch={false}
            className="font-pixel text-[17px] sm:text-[19px] tracking-tight text-primary hover:opacity-80 transition-opacity leading-tight whitespace-nowrap"
          >
            Jan Lloyd Cagoco
          </Link>
          <div className="w-[124px]">
            <ThemeSegmentedControl />
          </div>
        </div>

        <nav
          aria-label="Mobile Navigation"
          className="flex items-center gap-4 overflow-x-auto pb-1 text-[15px] scrollbar-none"
        >
          {NAV_ITEMS.map((item) => {
            const active = item.isActive(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                prefetch={false}
                className={`inline-flex items-center gap-1 text-[15px] shrink-0 transition-colors duration-150 hover:underline underline-offset-4 decoration-[var(--border-strong)] ${
                  active
                    ? "font-medium text-primary"
                    : "text-[var(--text-muted)] hover:text-black dark:hover:text-white"
                }`}
              >
                {active && (
                  <ArrowRight01Icon size={13} className="shrink-0 text-primary" strokeWidth={2} />
                )}
                <span>{item.label}</span>
                {active && (
                  <ArrowLeft01Icon size={13} className="shrink-0 text-primary" strokeWidth={2} />
                )}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
