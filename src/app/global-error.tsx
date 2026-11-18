"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-[#0d0f12] text-white p-4 font-mono text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
          SYSTEM FAULT // 500
        </p>
        <h1 className="text-xl font-bold mb-4">An unexpected error occurred</h1>
        <p className="text-xs text-neutral-400 max-w-md mb-6">{process.env.NODE_ENV === "development"
            ? error.message
            : error.digest
              ? `Reference: ${error.digest}`
              : "Please try again."}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 text-xs rounded border border-neutral-700 hover:border-neutral-500 bg-neutral-900 transition-colors"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
