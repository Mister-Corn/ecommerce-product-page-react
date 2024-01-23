import imgProduct1 from '@/assets/products/image-product-1.jpg'
import imgProduct2 from '@/assets/products/image-product-2.jpg'
import imgProduct3 from '@/assets/products/image-product-3.jpg'
import imgProduct4 from '@/assets/products/image-product-4.jpg'
import iconNext from '@/assets/svgs/icon-next.svg'
import iconPrevious from '@/assets/svgs/icon-previous.svg'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

function MobileProductCarousel() {
  const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

  return (
    <section className="relative">
      <Swiper
        aria-label="Product images"
        spaceBetween={30}
        effect="slide"
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        loop
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={img}>
            <img
              src={img}
              alt={`Image ${i + 1}`}
              className="aspect-[4/3] w-full object-cover"
            />
          </SwiperSlide>
        ))}

        <CarouselNavButton direction="previous" />
        <CarouselNavButton direction="next" />
      </Swiper>
    </section>
  )
}

/**
 * @note This component needs to be nested inside the Swiper component in order
 * for the hook to access the swiper instance.
 */
function CarouselNavButton({ direction }: { direction: 'previous' | 'next' }) {
  const swiper = useSwiper()

  return (
    <button
      onClick={() =>
        direction === 'previous' ? swiper.slidePrev() : swiper.slideNext()
      }
      aria-label={`Go to ${direction} image`}
      className={`absolute ${direction === 'previous' ? 'left-4' : 'right-4'} top-1/2 z-10 rounded-full bg-white p-3`}
    >
      <img
        src={direction === 'previous' ? iconPrevious : iconNext}
        alt={direction}
        className="h-3 w-3"
      />
    </button>
  )
}

export default MobileProductCarousel
