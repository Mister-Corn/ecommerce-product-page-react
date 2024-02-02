import avatar from '@/assets/image-avatar.png'
import mobileMenuIcon from '@/assets/svgs/icon-menu.svg'
import logo from '@/assets/svgs/logo.svg'
import TopBarCart from './TopBarCart'

/**
 * Renders the mobile header component.
 *
 * This component displays the mobile header, including the menu icon, logo,
 * cart button, and user avatar. The cart button shows the quantity of items
 * in the cart.
 */
function MobileHeader() {
  return (
    <header
      id="top-bar"
      className="sticky left-0 top-0 z-50 flex flex-row items-baseline justify-between bg-white px-6 pb-7 pt-5"
    >
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
        <TopBarCart />

        {/* Avatar/Your Account */}
        <img src={avatar} alt="Your account" className="h-6 w-6" />
      </div>
    </header>
  )
}

export default MobileHeader
