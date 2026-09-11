"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const tickerItems = [
  "Folds to 1/3 its height",
  "Twist-lock, no separate clasp",
  "Swaps to power, light, or blend",
  "Free shipping over $60",
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden bg-foreground text-background">
      <div className="animate-marquee flex w-max items-center gap-10 py-1.5 text-[11px] font-medium tracking-wide uppercase">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {item}
            <span className="text-background/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <Ticker />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 rotate-3 items-center justify-center rounded-xl bg-primary font-serif text-base font-semibold text-primary-foreground">
            fb
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">FlexBottle</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <CurrencySwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Open cart"
            onClick={() => setOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                {count}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-b border-border/70 transition-[grid-template-rows] duration-200 md:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-4 pb-4 text-sm font-medium">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
