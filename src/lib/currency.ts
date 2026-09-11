export type CurrencyCode = "USD" | "THB" | "SAR" | "JPY";

export const currencies: Record<
  CurrencyCode,
  { code: CurrencyCode; label: string; rate: number }
> = {
  USD: { code: "USD", label: "US Dollar", rate: 1 },
  THB: { code: "THB", label: "Thai Baht", rate: 32.5 },
  SAR: { code: "SAR", label: "Saudi Riyal", rate: 3.75 },
  JPY: { code: "JPY", label: "Japanese Yen", rate: 150 },
};

export const currencyList = Object.values(currencies);

// Fixed, illustrative rates (not live) — fine for a course project, not for real checkout.
export function convertFromUsd(amountUsd: number, currency: CurrencyCode) {
  return amountUsd * currencies[currency].rate;
}

export function formatMoney(amountUsd: number, currency: CurrencyCode) {
  const converted = convertFromUsd(amountUsd, currency);
  const isWhole = currency === "JPY";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: isWhole ? 0 : 2,
  }).format(converted);
}
