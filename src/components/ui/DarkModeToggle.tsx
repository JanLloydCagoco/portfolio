"use client";

import React from "react";
import ThemeSegmentedControl from "./ThemeSegmentedControl";

interface DarkModeToggleProps {
  variant?: "compact" | "rail";
  className?: string;
}

export default function DarkModeToggle({
  className = "",
}: DarkModeToggleProps) {
  return <ThemeSegmentedControl className={className} />;
}
