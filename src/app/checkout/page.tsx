"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-context";
import { getProduct, formatPrice } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const shippingCost = subtotal >= 60 || subtotal === 0 ? 0 : 6.99;
  const total = subtotal + shippingCost;

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
        <ShoppingBag className="size-12 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground">Add something to your cart before checking out.</p>
        <Link href="/shop" className={buttonVariants({ size: "lg" })}>
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>

      <form
        className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          setTimeout(() => {
            clear();
            router.push("/checkout/success");
          }, 400);
        }}
      >
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2 className="font-semibold">Contact</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" required />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-semibold">Shipping address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="zip">ZIP / postal code</Label>
                <Input id="zip" name="zip" required />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" required defaultValue="United States" />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
            This is a demo storefront — placing an order here does not charge a card or ship a
            real product. Connect a payment provider to go live.
          </section>
        </div>

        <div className="h-fit rounded-2xl border border-border p-6">
          <h2 className="font-semibold">Order summary</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li
                  key={`${line.slug}-${line.color ?? "default"}`}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">
                    {product.name}
                    {line.color ? ` — ${line.color}` : ""} × {line.qty}
                  </span>
                  <span className="font-medium">{formatPrice(product.price * line.qty)}</span>
                </li>
              );
            })}
          </ul>
          <Separator className="my-4" />
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full" disabled={submitting}>
            {submitting ? "Placing order…" : "Place order"}
          </Button>
        </div>
      </form>
    </div>
  );
}
