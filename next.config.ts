import type { NextConfig } from "next";

// GitHub Pages serves this project at https://christianaao.github.io/portfolio/,
// so production builds need a basePath/assetPrefix matching the repo name.
// Local `npm run dev` is unaffected (NODE_ENV is "development" there).
const repoName = "portfolio";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  // Exposed so client code (e.g. the static CV link in src/data/portfolio.ts)
  // can prefix plain root-relative URLs that Next.js doesn't rewrite itself.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
