/**
 * Converts a price in cents to a string with the USD currency symbol and the
 * price decimalized and fixed to two decimal places.
 *
 * @example 12500 -> "$125.00"
 */
export function convertToDecimalPriceUSD(price: number) {
  return `$${(price / 100).toFixed(2)}`
}
