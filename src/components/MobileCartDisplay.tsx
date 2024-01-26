import trashIcon from '@/assets/svgs/icon-delete.svg'
import { type ProductId, productCatalog } from '@/data/productCatalog'
import { convertToDecimalPriceUSD } from '@/utils/prices'
import { type ReactNode } from 'react'

export type MobileCartDisplayProps = {
  cartContents?: { productId: ProductId; quantity: number }
}

function MobileCartDisplay({ cartContents }: MobileCartDisplayProps) {
  const CartTemplate = ({ children }: { children: ReactNode }) => (
    <div className="absolute left-0 top-0 z-20 h-full w-full p-2">
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
        <div className="flex flex-grow items-center justify-center">
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
          <button aria-label="Remove item from cart">
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

export default MobileCartDisplay
