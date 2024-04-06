import avatar from '@/assets/image-avatar.png'
import mobileMenuIcon from '@/assets/svgs/icon-menu.svg'
import logo from '@/assets/svgs/logo.svg'
import TopBarCart from './TopBarCart'

/**
 * Renders the mobile top bar component.
 *
 * This component displays the mobile top bar, including the menu icon, logo,
 * cart button, and user avatar. The cart button shows the quantity of items
 * in the cart.
 */
export function MobileTopBar() {
  return (
    <div
      id="top-bar" // ID needed for TopBarCart to correctly position cart icon
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
    </div>
  )
}

export function DesktopTopBar() {
  return (
    <div
      id="top-bar" // ID needed for TopBarCart to correctly position cart icon
      className="flex w-full flex-row justify-between border-b-[1px] border-b-[#E4E9F2] px-4"
    >
      {/* Left hand side of TopBar */}
      <nav className="flex items-center gap-14">
        {/* Logo */}
        <img src={logo} alt="logo" aria-label="sneakers" className="" />

        <ul className="flex h-full flex-row gap-8 text-black-lighter">
          {['Collections', 'Men', 'Women', 'About', 'Contact'].map((label) => (
            <li
              key={label}
              className="h-full border-b-4 border-sunshine-fg border-transparent pb-9 pt-10 hover:border-sunshine-fg"
            >
              <a href="/">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right hand side of TopBar */}
      <div className="flex items-center gap-12">
        <TopBarCart />

        {/* Avatar/Your Account */}
        <img
          src={avatar}
          alt="Your account"
          className="h-12 w-12 rounded-full border-2 border-transparent hover:cursor-pointer hover:border-sunshine-fg"
        />
      </div>
    </div>
  )
}
