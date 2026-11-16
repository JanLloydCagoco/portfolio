import React from "react";

interface TimelineSpineProps {
  children: React.ReactNode;
  className?: string;
}

export default function TimelineSpine({
  children,
  className = "",
}: TimelineSpineProps) {
  return (
    <div className={`relative pl-14 sm:pl-16 space-y-12 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute left-[19px] sm:left-[21px] top-5 bottom-2 w-[1px] bg-[var(--border)]"
      />
      {children}
    </div>
  );
}
