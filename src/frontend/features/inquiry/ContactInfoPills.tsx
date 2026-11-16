import React from "react";

export default function ContactInfoPills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/50">
        <div className="text-muted text-[11px] font-mono">DIRECT EMAIL</div>
        <a
          href="mailto:cagocojanlloyd@gmail.com"
          className="text-primary font-medium hover:underline text-[13px] mt-0.5 truncate block"
        >
          cagocojanlloyd@gmail.com
        </a>
      </div>
      <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/50">
        <div className="text-muted text-[11px] font-mono">LOCATION</div>
        <div className="text-primary font-medium text-[13px] mt-0.5">
          Baggao, Cagayan, PH
        </div>
      </div>
      <div className="p-3.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/50">
        <div className="text-muted text-[11px] font-mono">CURRENT ROLE</div>
        <div className="text-primary font-medium text-[13px] mt-0.5">
          Associate Developer · LGU Baggao
        </div>
      </div>
    </div>
  );
}
