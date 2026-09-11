"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { BottleArt } from "@/components/bottle-art";
import { Badge } from "@/components/ui/badge";
import { useFormatPrice } from "@/components/currency-context";

export function ProductCard({ product }: { product: Product }) {
  const format = useFormatPrice();

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/70 to-secondary/20 p-8">
        {product.badge && (
          <Badge className="absolute left-3 top-3" variant="secondary">
            {product.badge}
          </Badge>
        )}
        <div className="absolute inset-x-10 bottom-6 h-4 rounded-full bg-foreground/10 blur-md" />
        <BottleArt
          variant={product.illustration}
          className="relative h-full max-h-48 w-auto transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-1"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.category === "bottle"
            ? "Bottle"
            : product.category === "base"
              ? "Base"
              : "Bundle"}
        </div>
        <h3 className="font-serif text-lg leading-snug">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.tagline}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">{format(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {format(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
