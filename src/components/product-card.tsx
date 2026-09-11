import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { BottleArt } from "@/components/bottle-art";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative flex aspect-square items-center justify-center bg-secondary/60 p-8">
        {product.badge && (
          <Badge className="absolute left-3 top-3" variant="secondary">
            {product.badge}
          </Badge>
        )}
        <BottleArt
          variant={product.illustration}
          className="h-full max-h-48 w-auto transition-transform duration-300 group-hover:-translate-y-1"
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
        <h3 className="font-semibold leading-snug">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.tagline}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
