import iconMinus from '@/assets/svgs/icon-minus.svg'
import iconPlus from '@/assets/svgs/icon-plus.svg'
import { useAppState } from '@/data/globalState'
import { cn } from '@/utils'

type CartControlsProps = {
  /**
   * Additional classes to be applied to the component. Applied to the div
   * enclosing the control UI elements.
   */
  className?: string
}

/**
 * CartControls displays a quantity selector with increment/decrement
 * buttons to control the quantity in the shopping cart.
 *
 * It uses the global app state to track quantity and dispatch
 * actions to adjust it.
 *
 */
function CartControls({ className }: CartControlsProps) {
  const quantity = useAppState((state) => state.orderControls.quantity)
  const adjustQuantity = useAppState((state) => state.adjustQuantity)

  return (
    <div
      className={cn(
        'flex flex-row items-center justify-between rounded-[10px] bg-[#F6F8FD] py-5',
        className
      )}
    >
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

export default CartControls
