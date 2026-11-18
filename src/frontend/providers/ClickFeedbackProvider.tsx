"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

interface Ctx { soundOn: boolean; toggleSound: () => void }
const SoundContext = createContext<Ctx>({ soundOn: false, toggleSound: () => {} });
export const useSound = () => useContext(SoundContext);

const INTERACTIVE = "a, button, summary, select, label, [role='button']";

let clickBuffer: AudioBuffer | null = null;
let clickOffset = 0; // seconds of leading silence (mp3 padding) to skip
let loading = false;

// Decode the click sample once, the first time sound is on.
function loadClick(ctx: AudioContext) {
  if (clickBuffer || loading) return;
  loading = true;
  fetch("/sounds/click.mp3")
    .then((r) => { if (!r.ok) throw new Error("click.mp3 missing"); return r.arrayBuffer(); })
    .then((b) => ctx.decodeAudioData(b))
    .then((buf) => {
      const d = buf.getChannelData(0);
      let i = 0;
      while (i < d.length && Math.abs(d[i]) < 0.01) i++;
      clickOffset = Math.max(0, i / buf.sampleRate - 0.001);
      clickBuffer = buf;
    })
    .catch(() => {}); // stay "loading" so a missing/bad file is not refetched on every click
}

function thock(ctx: AudioContext) {
  if (!clickBuffer) return loadClick(ctx); // first click after enabling may be silent
  const src = ctx.createBufferSource();
  const gain = ctx.createGain();
  src.buffer = clickBuffer;
  gain.gain.value = 0.6;
  src.connect(gain).connect(ctx.destination);
  src.start(0, clickOffset);
}

// Pixel burst: a few tiny squares in the theme text colour fly outward and fade (~400ms).
function ripple(x: number, y: number) {
  const n = 5 + Math.floor(Math.random() * 2);
  for (let i = 0; i < n; i++) {
    const size = 2 + Math.floor(Math.random() * 4);
    const angle = Math.random() * Math.PI * 2;
    const dist = 14 + Math.random() * 18;
    const el = document.createElement("i");
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = `position:fixed;left:${x - size / 2}px;top:${y - size / 2}px;width:${size}px;height:${size}px;background:var(--text-primary);pointer-events:none;z-index:9999`;
    document.body.appendChild(el);
    el.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        { transform: `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px)`, opacity: 0 },
      ],
      { duration: 400, easing: "ease-out" },
    ).onfinish = () => el.remove();
  }
}

export default function ClickFeedbackProvider({ children }: { children: React.ReactNode }) {
  const [soundOn, setSoundOn] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  const on = useRef(false);

  const getCtx = () => {
    audio.current ??= new AudioContext({ latencyHint: "interactive" });
    if (audio.current.state === "suspended") void audio.current.resume();
    return audio.current;
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sound") === "on";
      on.current = saved;
      setSoundOn(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      if (!reduce.matches && e.pointerType !== "touch") ripple(e.clientX, e.clientY);
      if (!on.current) return;
      const ctx = getCtx(); // created on a real gesture, so autoplay policy allows it
      if ((e.target as Element).closest?.(INTERACTIVE)) thock(ctx);
      else loadClick(ctx);
    };
    window.addEventListener("pointerdown", onDown, true);
    return () => window.removeEventListener("pointerdown", onDown, true);
  }, []);

  const toggleSound = useCallback(() => {
    const next = !on.current;
    on.current = next;
    setSoundOn(next);
    try { localStorage.setItem("sound", next ? "on" : "off"); } catch {}
    if (next) {
      const ctx = getCtx();
      loadClick(ctx);
      thock(ctx);
    }
  }, []);

  return <SoundContext.Provider value={{ soundOn, toggleSound }}>{children}</SoundContext.Provider>;
}
