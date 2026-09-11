export type ProductCategory = "bottle" | "base" | "bundle";

export type BottleColor = {
  name: string;
  swatch: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  colors?: BottleColor[];
  includes?: string[];
  illustration: "core" | "power" | "lumen" | "blend" | "bundle-power" | "bundle-pro";
  badge?: string;
  images?: string[];
};

export const colors: BottleColor[] = [
  { name: "Midnight Black", swatch: "#1c2126" },
  { name: "Arctic White", swatch: "#eef1f2" },
  { name: "Lagoon Teal", swatch: "#1f7a72" },
];

export const products: Product[] = [
  {
    slug: "flexbottle-core",
    name: "FlexBottle Core",
    tagline: "The collapsible bottle that folds flat and locks with a twist.",
    category: "bottle",
    price: 34.99,
    compareAtPrice: 39.99,
    description:
      "FlexBottle Core is the original folding bottle. Concealed internal pleats let it collapse to a third of its height, while a simple twist of the folded section engages the built-in lock — no separate clasp, no loose parts. Comes with the Classic Base cap, and is compatible with every interchangeable base we make.",
    features: [
      "Folds to 1/3 of its extended height",
      "Twist-to-lock collapse — no external latch",
      "Hidden internal pleats stay concealed when folded",
      "Interchangeable base, compatible with all FlexBottle attachments",
      "Food-grade, BPA-free shell",
      "600 ml capacity",
    ],
    specs: [
      { label: "Capacity", value: "600 ml / 20 oz" },
      { label: "Extended height", value: "24.5 cm" },
      { label: "Folded height", value: "8.2 cm" },
      { label: "Weight", value: "142 g" },
      { label: "Material", value: "Food-grade silicone-TPU shell, PP base ring" },
      { label: "Lock mechanism", value: "Integrated twist-lock, engages on fold" },
      { label: "Base compatibility", value: "Universal FlexBottle base mount" },
    ],
    colors,
    includes: ["FlexBottle Core", "Classic Base cap", "Quick-start card"],
    illustration: "core",
    badge: "Best seller",
    images: ["/products/flexbottle-core.jpg", "/products/flexbottle-core-folded.jpg"],
  },
  {
    slug: "power-base",
    name: "Power Base",
    tagline: "Swap the bottom for a power bank with hot & cold control.",
    category: "base",
    price: 49.99,
    description:
      "Replace the Classic Base with Power Base and your bottle becomes a 3,000 mAh power bank. A single button on the side switches between heating and cooling the liquid inside, so your drink stays exactly how you like it while your phone charges.",
    features: [
      "3,000 mAh built-in power bank",
      "USB-C in and out",
      "One-button heat / cool toggle for the bottle contents",
      "Snaps onto any FlexBottle in one twist",
      "LED charge indicator",
    ],
    specs: [
      { label: "Battery capacity", value: "3,000 mAh" },
      { label: "Output", value: "USB-C, 5V/2A" },
      { label: "Heat mode", value: "Up to 55°C" },
      { label: "Cool mode", value: "Down to 8°C below ambient" },
      { label: "Charge time", value: "~90 minutes" },
      { label: "Weight", value: "168 g" },
    ],
    includes: ["Power Base attachment", "USB-C cable"],
    illustration: "power",
    badge: "New",
    images: ["/products/power-base.jpg"],
  },
  {
    slug: "lumen-base",
    name: "Lumen Base",
    tagline: "Turn the base into a soft-glow lamp for the tent, desk or bedside.",
    category: "base",
    price: 24.99,
    description:
      "Lumen Base swaps in a diffused LED ring that turns your FlexBottle into a lantern in seconds. Three brightness settings and a warm-white glow make it as useful on a nightstand as it is at a campsite.",
    features: [
      "360° diffused LED ring",
      "3 brightness levels + warm-white glow",
      "Up to 12 hours runtime on a full charge",
      "Snaps onto any FlexBottle in one twist",
      "USB-C rechargeable",
    ],
    specs: [
      { label: "Light output", value: "Up to 180 lumens" },
      { label: "Runtime", value: "Up to 12 hours (low)" },
      { label: "Battery", value: "800 mAh, USB-C rechargeable" },
      { label: "Weight", value: "96 g" },
    ],
    includes: ["Lumen Base attachment", "USB-C cable"],
    illustration: "lumen",
    images: ["/products/lumen-base.jpg"],
  },
  {
    slug: "blend-base",
    name: "Blend Base",
    tagline: "The base that turns your bottle into a personal juice blender.",
    category: "base",
    price: 44.99,
    description:
      "Blend Base hides a set of stainless steel blades and a rechargeable motor in a base no taller than the others. Add fruit, twist it on, and blend straight in the bottle — then swap back to any other base when you're done.",
    features: [
      "Stainless steel 4-blade assembly",
      "Rechargeable motor, 15,000 RPM",
      "One-touch pulse blending",
      "Snaps onto any FlexBottle in one twist",
      "Dishwasher-safe blade unit",
    ],
    specs: [
      { label: "Motor", value: "Rechargeable, 15,000 RPM" },
      { label: "Blade material", value: "Stainless steel, 4-blade" },
      { label: "Runtime", value: "~12 blend cycles per charge" },
      { label: "Charging", value: "USB-C" },
      { label: "Weight", value: "205 g" },
    ],
    includes: ["Blend Base attachment", "USB-C cable", "Cleaning brush"],
    illustration: "blend",
    images: ["/products/blend-base.jpg"],
  },
  {
    slug: "starter-bundle",
    name: "Starter Bundle",
    tagline: "FlexBottle Core + Power Base, ready out of the box.",
    category: "bundle",
    price: 79.99,
    compareAtPrice: 84.98,
    description:
      "Everything you need to start: the FlexBottle Core plus the Power Base, so your bottle folds flat, locks with a twist, and charges your phone while keeping your drink hot or cold — from day one.",
    features: [
      "Includes FlexBottle Core + Power Base",
      "Save vs. buying separately",
      "Mix and match colors at checkout",
    ],
    specs: [
      { label: "Includes", value: "FlexBottle Core, Power Base, USB-C cable" },
      { label: "Combined weight", value: "310 g" },
    ],
    colors,
    includes: ["FlexBottle Core", "Power Base attachment", "USB-C cable"],
    illustration: "bundle-power",
  },
  {
    slug: "pro-bundle",
    name: "Pro Bundle",
    tagline: "The Core plus all three bases — power, light and blend.",
    category: "bundle",
    price: 139.99,
    compareAtPrice: 154.96,
    description:
      "The complete FlexBottle system. One Core bottle and all three interchangeable bases, so you can charge your phone, light your tent or blend a smoothie — all with the same bottle you fold flat and carry anywhere.",
    features: [
      "Includes FlexBottle Core + Power Base + Lumen Base + Blend Base",
      "Biggest savings vs. buying separately",
      "Comes in a reusable travel case",
    ],
    specs: [
      { label: "Includes", value: "Core, Power Base, Lumen Base, Blend Base, travel case" },
      { label: "Combined weight", value: "~610 g" },
    ],
    colors,
    includes: [
      "FlexBottle Core",
      "Power Base attachment",
      "Lumen Base attachment",
      "Blend Base attachment",
      "Travel case",
    ],
    illustration: "bundle-pro",
    badge: "Best value",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

