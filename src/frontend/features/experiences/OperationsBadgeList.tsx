"use client";

import React, { useState } from "react";

interface OperationsBadgeListProps {
  operations: string[];
  initialVisibleCount?: number;
}

export default function OperationsBadgeList({
  operations,
  initialVisibleCount = 2,
}: OperationsBadgeListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!operations || operations.length === 0) return null;

  const visibleSkills = isExpanded
    ? operations
    : operations.slice(0, initialVisibleCount);
  const remainingCount = operations.length - initialVisibleCount;
  const remainingSkills = operations.slice(initialVisibleCount);

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {visibleSkills.map((op) => (
        <span
          key={op}
          className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-[var(--bg-elevated)] border border-[var(--border)] text-[11px] font-mono text-secondary select-none"
        >
          {op}
        </span>
      ))}

      {remainingCount > 0 && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? "Collapse skills" : remainingSkills.join(", ")}
          className="inline-flex items-center px-2.5 py-1 rounded-[3px] border border-dashed border-[var(--border-strong)] bg-transparent text-[11px] font-mono text-muted hover:text-primary hover:border-primary transition-colors cursor-pointer select-none"
        >
          {isExpanded ? "− less" : `+${remainingCount} skills`}
        </button>
      )}
    </div>
  );
}
