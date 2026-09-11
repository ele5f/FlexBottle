"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct } from "@/lib/products";

export type CartLine = {
  slug: string;
  color?: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addItem: (slug: string, color?: string, qty?: number) => void;
  removeItem: (slug: string, color?: string) => void;
  setQty: (slug: string, color: string | undefined, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "flexbottle-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Runs once after mount, after the server-rendered (storage-less) markup has
    // already hydrated, so this can't cause a hydration mismatch.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore storage failures
    }
  }, [lines, hydrated]);

  const addItem = useCallback((slug: string, color?: string, qty = 1) => {
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.slug === slug && l.color === color);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { slug, color, qty }];
    });
    setOpen(true);
  }, []);

  const removeItem = useCallback((slug: string, color?: string) => {
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.color === color)));
  }, []);

  const setQty = useCallback((slug: string, color: string | undefined, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((l) => !(l.slug === slug && l.color === color));
      return prev.map((l) => (l.slug === slug && l.color === color ? { ...l, qty } : l));
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const { count, subtotal } = useMemo(() => {
    let count = 0;
    let subtotal = 0;
    for (const line of lines) {
      const product = getProduct(line.slug);
      if (!product) continue;
      count += line.qty;
      subtotal += product.price * line.qty;
    }
    return { count, subtotal };
  }, [lines]);

  const value: CartContextValue = {
    lines,
    isOpen,
    setOpen,
    addItem,
    removeItem,
    setQty,
    clear,
    count,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
