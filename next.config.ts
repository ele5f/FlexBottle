import type { NextConfig } from "next";

// GitHub Pages serves this repo from /<repo-name>/. NEXT_PUBLIC_BASE_PATH is
// set as a real env var in .github/workflows/nextjs.yml's build step (not
// via this file's `env` key) so Next reliably inlines it into the client
// bundle — see src/lib/asset-path.ts for why that matters.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
