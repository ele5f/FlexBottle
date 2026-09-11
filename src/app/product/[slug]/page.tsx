import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ChevronRight } from "lucide-react";
import { getProduct, products, formatPrice } from "@/lib/products";
import { BottleArt } from "@/components/bottle-art";
import { AddToCartPanel } from "@/components/add-to-cart-panel";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — FlexBottle`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.category !== "bundle")
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-secondary/60 p-10">
          {product.badge && (
            <Badge className="absolute left-4 top-4">{product.badge}</Badge>
          )}
          <BottleArt variant={product.illustration} className="h-full max-h-96 w-auto" />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <p className="mt-2 text-muted-foreground">{product.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <AddToCartPanel product={product} />

          {product.includes && (
            <div className="rounded-xl border border-border p-4">
              <div className="mb-2 text-sm font-medium">What&apos;s included</div>
              <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                {product.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="mb-3 text-lg font-semibold">Highlights</h2>
          <ul className="flex flex-col gap-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        <Accordion defaultValue={["description"]}>
          <AccordionItem value="description">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{product.description}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="specs">
            <AccordionTrigger>Specifications</AccordionTrigger>
            <AccordionContent>
              <dl className="flex flex-col gap-2">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping & returns</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Orders ship within 2 business days. Free shipping over $60. 30-day returns on
                unused items in original packaging.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-semibold">You might also like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
