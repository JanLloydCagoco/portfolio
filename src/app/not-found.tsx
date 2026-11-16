import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] font-mono mb-2">
        404 // NOT FOUND
      </p>
      <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-[var(--muted-foreground)] max-w-sm mb-6">
        The requested coordinate or resource does not exist in this sector.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--ring)] transition-colors"
      >
        Return to Overview
      </Link>
    </div>
  );
}
