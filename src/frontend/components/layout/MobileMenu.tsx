"use client";

import React, { useEffect, useRef, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight01Icon, ArrowLeft01Icon } from "@/frontend/components/icons/NavIcons";
import ThemeSegmentedControl from "./ThemeSegmentedControl";
import { NAV_ITEMS } from "./AppSidebar";

interface MobileMenuProps {
  open: boolean;
  pathname: string;
  onToggle: () => void;
  onClose: () => void;
}

const BAR =
  "absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

export default function MobileMenu({ open, pathname, onToggle, onClose }: MobileMenuProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const fallback = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Route committed: AppShell closes the drawer, so the fallback is no longer needed.
  useEffect(() => () => clearTimeout(fallback.current), [pathname]);

  // Keep the drawer open until the new route commits, so the old page never shows.
  const go = (e: React.MouseEvent, href: string) => {
    if (href === pathname) return onClose();
    e.preventDefault();
    clearTimeout(fallback.current);
    fallback.current = setTimeout(onClose, 2000); // never get stuck open
    startTransition(() => router.push(href, { scroll: false }));
  };

  return (
    <>
      {/* Masthead sits above the menu sheet, so opening it reveals only the tabs */}
      <div className="md:hidden fixed top-0 left-5 sm:left-6 h-[62px] z-[60] flex items-center">
        <Link
          href="/"
          scroll={false}
          onClick={(e) => go(e, "/")}
          className="font-pixel text-[17px] sm:text-[19px] tracking-tight text-primary hover:opacity-80 transition-opacity leading-tight whitespace-nowrap"
        >
          Jan Lloyd Cagoco
        </Link>
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={onToggle}
        className="md:hidden fixed top-[11px] right-2 sm:right-3 z-[60] w-10 h-10 rounded-[4px] text-primary flex items-center justify-center cursor-pointer active:translate-y-[0.5px]"
      >
        <span aria-hidden="true" className="relative block w-4 h-2.5">
          <span className={`${BAR} top-0 ${open ? "translate-y-[4.25px] rotate-45" : ""}`} />
          <span className={`${BAR} bottom-0 ${open ? "-translate-y-[4.25px] -rotate-45" : ""}`} />
        </span>
      </button>

      <div
        id="mobile-menu"
        data-open={open}
        inert={!open}
        className="mobile-menu md:hidden fixed inset-0 z-50 tactical-ground flex flex-col px-5 sm:px-6 pt-[62px] pb-[max(1.5rem,env(safe-area-inset-bottom))] overflow-y-auto overscroll-contain"
      >
        <nav
          aria-label="Main Navigation"
          className="flex-1 flex flex-col justify-center py-10"
        >
          {NAV_ITEMS.map((item, i) => {
            const active = item.isActive(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                onClick={(e) => go(e, item.href)}
                aria-current={active ? "page" : undefined}
                style={{ "--i": i } as React.CSSProperties}
                className={`mobile-menu-item inline-flex items-center self-start py-2 text-[clamp(28px,9vw,40px)] leading-[1.15] tracking-[-0.03em] ${
                  active ? "font-medium text-primary" : "text-[var(--text-muted)]"
                }`}
              >
                <span className="w-6 mr-2 empty:hidden flex items-center shrink-0">
                  {active && <ArrowRight01Icon size={22} strokeWidth={2} />}
                </span>
                <span>{item.label}</span>
                <span className="w-6 ml-2 empty:hidden flex items-center shrink-0">
                  {active && <ArrowLeft01Icon size={22} strokeWidth={2} />}
                </span>
              </Link>
            );
          })}
        </nav>

        <div
          className="mobile-menu-item space-y-4"
          style={{ "--i": NAV_ITEMS.length } as React.CSSProperties}
        >
          <ThemeSegmentedControl />

          <p className="text-[14px] text-secondary leading-snug">
            For collaborations and inquiries, reach me here
          </p>
          <Link
            href="/inquiry"
            scroll={false}
            onClick={(e) => go(e, "/inquiry")}
            className={`w-full h-12 rounded-[4px] border bg-[var(--bg-elevated)] text-[14px] font-medium inline-flex items-center justify-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:translate-y-[0.5px] ${
              pathname.startsWith("/inquiry")
                ? "text-primary border-[var(--border-strong)]"
                : "text-secondary border-[var(--border)]"
            }`}
          >
            <span>Inquire</span>
            <ArrowRight01Icon size={13} className="shrink-0 opacity-60" strokeWidth={1.8} />
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-[12px] text-[var(--text-muted)] lowercase select-none">or</span>
            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <a
            href="mailto:cagocojanlloyd@gmail.com"
            className="block text-center py-1 text-[16px] font-medium text-primary"
          >
            cagocojanlloyd@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
