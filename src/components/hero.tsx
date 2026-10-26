"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Decorative floating blobs for a playful touch */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-lavender-300/30 blur-3xl dark:bg-lavender-700/20"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-lavender-400/20 blur-3xl dark:bg-lavender-600/20"
        animate={{ y: [0, -24, 0], x: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-4 inline-block rounded-full border border-lavender-300 bg-surface px-4 py-1.5 text-sm font-medium text-lavender-600 dark:border-lavender-700 dark:text-lavender-300"
      >
        {personalInfo.title} &middot; {personalInfo.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
      >
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-lavender-500 to-lavender-700 bg-clip-text text-transparent dark:from-lavender-300 dark:to-lavender-500">
          {personalInfo.name}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mt-5 max-w-xl text-lg text-foreground/70"
      >
        {personalInfo.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-lavender-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-lavender-600/25 transition-transform hover:-translate-y-0.5 hover:bg-lavender-700"
        >
          View Projects
        </a>
        <a
          href={personalInfo.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:border-lavender-400"
        >
          <Download size={16} /> Download CV
        </a>
        <a
          href="#contact"
          className="rounded-full px-6 py-3 text-sm font-semibold text-lavender-700 transition-transform hover:-translate-y-0.5 dark:text-lavender-300"
        >
          Contact
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative mt-10 flex items-center gap-4"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-foreground/60 transition-colors hover:text-lavender-600 dark:hover:text-lavender-300"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-foreground/60 transition-colors hover:text-lavender-600 dark:hover:text-lavender-300"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-foreground/40 hover:text-lavender-500"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
