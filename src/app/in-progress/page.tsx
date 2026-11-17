import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/frontend/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "In progress — Jan Lloyd Cagoco",
  robots: { index: false },
};

export default function InProgressPage() {
  return (
    <div className="w-full space-y-10">
      <PageHeader
        title="in progress"
        description="This project's public page is still being prepared. Check back soon, or ask me about it and I'll walk you through the work."
      />

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/inquiry"
          className="btn-inquire px-5 py-2.5 rounded-[4px] text-[14px] font-medium inline-flex items-center justify-center"
        >
          Ask about this project
        </Link>
        <Link
          href="/projects"
          className="px-5 py-2.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] text-secondary hover:text-primary text-[14px] font-medium inline-flex items-center justify-center transition-colors"
        >
          Back to projects
        </Link>
      </div>
    </div>
  );
}
