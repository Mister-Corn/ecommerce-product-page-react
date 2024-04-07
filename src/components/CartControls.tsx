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
        'flex h-full min-h-14 flex-row items-center justify-between rounded-[10px] bg-[#F6F8FD]',
        className
      )}
    >
      <button
        type="button"
        aria-label="Decrement quantity"
        onClick={() => adjustQuantity('decrement')}
        className="relative h-full flex-grow text-sunshine-fg"
      >
        <img
          src={iconMinus}
          alt="-"
          className="absolute left-6 top-1/2 -translate-y-1/2"
        />
      </button>
      <span
        className="w-min flex-shrink-0 font-bold"
        aria-label="Current quantity to add to cart"
      >
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increment quantity"
        onClick={() => adjustQuantity('increment')}
        className="relative h-full flex-grow pr-6 text-sunshine-fg"
      >
        <img
          src={iconPlus}
          alt="+"
          className="absolute right-6 top-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  )
}

export default CartControls
