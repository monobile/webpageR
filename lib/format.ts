import type { MenuItem } from "@/data/menu";

/**
 * Formats a menu price as "330 ₽" or "200/250 ₽" for two sizes.
 * Western digits are used in every locale so prices stay easy to scan;
 * components wrap the result in a `dir="ltr"` span for RTL layouts.
 */
export function formatPrice(price: MenuItem["price"]): string {
  if (Array.isArray(price)) {
    return `${price[0]}/${price[1]} ₽`;
  }
  return `${price} ₽`;
}
