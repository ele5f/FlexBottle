import Link from "next/link";
import type { Metadata } from "next";
import { products, ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shop — FlexBottle",
  description: "Shop the FlexBottle Core, interchangeable bases, and bundles.",
};

const tabs: { label: string; value: ProductCategory | "all" }[] = [
  { label: "All products", value: "all" },
  { label: "Bottle", value: "bottle" },
  { label: "Bases", value: "base" },
  { label: "Bundles", value: "bundle" },
];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = tabs.some((t) => t.value === category) ? category : "all";
  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Shop FlexBottle</h1>
        <p className="mt-2 text-muted-foreground">
          The Core bottle, every interchangeable base, and bundles that save you money.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.value === "all" ? "/shop" : `/shop?category=${tab.value}`}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === tab.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">No products in this category yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
