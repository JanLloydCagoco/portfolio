"use client";

import React from "react";
import { CertificationItem } from "@/types";
import { ArrowUpRight01Icon, getIssuerIcon } from "@/frontend/components/icons/NavIcons";

export interface CertificationCardProps {
  cert: CertificationItem;
  variant?: "standalone" | "stack";
  isCenter?: boolean;
  position?: "center" | "left" | "right" | "hidden";
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export default function CertificationCard({
  cert,
  variant = "standalone",
  isCenter = false,
  position = "center",
  style,
  className = "",
  onClick,
}: CertificationCardProps) {
  if (position === "hidden") return null;

  if (variant === "standalone") {
    return (
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-[170px] sm:w-[190px] aspect-square rounded-[8px] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_4px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center p-3.5 sm:p-4 gap-2.5 sm:gap-3 transition-all duration-150 hover:border-[var(--border-strong)] hover:shadow-md hover:-translate-y-0.5 group select-none ${className}`}
      >
        <div className="flex items-center justify-center">
          {getIssuerIcon(cert.issuer, "w-12 h-12 sm:w-14 sm:h-14 shrink-0")}
        </div>
        <h3 className="text-[14px] sm:text-[15px] font-bold text-primary font-grotesk tracking-tight leading-snug line-clamp-3">
          {cert.title}
        </h3>
        <div className="pt-0.5">
          <span className="inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-medium text-primary underline-offset-4 decoration-[var(--border-strong)] transition-colors">
            <span className="group-hover:underline">Verify</span>
            <ArrowUpRight01Icon size={11} className="shrink-0 text-primary" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <div
      onClick={onClick}
      style={style}
      className={`${
        style ? "absolute" : "relative"
      } w-[210px] h-[210px] sm:w-[235px] sm:h-[235px] aspect-square rounded-[8px] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center text-center p-4 sm:p-5 gap-2.5 sm:gap-3 transition-all duration-300 ease-out hover:border-[var(--border-strong)] ${
        isCenter
          ? "cursor-default hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
          : position === "left"
          ? "cursor-pointer hover:opacity-70 hover:-translate-x-[45%] hover:scale-[0.94]"
          : "cursor-pointer hover:opacity-70 hover:translate-x-[45%] hover:scale-[0.94]"
      } ${className}`}
    >
      <div className="flex items-center justify-center">
        {getIssuerIcon(cert.issuer, "w-14 h-14 sm:w-16 sm:h-16 shrink-0")}
      </div>
      <h3 className="text-[16px] sm:text-[18px] font-bold text-primary font-grotesk tracking-tight leading-snug max-w-[195px] sm:max-w-[215px] line-clamp-3">
        {cert.title}
      </h3>
      <div className="pt-0.5">
        {isCenter ? (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-medium text-primary hover:underline underline-offset-4 decoration-[var(--border-strong)] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Verify</span>
            <ArrowUpRight01Icon size={12} className="shrink-0 text-primary" />
          </a>
        ) : (
          <span className="text-[12px] text-muted">Click to view</span>
        )}
      </div>
    </div>
  );
}
