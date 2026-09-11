// GitHub Pages serves this site under /<repo-name>/. next/image's src isn't
// automatically prefixed with basePath when images are unoptimized, so any
// static asset path (starting with "/") passed to <Image> needs this.
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
