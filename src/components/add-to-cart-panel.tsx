"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors?.[0]?.name);
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-5">
      {product.colors && (
        <div>
          <div className="mb-2 text-sm font-medium">
            Color{color ? `: ${color}` : ""}
          </div>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setColor(c.name)}
                aria-label={c.name}
                className={cn(
                  "size-8 rounded-full border-2 transition-transform",
                  color === c.name ? "scale-110 border-primary" : "border-transparent"
                )}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="text-sm font-medium">Quantity</div>
        <div className="flex items-center rounded-md border">
          <button
            type="button"
            className="flex size-9 items-center justify-center text-muted-foreground hover:text-foreground"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button
            type="button"
            className="flex size-9 items-center justify-center text-muted-foreground hover:text-foreground"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full"
        onClick={() => {
          addItem(product.slug, color, qty);
          toast.success(`${product.name} added to cart`);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
