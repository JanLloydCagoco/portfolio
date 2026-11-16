import React from "react";
import { TechStack } from "@/types";

interface TechBadgeProps {
  tech: TechStack;
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({
  tech,
  size = "md",
  className = "",
}: TechBadgeProps) {
  const sizeClasses =
    size === "sm" ? "px-3 py-1.5 gap-2" : "px-3.5 py-2 gap-2.5";

  return (
    <div
      className={`rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 text-[13px] font-medium text-primary flex items-center select-none hover:border-[var(--border-strong)] transition-colors ${sizeClasses} ${className}`}
    >
      <span className="w-4 h-4 text-secondary flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4">
        {tech.icon}
      </span>
      <span>{tech.name}</span>
    </div>
  );
}

export default TechBadge;
