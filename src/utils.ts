import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class values into a single string using the 'clsx' and 'twMerge' libraries.
 *
 * @param inputs - The class values to be combined.
 * @returns The combined class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
