"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { currencyList, type CurrencyCode } from "@/lib/currency";
import { useCurrency } from "@/components/currency-context";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select value={currency} onValueChange={(value) => setCurrency(value as CurrencyCode)}>
      <SelectTrigger size="sm" className="border-none bg-transparent px-2 text-xs font-medium" aria-label="Currency">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {currencyList.map((c) => (
          <SelectItem key={c.code} value={c.code}>
            <span className="font-medium">{c.code}</span>
            <span className="text-muted-foreground">{c.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
