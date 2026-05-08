"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

function getStoredTheme(): Theme {
  try {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage?.getItem("theme");
    if (stored === "dark") return "dark";
    return "light";
  } catch {
    return "light";
  }
}

function setStoredTheme(theme: Theme) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage?.setItem("theme", theme);
  } catch {
    // silently fail
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    setStoredTheme(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}