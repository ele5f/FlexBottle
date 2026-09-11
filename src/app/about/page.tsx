import type { Metadata } from "next";
import Link from "next/link";
import { Lock, PackageOpen, Recycle } from "lucide-react";
import { BottleArt } from "@/components/bottle-art";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — FlexBottle",
  description: "Why we built a bottle that folds flat and does more.",
};

const values = [
  {
    icon: PackageOpen,
    title: "Do more with less",
    body: "One bottle, one base mount. Instead of buying a separate power bank, lamp and blender, you buy the attachments you actually use.",
  },
  {
    icon: Lock,
    title: "Fewer moving parts",
    body: "No external clasps or separate locks to lose. The same twist that folds the bottle is the lock — simple by design.",
  },
  {
    icon: Recycle,
    title: "Built to last",
    body: "Every base is designed to outlive the trend it solves. Swap, don't replace, when your needs change.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Our story
          </span>
          <h1 className="text-4xl font-bold tracking-tight">
            We got tired of carrying five things to carry one bottle.
          </h1>
          <p className="text-muted-foreground">
            FlexBottle started with a simple frustration: a great water bottle, a power bank, a
            camp lamp and a travel blender all doing one job each, all taking up separate space.
            We asked what would happen if one base mount could hold all of them — and built a
            bottle that folds flat around that idea.
          </p>
          <p className="text-muted-foreground">
            The result is a bottle whose hidden pleats collapse to a third of its size and lock
            with a single twist, paired with a base you can swap for a power bank, a lamp, or a
            blender, whenever the moment calls for it.
          </p>
          <Link href="/shop" className={buttonVariants({ size: "lg", className: "w-fit" })}>
            Shop FlexBottle
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <BottleArt variant="bundle-pro" className="h-80 w-auto" />
        </div>
      </section>

      <section className="border-t border-border/70 bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <value.icon className="size-6 text-primary" />
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
