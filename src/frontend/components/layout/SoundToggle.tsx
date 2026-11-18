"use client";

import { useSound } from "@/frontend/providers/ClickFeedbackProvider";

export default function SoundToggle() {
  const { soundOn, toggleSound } = useSound();
  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-pressed={soundOn}
      aria-label={soundOn ? "Mute click sounds" : "Enable click sounds"}
      title={soundOn ? "Sound on" : "Sound off"}
      className={`w-full p-0.5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 cursor-pointer transition-all ${
        soundOn ? "text-primary" : "text-secondary opacity-70 hover:opacity-100"
      }`}
    >
      <span className="flex items-center justify-center w-full py-1.5 max-xl:py-2.5 rounded-[3px] border border-transparent">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H3v6h3l5 4z" />
          {soundOn ? <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /> : <path d="m16 9 5 6m0-6-5 6" />}
        </svg>
      </span>
    </button>
  );
}
