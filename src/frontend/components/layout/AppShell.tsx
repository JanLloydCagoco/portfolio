"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AppSidebar from "./AppSidebar";
import MobileMenu from "./MobileMenu";
import MicroCoordinateCrosshairs from "@/frontend/components/ui/MicroCoordinateCrosshairs";
import DottedSeparator from "@/frontend/components/ui/DottedSeparator";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname() || "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    setIsScrolled(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 6);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const close = () => setMenuOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const tabletUp = window.matchMedia("(min-width: 768px)");

    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    tabletUp.addEventListener("change", close);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      tabletUp.removeEventListener("change", close);
    };
  }, [menuOpen]);

  return (
    <div className="w-full min-h-screen flex justify-center tactical-ground relative overflow-x-clip">
      <MicroCoordinateCrosshairs />

      {/* Top Viewport Scroll Fade Horizon */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 inset-x-0 md:max-xl:left-[228px] h-16 sm:h-20 z-30 tactical-ground bg-[var(--bg)] [mask-image:linear-gradient(to_bottom,black_25%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_25%,transparent)] max-md:[mask-image:linear-gradient(to_bottom,black_80%,transparent)] max-md:[-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent)] transition-opacity duration-200 ease-out ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Quiet Ambient Halftone Top Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 md:max-xl:left-[228px] top-0 h-28 halftone-well opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)] z-20"
      />

      <MobileMenu
        open={menuOpen}
        pathname={pathname}
        onToggle={() => setMenuOpen((v) => !v)}
        onClose={() => setMenuOpen(false)}
      />

      <div
        inert={menuOpen}
        className="max-w-[688px] w-full px-5 sm:px-6 flex flex-col relative z-10 md:max-xl:max-w-none md:max-xl:pl-[calc(228px+2rem)] md:max-xl:pr-8 xl:max-w-[1100px] xl:flex-row xl:gap-24"
      >
        <AppSidebar />

        <main className="@container w-full max-w-[640px] flex-1 min-w-0 py-10 max-md:pt-20 md:max-xl:mx-auto md:py-12 xl:py-16">
          {children}

          {pathname !== "/inquiry" && (
            <footer aria-label="End of page marker" className="pt-16 sm:pt-20 pb-8">
              <DottedSeparator />
            </footer>
          )}
        </main>
      </div>
    </div>
  );
}
