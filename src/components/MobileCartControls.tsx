import IconCart from '@/assets/components/IconCart'
import iconMinus from '@/assets/svgs/icon-minus.svg'
import iconPlus from '@/assets/svgs/icon-plus.svg'

function MobileCartControls() {
  return (
    <>
      <div className="mb-4 mt-6 flex w-full flex-row items-center justify-between rounded-[10px] bg-[#F6F8FD] py-5">
        <button
          aria-label="Decrement quantity"
          className="pl-6 text-sunshine-fg"
        >
          <img src={iconMinus} alt="-" />
        </button>
        <span
          className="font-bold"
          aria-label="Current quantity to add to cart"
        >
          0
        </span>
        <button
          aria-label="Increment quantity"
          className="pr-6 text-sunshine-fg"
        >
          <img src={iconPlus} alt="+" />
        </button>
      </div>

      <button className="flex w-full flex-row items-center justify-center gap-4 rounded-[10px] bg-sunshine-fg py-5 font-bold text-white shadow-xl shadow-sunshine-fg/20">
        <IconCart fill="white" />
        Add to cart
      </button>
    </>
  )
}

export default MobileCartControls
