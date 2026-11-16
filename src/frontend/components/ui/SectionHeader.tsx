import React from "react";
import Link from "next/link";
import { ArrowRight01Icon } from "@/frontend/components/icons/NavIcons";

interface SectionHeaderProps {
  title: string;
  linkHref?: string;
  linkLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  linkHref,
  linkLabel,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 select-none ${className}`}
    >
      <div className="flex items-center gap-3">
        <h2 className="text-[14px] font-medium text-primary">{title}</h2>
        {children}
      </div>

      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          scroll={false}
          prefetch={false}
          className="inline-flex items-center gap-1 text-[13px] text-secondary hover:text-primary transition-colors group"
        >
          <span className="group-hover:underline underline-offset-4 decoration-[var(--border-strong)]">
            {linkLabel}
          </span>
          <ArrowRight01Icon
            size={12}
            className="shrink-0 text-secondary group-hover:text-primary transition-colors"
          />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
