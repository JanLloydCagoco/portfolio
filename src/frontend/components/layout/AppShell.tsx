"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppSidebar from "./AppSidebar";
import MicroCoordinateCrosshairs from "@/frontend/components/ui/MicroCoordinateCrosshairs";
import DottedSeparator from "@/frontend/components/ui/DottedSeparator";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    setIsScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 6);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center tactical-ground relative overflow-x-clip">
      <MicroCoordinateCrosshairs />

      {/* Top Viewport Scroll Fade Horizon */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 inset-x-0 h-16 sm:h-20 z-30 tactical-ground bg-[var(--bg)] [mask-image:linear-gradient(to_bottom,black_25%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_25%,transparent)] transition-opacity duration-200 ease-out ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Quiet Ambient Halftone Top Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 halftone-well opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)] z-20"
      />

      <div className="max-w-[1040px] xl:max-w-[1100px] w-full px-4 sm:px-6 flex flex-col lg:flex-row lg:gap-20 xl:gap-24 relative z-10">
        <AppSidebar />

        <main className="w-full max-w-[640px] flex-1 min-w-0 py-10 lg:py-16">
          {children}

          <footer aria-label="End of page marker" className="pt-16 sm:pt-20 pb-8 space-y-6">
            <DottedSeparator />

            {/* Mobile Contact & Collaboration Section (< 1024px) */}
            <div className="lg:hidden space-y-3 pt-2">
              <p className="text-[13px] text-secondary leading-snug">
                For collaborations and inquiries, reach me here
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                <Link
                  href="/inquiry"
                  className="px-3 py-1.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] text-secondary hover:text-primary text-[12px] font-medium inline-flex items-center justify-center text-center cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.04)] active:translate-y-[0.5px] transition-all w-full sm:w-auto"
                >
                  Inquire
                </Link>
                <span className="text-[12px] text-[var(--text-muted)] text-center sm:text-left sm:px-1">or</span>
                <a
                  href="mailto:cagocojanlloyd@gmail.com"
                  className="text-[14px] font-medium text-primary hover:underline text-center sm:text-left"
                >
                  cagocojanlloyd@gmail.com
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
