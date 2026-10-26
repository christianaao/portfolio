"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  // Computed client-side so the build year is always current without
  // making the whole page dynamic (new Date() can't be used during
  // static prerendering).
  const [year, setYear] = useState<number>(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border-subtle py-8 text-center text-sm text-foreground/50">
      <p>
        &copy; {year} {personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
