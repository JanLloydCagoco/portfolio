"use client";

import React from "react";
import { useTheme, Theme } from "@/providers/ThemeProvider";
import { ComputerIcon, Sun01Icon, Moon01Icon } from "@/lib/icons";

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
    <div
      role="radiogroup"
      aria-label="Theme selection"
      className={`w-full p-0.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 flex items-center gap-0.5 ${className}`}
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
            onClick={() => setTheme(opt.value)}
            className={`flex-1 py-1.5 flex items-center justify-center rounded-[3px] text-[12px] font-medium transition-all cursor-pointer ${
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
  );
}
