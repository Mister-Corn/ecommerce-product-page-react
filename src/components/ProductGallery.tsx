import product1Thumb from '@/assets/products/image-product-1-thumbnail.jpg'
import productImg1 from '@/assets/products/image-product-1.jpg'
import product2Thumb from '@/assets/products/image-product-2-thumbnail.jpg'
import productImg2 from '@/assets/products/image-product-2.jpg'
import product3Thumb from '@/assets/products/image-product-3-thumbnail.jpg'
import productImg3 from '@/assets/products/image-product-3.jpg'
import product4Thumb from '@/assets/products/image-product-4-thumbnail.jpg'
import productImg4 from '@/assets/products/image-product-4.jpg'
import { cn } from '@/utils'
import { useState } from 'react'

/**
 * Renders a desktop product gallery component with a large main image and thumbnail previews.
 * - Renders the first image in the provided array of images as the main image.
 * - Renders thumbnails of each image below the main image.
 * - Images require a source, thumbnail source, and alt text.
 */
export function DesktopProductGallery() {
  const [selectedImg, setSelectedImg] = useState(0)

  const productImgs = [
    {
      src: productImg1,
      thumbSrc: product1Thumb,
      alt: 'White and beige sneakers on an orange background.',
    },
    {
      src: productImg2,
      thumbSrc: product2Thumb,
      alt: 'White sneakers with brown soles on a gradient orange background.',
    },
    {
      src: productImg3,
      thumbSrc: product3Thumb,
      alt: 'White sneakers with brown soles perched on stones on an orange background.',
    },
    {
      src: productImg4,
      thumbSrc: product4Thumb,
      alt: 'Sneaker balancing on a trio of smooth stones against an orange gradient background',
    },
  ] as const

  return (
    <section className="w-full">
      <img
        src={productImgs[selectedImg].src}
        alt={productImgs[selectedImg].alt}
        className="aspect-square w-full rounded-2xl"
      />

      <div className="mt-8 flex w-full flex-row items-center justify-between gap-8">
        {productImgs.map(({ thumbSrc, alt }, i) => (
          <button
            onClick={() => setSelectedImg(i)}
            className={cn('rounded-[10px] border-2 border-transparent', {
              'border-sunshine-fg': i === selectedImg,
            })}
            key={i}
          >
            <img
              role="thumbnail"
              src={thumbSrc}
              alt={alt}
              className={cn(
                'aspect-square min-w-0 flex-1 rounded-[10px]',
                {
                  'rounded-[8px] opacity-50': i === selectedImg,
                },
                'hover:opacity-50'
              )}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
