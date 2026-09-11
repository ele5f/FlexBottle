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
};

export default nextConfig;
