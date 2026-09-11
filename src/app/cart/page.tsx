"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { useFormatPrice } from "@/components/currency-context";
import { getProduct } from "@/lib/products";
import { BottleArt } from "@/components/bottle-art";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { lines, removeItem, setQty, subtotal } = useCart();
  const format = useFormatPrice();

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
        <ShoppingBag className="size-12 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/shop" className={buttonVariants({ size: "lg" })}>
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Your cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
        <ul className="flex flex-col divide-y divide-border">
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <li key={`${line.slug}-${line.color ?? "default"}`} className="flex gap-4 py-6">
                <Link
                  href={`/product/${product.slug}`}
                  className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-secondary"
                >
                  <BottleArt variant={product.illustration} className="h-20 w-20" />
                </Link>
                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/product/${product.slug}`} className="font-medium hover:underline">
                        {product.name}
                      </Link>
                      {line.color && (
                        <div className="text-sm text-muted-foreground">{line.color}</div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        {format(product.price)} each
                      </div>
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
                        className="flex size-8 items-center justify-center text-muted-foreground hover:text-foreground"
                        onClick={() => setQty(line.slug, line.color, line.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm">{line.qty}</span>
                      <button
                        className="flex size-8 items-center justify-center text-muted-foreground hover:text-foreground"
                        onClick={() => setQty(line.slug, line.color, line.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <span className="font-semibold">{format(product.price * line.qty)}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="h-fit rounded-2xl border border-border p-6">
          <h2 className="font-semibold">Order summary</h2>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{format(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">{subtotal >= 60 ? "Free" : format(6.99)}</span>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{format(subtotal >= 60 ? subtotal : subtotal + 6.99)}</span>
          </div>
          <Link href="/checkout" className={buttonVariants({ size: "lg", className: "mt-6 w-full" })}>
            Checkout
          </Link>
          <Link
            href="/shop"
            className={buttonVariants({ variant: "outline", className: "mt-2 w-full" })}
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
