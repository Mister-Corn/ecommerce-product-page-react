import productImg1 from '@/assets/products/image-product-1.jpg'
import productImg2 from '@/assets/products/image-product-2.jpg'
import productImg3 from '@/assets/products/image-product-3.jpg'
import productImg4 from '@/assets/products/image-product-4.jpg'
import product1Thumb from '@/assets/products/image-product-1-thumbnail.jpg'
import product2Thumb from '@/assets/products/image-product-2-thumbnail.jpg'
import product3Thumb from '@/assets/products/image-product-3-thumbnail.jpg'
import product4Thumb from '@/assets/products/image-product-4-thumbnail.jpg'

/**
 * Renders a desktop product gallery component with a large main image and thumbnail previews.
 * - Renders the first image in the provided array of images as the main image.
 * - Renders thumbnails of each image below the main image.
 * - Images require a source, thumbnail source, and alt text.
 */
export function DesktopProductGallery() {
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
        src={productImgs[0].src}
        alt={productImgs[0].alt}
        className="aspect-square w-full rounded-2xl"
      />

      <div className="mt-8 flex w-full flex-row items-center justify-between gap-8">
        {productImgs.map(({ thumbSrc, alt }, i) => (
          <img
            src={thumbSrc}
            alt={alt}
            className="aspect-square min-w-0 flex-1 rounded-[10px]"
            key={i}
          />
        ))}
      </div>
    </section>
  )
}
