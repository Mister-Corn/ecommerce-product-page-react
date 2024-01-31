import IconCart from '@/assets/components/IconCart'
import avatar from '@/assets/image-avatar.png'
import mobileMenuIcon from '@/assets/svgs/icon-menu.svg'
import logo from '@/assets/svgs/logo.svg'
import { useAppState } from '@/data/globalState'
import MobileCartDialog from './MobileCartDialog'

/**
 * Renders the mobile header component.
 *
 * This component displays the mobile header, including the menu icon, logo,
 * cart button, and user avatar. The cart button shows the quantity of items
 * in the cart.
 */
function MobileHeader() {
  const quantityInCart = useAppState(
    (state) => state.cartContents?.quantity ?? 0
  )

  return (
    <header className="sticky left-0 top-0 z-50 flex flex-row items-baseline justify-between bg-white px-6 pb-7 pt-5">
      <div className="flex flex-row items-baseline gap-4">
        {/* Mobile menu button */}
        <img
          src={mobileMenuIcon}
          alt="Menu"
          aria-label="Mobile Menu"
          className="h-4 w-4"
        />
        {/* Logo */}
        <img src={logo} alt="logo" aria-label="sneakers" />
      </div>

      <div className="flex flex-row items-baseline gap-5">
        {/* Cart button */}
        <MobileCartDialog>
          <button aria-label="Cart" className="relative">
            {quantityInCart > 0 && (
              <span
                className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-[6.5px] bg-sunshine-fg px-[7px] py-0 text-[10px] font-bold text-white"
                aria-label={`${quantityInCart} items in cart`}
              >
                {quantityInCart}
              </span>
            )}

            <IconCart fill="#69707D" />
          </button>
        </MobileCartDialog>

        {/* Avatar/Your Account */}
        <img src={avatar} alt="Your account" className="h-6 w-6" />
      </div>
    </header>
  )
}

export default MobileHeader
