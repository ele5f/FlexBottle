"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/components/cart-context";
import { getProduct, formatPrice } from "@/lib/products";
import { BottleArt } from "@/components/bottle-art";
import { Separator } from "@/components/ui/separator";

export function CartSheet() {
  const { lines, isOpen, setOpen, removeItem, setQty, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex flex-col gap-0">
        <SheetHeader className="border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="size-4" /> Your cart {count > 0 && `(${count})`}
          </SheetTitle>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag className="size-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <Link href="/shop" className={buttonVariants()} onClick={() => setOpen(false)}>
              Browse the shop
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-5">
                {lines.map((line) => {
                  const product = getProduct(line.slug);
                  if (!product) return null;
                  return (
                    <li key={`${line.slug}-${line.color ?? "default"}`} className="flex gap-3">
                      <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <BottleArt variant={product.illustration} className="h-14 w-14" />
                      </div>
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              href={`/product/${product.slug}`}
                              onClick={() => setOpen(false)}
                              className="text-sm font-medium hover:underline"
                            >
                              {product.name}
                            </Link>
                            {line.color && (
                              <div className="text-xs text-muted-foreground">{line.color}</div>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(line.slug, line.color)}
                            className="text-muted-foreground hover:text-foreground"
                            aria-label="Remove item"
                          >
                            <X className="size-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-md border">
                            <button
                              className="flex size-7 items-center justify-center text-muted-foreground hover:text-foreground"
                              onClick={() => setQty(line.slug, line.color, line.qty - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="w-6 text-center text-sm">{line.qty}</span>
                            <button
                              className="flex size-7 items-center justify-center text-muted-foreground hover:text-foreground"
                              onClick={() => setQty(line.slug, line.color, line.qty + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold">
                            {formatPrice(product.price * line.qty)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <SheetFooter className="border-t">
              <div className="flex w-full flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <Separator />
                <Link
                  href="/checkout"
                  className={buttonVariants({ size: "lg" })}
                  onClick={() => setOpen(false)}
                >
                  Checkout
                </Link>
                <Link
                  href="/cart"
                  className={buttonVariants({ variant: "outline" })}
                  onClick={() => setOpen(false)}
                >
                  View cart
                </Link>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
