import imgProduct1 from '@/assets/products/image-product-1.jpg'
import iconPrevious from '@/assets/svgs/icon-previous.svg'
import iconNext from '@/assets/svgs/icon-next.svg'

function MobileProductCarousel() {
  return (
    <section className="relative">
      <img
        src={imgProduct1}
        alt=""
        className="aspect-[4/3] w-full object-cover"
      />

      <button className="absolute left-4 top-1/2 rounded-full bg-white p-3">
        <img src={iconPrevious} alt="Previous" className="h-3 w-3" />
      </button>

      <button className="absolute right-4 top-1/2 rounded-full bg-white p-3">
        <img src={iconNext} alt="Next" className="h-3 w-3" />
      </button>
    </section>
  )
}

export default MobileProductCarousel
