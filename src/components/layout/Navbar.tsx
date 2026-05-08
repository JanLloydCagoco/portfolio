"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<"home" | "projects" | null>(null);

  const activeTab = pathname === "/" ? "home" : pathname.startsWith("/projects") ? "projects" : null;
  // Show hovered position if hovering, otherwise fall back to active tab
  const displayTab = hoveredTab ?? activeTab;

  return (
    <nav className="w-full">
      <div className="bg-white dark:bg-[#1a1a1a] border border-default dark:border-[#2a2a2a] rounded-xl px-4 py-3 flex items-center justify-between shadow-sm transition-colors duration-300">
        {/* Left — Nav Icons */}
        <div
          className="relative flex items-center gap-2"
          onMouseLeave={() => setHoveredTab(null)}
        >
          {/* Sliding background pill — moves between tabs */}
          <div
            className={`absolute w-8 h-8 rounded-2xl bg-gray-100 dark:bg-[#2a2a2a] transition-all duration-200 ease-out ${displayTab === null
                ? "opacity-0 scale-90"
                : displayTab === "home"
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-10 opacity-100 scale-100"
              }`}
          />

          {/* Home Icon */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredTab("home")}
          >
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black dark:bg-gray-200 text-white dark:text-gray-900 text-[10px] font-semibold px-1.5 py-0.5 rounded-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none whitespace-nowrap">
              Home
            </span>
            <Link
              href="/"
              aria-label="Home"
              className={`relative w-8 h-8 flex items-center justify-center rounded-2xl transition-colors duration-200 ${displayTab === "home" ? "text-primary dark:text-white" : "text-secondary dark:text-gray-500"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"
                />
              </svg>
            </Link>
          </div>

          {/* Projects Icon */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredTab("projects")}
          >
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black dark:bg-gray-200 text-white dark:text-gray-900 text-[10px] font-semibold px-1.5 py-0.5 rounded-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none whitespace-nowrap">
              Projects
            </span>
            <Link
              href="/projects"
              aria-label="Projects"
              className={`relative w-8 h-8 flex items-center justify-center rounded-2xl transition-colors duration-200 ${displayTab === "projects" ? "text-primary dark:text-white" : "text-secondary dark:text-gray-500"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right — Dark Mode + Hire Me */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <Link
            href="/inquiry"
            className="flex items-center gap-1.5 bg-black dark:bg-[#2b2b2b] text-white dark:text-white text-sm font-semibold px-4 py-2 rounded-lg hover-outline transition-all"
          >
            <span className="text-base">+</span>
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}