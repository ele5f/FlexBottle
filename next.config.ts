import type { NextConfig } from "next";

// GitHub Pages serves this repo from /<repo-name>/, so the built app needs
// that as its basePath/assetPrefix when running in the GitHub Actions build.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";
let assetPrefix = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  // next/image with unoptimized:true renders a plain <img src>, which does
  // NOT get basePath prefixed automatically (that only happens for the
  // default /_next/image loader). Expose basePath so components can prefix
  // static asset paths themselves — see src/lib/asset-path.ts.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
