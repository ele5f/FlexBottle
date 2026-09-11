import Image from "next/image";
import { BottleArt } from "@/components/bottle-art";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductThumb({
  product,
  className,
  iconClassName,
}: {
  product: Product;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("relative shrink-0 overflow-hidden rounded-lg bg-secondary", className)}>
      {product.images?.[0] ? (
        <Image src={product.images[0]} alt={product.name} fill sizes="100px" className="object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <BottleArt variant={product.illustration} className={iconClassName ?? "h-14 w-14"} />
        </div>
      )}
    </div>
  );
}
