import { useState, useEffect } from 'react'

/**
 * Hook that tracks whether the given media query matches.
 *
 * @note Copied shamelessly from credenza, the responsive modal modal component
 * for shadcn/ui.
 *
 * @see https://github.com/redpangilinan/credenza/blob/main/src/hooks/use-media-query.tsx
 *
 * @param query - Media query to match
 * @returns Whether the media query matches
 */
export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}
