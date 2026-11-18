"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeTransitionAnchor =
  | React.MouseEvent<HTMLElement>
  | { clientX: number; clientY: number }
  | { x: number; y: number }
  | null
  | undefined;

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme, anchor?: ThemeTransitionAnchor) => void;
  toggleTheme: (anchor?: ThemeTransitionAnchor) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

function getStoredTheme(): Theme {
  try {
    if (typeof window === "undefined") return "system";
    const stored = window.localStorage?.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
    return "system";
  } catch {
    return "system";
  }
}

function setStoredTheme(theme: Theme) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage?.setItem("theme", theme);
  } catch {
    // Silently ignore in sandboxed environments
  }
}

function resolveSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    setThemeState(stored);
    const resolved = stored === "system" ? resolveSystemTheme() : stored;
    setResolvedTheme(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const updateResolved = () => {
      const activeResolved: ResolvedTheme =
        theme === "system" ? (mq.matches ? "dark" : "light") : theme;
      setResolvedTheme(activeResolved);
      document.documentElement.classList.toggle("dark", activeResolved === "dark");
    };

    updateResolved();
    setStoredTheme(theme);

    const handleMediaChange = () => {
      if (theme === "system") {
        updateResolved();
      }
    };

    mq.addEventListener("change", handleMediaChange);
    return () => mq.removeEventListener("change", handleMediaChange);
  }, [theme, mounted]);

  const setTheme = (next: Theme, anchor?: ThemeTransitionAnchor) => {
    if (next === theme) return;

    const willBeResolved: ResolvedTheme =
      next === "system" ? resolveSystemTheme() : next;

    if (willBeResolved === resolvedTheme) {
      setThemeState(next);
      setStoredTheme(next);
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const supportsViewTransition =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !prefersReducedMotion;

    if (!supportsViewTransition) {
      setThemeState(next);
      setResolvedTheme(willBeResolved);
      document.documentElement.classList.toggle("dark", willBeResolved === "dark");
      setStoredTheme(next);
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (anchor) {
      if ("currentTarget" in anchor && anchor.currentTarget) {
        const rect = (anchor.currentTarget as HTMLElement).getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else if ("clientX" in anchor && typeof anchor.clientX === "number") {
        x = anchor.clientX;
        y = anchor.clientY;
      } else if ("x" in anchor && typeof anchor.x === "number") {
        x = anchor.x;
        y = anchor.y;
      }
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    try {
      const transition = (document as Document & {
        startViewTransition: (callback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      }).startViewTransition(() => {
        flushSync(() => {
          setThemeState(next);
          setResolvedTheme(willBeResolved);
          document.documentElement.classList.toggle("dark", willBeResolved === "dark");
        });
        setStoredTheme(next);
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 700,
              easing: "cubic-bezier(0.6, 0, 0.5, 0.95)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {});
    } catch {
      setThemeState(next);
      setResolvedTheme(willBeResolved);
      document.documentElement.classList.toggle("dark", willBeResolved === "dark");
      setStoredTheme(next);
    }
  };

  const toggleTheme = (anchor?: ThemeTransitionAnchor) => {
    const next: Theme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next, anchor);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
