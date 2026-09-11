import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
      <CheckCircle2 className="size-14 text-primary" />
      <h1 className="text-3xl font-bold tracking-tight">Order placed</h1>
      <p className="text-muted-foreground">
        Thanks for your order. This is a demo storefront, so no real charge was made and no
        product will ship — but that&apos;s exactly how the flow would work once payments are
        connected.
      </p>
      <Link href="/shop" className={buttonVariants({ size: "lg" })}>
        Continue shopping
      </Link>
    </div>
  );
}
