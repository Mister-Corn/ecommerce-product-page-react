import trashIcon from '@/assets/svgs/icon-delete.svg'
import { productCatalog, type ProductId } from '@/data/productCatalog'
import { cn } from '@/utils'
import { convertToDecimalPriceUSD } from '@/utils/prices'
import { type ReactNode } from 'react'

export type CartDisplayProps = {
  cartContents?: { productId: ProductId; quantity: number }
  className?: string
  clearCart: () => void
}

/**
 * Renders a mobile cart display component.
 *
 * @param props - The component props.
 * @param props.cartContents - The contents of the cart, including
 * the product ID and quantity.
 * @param props.clearCart - The function that clears the contents of the cart.
 * @param props.className - The optional CSS class name for styling
 * purposes. Applied on the outer `div` element.
 * @returns The rendered mobile cart display component.
 */
function CartDisplay({ cartContents, clearCart, className }: CartDisplayProps) {
  const CartTemplate = ({ children }: { children: ReactNode }) => (
    <div className={cn('h-full w-full p-2', className)}>
      <div className="flex flex-col rounded-[10px] bg-white shadow-2xl">
        {/* Cart Header */}
        <div className="border-b-[1px] border-[#e4e9f2] px-6 pb-8 pt-6 leading-[1]">
          <h2 className="font-bold text-black-darker">Cart</h2>
        </div>

        {/* Cart Body */}
        {children}
      </div>
    </div>
  )

  if (!cartContents) {
    return (
      <CartTemplate>
        <div className="p-20 text-center">
          <p className="font-bold text-black-lighter">Your cart is empty.</p>
        </div>
      </CartTemplate>
    )
  }

  const currentProduct = productCatalog[cartContents.productId]
  const productPrice = convertToDecimalPriceUSD(currentProduct.price)
  const lineItemPrice = convertToDecimalPriceUSD(
    currentProduct.price * cartContents.quantity
  )

  return (
    <CartTemplate>
      <div className="flex flex-col content-between items-center gap-6 px-6 pb-8 pt-6">
        <div className="flex w-full flex-row justify-between gap-4">
          {/* Product Image, Description, and Price Summary */}
          <div className="flex flex-row gap-4">
            <img
              src={currentProduct.thumbnail}
              alt={currentProduct.thumbnailAlt}
              className="h-12 w-12 rounded"
            />

            <div>
              <p className="text-black-lighter">{currentProduct.name}</p>

              <div>
                <p className="mr-2 inline text-black-lighter">
                  {productPrice} x {cartContents.quantity}
                </p>
                <p className="inline font-bold">{lineItemPrice}</p>
              </div>
            </div>
          </div>

          {/* Remove from cart button */}
          <button aria-label="Remove item from cart" onClick={clearCart}>
            <img src={trashIcon} alt="" />
          </button>
        </div>

        {/* Checkout button */}
        <button className="w-full rounded-[10px] bg-sunshine-fg p-5 font-bold leading-[1] text-white">
          Checkout
        </button>
      </div>
    </CartTemplate>
  )
}

export default CartDisplay
