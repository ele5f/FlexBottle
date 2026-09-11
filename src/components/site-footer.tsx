import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
              FB
            </span>
            <span className="text-lg">FlexBottle</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            One bottle that folds flat and locks with a twist — with a base you can swap for
            power, light or a blender.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold text-foreground">Shop</div>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="/shop" className="hover:text-foreground">All products</Link>
            <Link href="/shop?category=bottle" className="hover:text-foreground">FlexBottle Core</Link>
            <Link href="/shop?category=base" className="hover:text-foreground">Bases</Link>
            <Link href="/shop?category=bundle" className="hover:text-foreground">Bundles</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold text-foreground">Company</div>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/#how-it-works" className="hover:text-foreground">How it works</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="font-semibold text-foreground">Support</div>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="/contact" className="hover:text-foreground">Shipping & returns</Link>
            <Link href="/contact" className="hover:text-foreground">Warranty</Link>
            <Link href="/contact" className="hover:text-foreground">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} FlexBottle. All rights reserved.
      </div>
    </footer>
  );
}
