import IconCart from '@/assets/components/IconCart'
import { useAppState } from '@/data/globalState'
import CartDialog from './CartDialog'

/**
 * Renders a cart icon with the quantity of items in the cart displayed as a badge.
 * @note Displays under the `#top-bar` element.
 *
 * @param className - The class name for the cart icon.
 * @returns The rendered cart icon with the quantity badge.
 */
function TopBarCart({ className }: { className?: string }) {
  const quantityInCart = useAppState(
    (state) => state.cartContents?.quantity ?? 0
  )

  return (
    <CartDialog>
      <button aria-label="Cart" className="relative">
        {quantityInCart > 0 && (
          <span
            className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-[6.5px] bg-sunshine-fg px-[7px] py-0 text-[10px] font-bold text-white"
            aria-label={`${quantityInCart} items in cart`}
          >
            {quantityInCart}
          </span>
        )}

        <IconCart fill="#69707D" className={className} />
      </button>
    </CartDialog>
  )
}

export default TopBarCart
