"use client";

import { useState } from "react";
import Image from "next/image";
import { BottleArt } from "@/components/bottle-art";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import type { Product } from "@/lib/products";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images ?? [];
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-secondary/60">
        {product.badge && (
          <Badge className="absolute left-4 top-4 z-10">{product.badge}</Badge>
        )}
        {images.length > 0 ? (
          <Image
            key={images[active]}
            src={assetPath(images[active])}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <BottleArt variant={product.illustration} className="h-full max-h-96 w-auto p-10" />
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative size-20 shrink-0 overflow-hidden rounded-xl bg-secondary/60 ring-2 transition-all",
                active === i ? "ring-primary" : "ring-transparent hover:ring-border"
              )}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={assetPath(src)} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
