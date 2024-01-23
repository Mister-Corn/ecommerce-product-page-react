import { useSwipeable } from 'react-swipeable'
import imgProduct1 from '@/assets/products/image-product-1.jpg'
import imgProduct2 from '@/assets/products/image-product-2.jpg'
import imgProduct3 from '@/assets/products/image-product-3.jpg'
import imgProduct4 from '@/assets/products/image-product-4.jpg'
import iconPrevious from '@/assets/svgs/icon-previous.svg'
import iconNext from '@/assets/svgs/icon-next.svg'
import { useState } from 'react'

function MobileProductCarousel() {
  const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

  const { totalNumImages, currentImg, handlers } = useCarouselState(images)

  const mobileSwipeHandlers = useSwipeable({
    onSwipedLeft: handlers.previous,
    onSwipedRight: handlers.next,
  })

  return (
    <section {...mobileSwipeHandlers} className="relative">
      <img
        src={currentImg.src}
        alt=""
        className="aspect-[4/3] w-full object-cover"
      />

      <span className="sr-only">
        Product image {currentImg.number} of {totalNumImages}
      </span>

      <button
        onClick={handlers.previous}
        aria-label="Go to previous image"
        className="absolute left-4 top-1/2 rounded-full bg-white p-3"
      >
        <img src={iconPrevious} alt="Previous" className="h-3 w-3" />
      </button>

      <button
        onClick={handlers.next}
        aria-label="Go to next image"
        className="absolute right-4 top-1/2 rounded-full bg-white p-3"
      >
        <img src={iconNext} alt="Next" className="h-3 w-3" />
      </button>
    </section>
  )
}

function useCarouselState(images: string[]) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const currentImg = images[currentImgIndex]
  const currentImgNumber = currentImgIndex + 1
  const totalNumImages = images.length

  const handlePrevious = () => {
    setCurrentImgIndex((currentImgIndex) => {
      const currentImgIsFirstImg = currentImgIndex === 0
      const lastImgIndex = images.length - 1

      if (currentImgIsFirstImg) {
        return lastImgIndex
      } else {
        return currentImgIndex - 1
      }
    })
  }

  const handleNext = () => {
    setCurrentImgIndex((currentImgIndex) => {
      const currentImgIsLastImg = currentImgIndex === images.length - 1
      const firstImgIndex = 0

      if (currentImgIsLastImg) {
        return firstImgIndex
      } else {
        return currentImgIndex + 1
      }
    })
  }

  return {
    totalNumImages,
    currentImg: {
      src: currentImg,
      number: currentImgNumber,
    },
    handlers: {
      previous: handlePrevious,
      next: handleNext,
    },
  }
}

export default MobileProductCarousel
