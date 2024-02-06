import debounce from 'lodash/debounce'
import { useLayoutEffect, useState } from 'react'

/**
 * Hook to measure the dimensions of a DOM element matched by the given query
 * selector, as well as the window inner width. Handles updating the
 * measurements on resize.
 *
 * @note If the element isn't found, the dimensions will be set to 0.
 *
 * @param elementSelector - CSS selector to match the element to measure
 * @returns
 *  - element: The matched element's dimensions
 *    - height: The element's height
 *    - width: The element's width
 *  - windowSize: The window dimensions
 *    - innerWidth: The viewport width
 */
export function useMeasureDimensions(elementSelector: string) {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [windowInnerWidth, setWindowInnerWidth] = useState(0)

  useLayoutEffect(() => {
    const updateElementDimensions = () => {
      const element = document.querySelector(elementSelector)

      if (element) {
        const topBarRect = element.getBoundingClientRect()
        setHeight(topBarRect.height)
        setWidth(topBarRect.width)
      }
    }

    const updateWindowInnerWidth = () => {
      setWindowInnerWidth(window.innerWidth)
    }

    const updateAllDimensions = debounce(() => {
      updateElementDimensions()
      updateWindowInnerWidth()
    }, 150)

    // Initial measurement
    updateAllDimensions()

    // Attach the resize event listener to the window
    window.addEventListener('resize', updateAllDimensions)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateAllDimensions)
    }
  }, [elementSelector])

  return {
    element: {
      height,
      width,
    },
    windowSize: {
      innerWidth: windowInnerWidth,
    },
  }
}
