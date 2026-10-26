"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Avoid hydration mismatch: only render the real icon once mounted client-side.
  // This is the standard next-themes pattern; the effect intentionally syncs
  // React state with the "has the client mounted yet" fact, not derivable otherwise.
  const [mounted, setMounted] = useState(false);
  // Standard next-themes hydration-safe "mounted" flag: no external system to
  // subscribe to, just a one-time client vs. server render flag.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface text-lavender-600 dark:text-lavender-300 transition-all duration-300 hover:scale-110 hover:border-lavender-400 hover:shadow-[0_0_0_4px_rgba(134,103,196,0.15)]"
    >
      {mounted && isDark ? (
        <Sun size={18} className="transition-transform duration-300" />
      ) : (
        <Moon size={18} className="transition-transform duration-300" />
      )}
    </button>
  );
}
