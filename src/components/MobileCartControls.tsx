import iconMinus from '@/assets/svgs/icon-minus.svg'
import iconPlus from '@/assets/svgs/icon-plus.svg'
import { useAppState } from '@/data/globalState'

function MobileCartControls() {
  const quantity = useAppState((state) => state.orderControls.quantity)
  const adjustQuantity = useAppState((state) => state.adjustQuantity)

  return (
    <div className="mb-4 mt-6 flex w-full flex-row items-center justify-between rounded-[10px] bg-[#F6F8FD] py-5">
      <button
        aria-label="Decrement quantity"
        onClick={() => adjustQuantity('decrement')}
        className="pl-6 text-sunshine-fg"
      >
        <img src={iconMinus} alt="-" />
      </button>
      <span className="font-bold" aria-label="Current quantity to add to cart">
        {quantity}
      </span>
      <button
        aria-label="Increment quantity"
        onClick={() => adjustQuantity('increment')}
        className="pr-6 text-sunshine-fg"
      >
        <img src={iconPlus} alt="+" />
      </button>
    </div>
  )
}

export default MobileCartControls
