"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-muted hover:bg-accent hover:scale-105 active:scale-95 transition-all"
      aria-label="Toggle theme"
    >
      <Sun className="size-5 dark:hidden" />
      <Moon className="size-5 hidden dark:block" />
    </button>
  );
}
