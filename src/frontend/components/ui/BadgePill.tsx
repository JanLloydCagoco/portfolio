import React from "react";

interface BadgePillProps {
  children: React.ReactNode;
  className?: string;
}

export function BadgePill({ children, className = "" }: BadgePillProps) {
  return (
    <span
      className={`inline-flex items-center align-middle gap-1.5 px-3 py-1 mx-0.5 my-0.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[13.5px] font-medium text-primary leading-none shadow-2xs select-none transition-colors hover:border-[var(--border-strong)] ${className}`}
    >
      {children}
    </span>
  );
}

export default BadgePill;
