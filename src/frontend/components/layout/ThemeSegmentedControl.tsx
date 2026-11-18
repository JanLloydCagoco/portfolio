"use client";

import React from "react";
import { useTheme, Theme } from "@/frontend/providers/ThemeProvider";
import SoundToggle from "./SoundToggle";
import { ComputerIcon, Sun01Icon, Moon01Icon } from "@/frontend/components/icons/NavIcons";

interface Props {
  className?: string;
}

export default function ThemeSegmentedControl({ className = "" }: Props) {
  const { theme, setTheme } = useTheme();

  const options: Array<{ value: Theme; label: string; icon: React.ReactNode }> = [
    {
      value: "system",
      label: "System",
      icon: <ComputerIcon size={14} strokeWidth={1.8} />,
    },
    {
      value: "light",
      label: "Light",
      icon: <Sun01Icon size={14} strokeWidth={1.8} />,
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Moon01Icon size={14} strokeWidth={1.8} />,
    },
  ];

  return (
    <div className={`w-full grid grid-cols-4 items-center gap-1.5 ${className}`}>
      <div
        role="radiogroup"
        aria-label="Theme selection"
        className={`col-span-3 min-w-0 p-0.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 flex items-center gap-0.5`}
      >
        {options.map((opt) => {
          const isActive = theme === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={`${opt.label} theme`}
              title={`${opt.label} theme`}
              onClick={(e) => setTheme(opt.value, e)}
              className={`flex-1 py-1.5 max-xl:py-2.5 flex items-center justify-center rounded-[3px] text-[12px] font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-[var(--bg)] text-primary shadow-[0_1px_2px_rgba(0,0,0,0.06)] border border-[var(--border)]"
                  : "text-secondary hover:text-primary opacity-70 hover:opacity-100 border border-transparent"
              }`}
            >
              {opt.icon}
            </button>
          );
        })}
      </div>
      <SoundToggle />
    </div>
  );
}
