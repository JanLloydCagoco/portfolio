"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AppSidebar from "./AppSidebar";
import MicroCoordinateCrosshairs from "@/components/ui/MicroCoordinateCrosshairs";
import DottedSeparator from "@/components/ui/DottedSeparator";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll window to top when switching routes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsScrolled(false);
  }, [pathname]);

  // Track window scroll to smoothly engage top fade horizon
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
      {/* Micro Coordinate Crosshairs (Variation 2: CAD drawing sheet stipple & registration crosshairs) */}
      <MicroCoordinateCrosshairs />

      {/* Top Viewport Scroll Fade Horizon (Tactile ground alpha-dissolve) */}
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
        {/* Stiff Desktop Sidebar Column: Fixed in place via sticky, zero movement */}
        <AppSidebar />

        {/* Main Content Column */}
        <main className="w-full max-w-[640px] flex-1 min-w-0 py-10 lg:py-16">
          {children}

          {/* End-of-page terminal separator across all views */}
          <footer aria-label="End of page marker" className="pt-16 sm:pt-20 pb-4">
            <DottedSeparator />
          </footer>
        </main>
      </div>
    </div>
  );
}
