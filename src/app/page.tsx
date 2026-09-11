import Link from "next/link";
import { ArrowRight, BatteryCharging, Lock, Lightbulb, Blend, Droplets, PackageOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BottleArt } from "@/components/bottle-art";
import { ProductCard } from "@/components/product-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { TiltCard } from "@/components/tilt-card";
import { getProduct, products } from "@/lib/products";
import { cn } from "@/lib/utils";

const featuredSlugs = ["flexbottle-core", "power-base", "lumen-base", "blend-base"];

const stats = [
  { value: "1/3", label: "of the height when folded" },
  { value: "3", label: "interchangeable bases" },
  { value: "600ml", label: "capacity, every base" },
  { value: "1", label: "twist to lock or swap" },
];

export default function Home() {
  const featured = featuredSlugs.map((slug) => getProduct(slug)!);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              One bottle. Three attachments. Endless uses.
            </span>
            <h1 className="max-w-lg font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              The bottle that folds flat — and becomes whatever you need next.
            </h1>
            <p className="max-w-md text-lg text-muted-foreground">
              FlexBottle collapses to a third of its size and locks with a single twist. Swap
              the base for a power bank, a lamp, or a personal blender, whenever you need it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className={cn(buttonVariants({ size: "lg" }), "px-6")}>
                Shop FlexBottle <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#how-it-works"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "px-6")}
              >
                See how it works
              </Link>
            </div>
          </div>

          <TiltCard className="relative mx-auto flex items-center justify-center" strength={8}>
            <div className="relative flex h-[420px] w-[320px] items-end justify-center">
              <div className="absolute inset-0 -rotate-6 rounded-[3rem] bg-primary/10" />
              <div className="absolute inset-x-6 top-6 bottom-16 rotate-3 rounded-[2.5rem] bg-accent/15" />
              <BottleArt variant="core" className="relative h-[380px] w-auto drop-shadow-xl" />
              <BottleArt
                variant="power"
                folded
                className="absolute -right-6 bottom-4 h-44 w-auto -rotate-6 drop-shadow-lg"
              />
              <span className="absolute -left-4 top-10 -rotate-6 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-md">
                Twist to lock 🔒
              </span>
            </div>
          </TiltCard>
        </div>

        <div className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-3xl font-medium">{stat.value}</span>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + attachments — bento */}
      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            One base mount, three tools
          </h2>
          <p className="mt-3 text-muted-foreground">
            The same twist-lock mechanism folds the bottle and holds every base in place — swap
            it for whatever the moment calls for.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-3 lg:auto-rows-[170px]">
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-7 text-primary-foreground sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div>
              <PackageOpen className="size-6 opacity-80" />
              <h3 className="mt-4 font-serif text-2xl font-medium">Fold it. Twist it. Swap it.</h3>
              <p className="mt-2 max-w-sm text-primary-foreground/75">
                Collapse the bottle and twist the folded section to lock — no separate clasp.
                Then twist any base on or off in the same motion.
              </p>
            </div>
            <div className="mt-6 flex items-end gap-4">
              <BottleArt variant="core" className="h-28 w-auto" />
              <BottleArt variant="power" folded className="h-16 w-auto opacity-80" />
              <BottleArt variant="lumen" folded className="h-16 w-auto opacity-80" />
              <BottleArt variant="blend" folded className="h-16 w-auto opacity-80" />
            </div>
          </div>

          <Link
            href="/product/power-base"
            className="group flex flex-col justify-between rounded-2xl bg-accent p-6 text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <BatteryCharging className="size-6" />
            <div>
              <h3 className="font-semibold">Power Base</h3>
              <p className="mt-1 text-sm text-accent-foreground/80">
                3,000 mAh + one-button heat & cool.
              </p>
            </div>
          </Link>

          <Link
            href="/product/lumen-base"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-0.5"
          >
            <Lightbulb className="size-6 text-primary" />
            <div>
              <h3 className="font-semibold">Lumen Base</h3>
              <p className="mt-1 text-sm text-muted-foreground">A 360° lamp for camp or bedside.</p>
            </div>
          </Link>

          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-border p-6">
            <Lock className="size-6 text-primary" />
            <div>
              <h3 className="font-semibold">No separate lock</h3>
              <p className="mt-1 text-sm text-muted-foreground">The fold twist is the lock.</p>
            </div>
          </div>

          <Link
            href="/product/blend-base"
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-0.5"
          >
            <Blend className="size-6 text-primary" />
            <div>
              <h3 className="font-semibold">Blend Base</h3>
              <p className="mt-1 text-sm text-muted-foreground">Blend straight in the bottle.</p>
            </div>
          </Link>

          <div className="flex flex-col justify-between rounded-2xl bg-secondary p-6">
            <Droplets className="size-6 text-primary" />
            <div>
              <h3 className="font-serif text-xl">600 ml</h3>
              <p className="mt-1 text-sm text-muted-foreground">Same capacity, every base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-border/70 bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                Shop the collection
              </h2>
              <p className="mt-2 text-muted-foreground">
                {products.length} products — the bottle, every base, and bundles that save you money.
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary sm:flex"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-medium tracking-tight">
            Get 10% off your first order
          </h2>
          <p className="max-w-md text-muted-foreground">
            Sign up for restock alerts, new base drops, and launch offers.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
