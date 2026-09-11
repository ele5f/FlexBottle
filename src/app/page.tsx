import Link from "next/link";
import { ArrowRight, BatteryCharging, Lock, Lightbulb, Blend, PackageOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BottleArt } from "@/components/bottle-art";
import { ProductCard } from "@/components/product-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { getProduct, products } from "@/lib/products";
import { cn } from "@/lib/utils";

const featuredSlugs = ["flexbottle-core", "power-base", "lumen-base", "blend-base"];

const steps = [
  {
    title: "Fold flat, twist to lock",
    description:
      "Collapse the bottle to a third of its height. The internal pleats stay hidden — twist the folded section and it locks in place, no separate clasp needed.",
    icon: Lock,
  },
  {
    title: "Swap the base",
    description:
      "Every FlexBottle base attaches with the same one-twist mount. Pick the base that fits what you're doing right now.",
    icon: PackageOpen,
  },
  {
    title: "Power, light, or blend",
    description:
      "Charge your phone and keep your drink hot or cold with Power Base, light your way with Lumen Base, or blend a smoothie with Blend Base.",
    icon: BatteryCharging,
  },
];

const attachments = [
  {
    icon: BatteryCharging,
    name: "Power Base",
    copy: "3,000 mAh power bank with one-button heat & cool.",
    href: "/product/power-base",
  },
  {
    icon: Lightbulb,
    name: "Lumen Base",
    copy: "A 360° diffused lamp for the tent, desk or bedside.",
    href: "/product/lumen-base",
  },
  {
    icon: Blend,
    name: "Blend Base",
    copy: "Stainless steel blades — blend straight in the bottle.",
    href: "/product/blend-base",
  },
];

export default function Home() {
  const featured = featuredSlugs.map((slug) => getProduct(slug)!);
  const stats = [
    { value: "1/3", label: "of the height when folded" },
    { value: "3", label: "interchangeable bases" },
    { value: "600 ml", label: "capacity, every base" },
    { value: "1 twist", label: "to lock or swap" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              One bottle. Three attachments. Endless uses.
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
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

          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex items-end gap-6">
              <BottleArt variant="core" className="h-80 w-auto drop-shadow-xl" />
              <BottleArt
                variant="power"
                folded
                className="mb-2 h-44 w-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="border-y border-border/70 bg-secondary/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">How FlexBottle works</h2>
          <p className="mt-3 text-muted-foreground">
            The same twist-lock mechanism folds the bottle and holds every base in place.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-3 rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <step.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Attachments showcase */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">One base mount, three tools</h2>
            <p className="mt-3 text-muted-foreground">
              Every base — including the one that ships with FlexBottle Core — uses the same
              twist mount. Buy the bases you need, whenever you need them.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {attachments.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <item.icon className="size-5" />
                </span>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.copy}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Shop {item.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Shop the collection</h2>
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
      </section>

      {/* Newsletter */}
      <section className="border-t border-border/70 bg-primary/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight">Get 10% off your first order</h2>
          <p className="max-w-md text-muted-foreground">
            Sign up for restock alerts, new base drops, and launch offers.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
