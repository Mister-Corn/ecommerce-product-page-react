import iconMinus from '@/assets/svgs/icon-minus.svg'
import iconPlus from '@/assets/svgs/icon-plus.svg'

function MobileCartControls() {
  return (
    <div className="mb-4 mt-6 flex w-full flex-row items-center justify-between rounded-[10px] bg-[#F6F8FD] py-5">
      <button aria-label="Decrement quantity" className="pl-6 text-sunshine-fg">
        <img src={iconMinus} alt="-" />
      </button>
      <span className="font-bold" aria-label="Current quantity to add to cart">
        0
      </span>
      <button aria-label="Increment quantity" className="pr-6 text-sunshine-fg">
        <img src={iconPlus} alt="+" />
      </button>
    </div>
  )
}

export default MobileCartControls
