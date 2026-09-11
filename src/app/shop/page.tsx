import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopClient } from "@/components/shop-client";

export const metadata: Metadata = {
  title: "Shop — FlexBottle",
  description: "Shop the FlexBottle Core, interchangeable bases, and bundles.",
};

export default function ShopPage() {
  return (
    <Suspense>
      <ShopClient />
    </Suspense>
  );
}
