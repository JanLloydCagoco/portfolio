export default function AvailableBadge() {
  return (
    <span className="flex items-center gap-2 text-[11px] font-semibold text-primary px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 glass-sm uppercase tracking-wider backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
      </span>
      AVAILABLE FOR WORK
    </span>
  );
}