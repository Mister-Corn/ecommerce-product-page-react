import IconCart from '@/assets/components/IconCart'
import avatar from '@/assets/image-avatar.png'
import logo from '@/assets/svgs/logo.svg'
import { useAppState } from '@/data/globalState'
import MobileCartDialog from './MobileCartDialog'

export function TopBar() {
  const quantityInCart = useAppState(
    (state) => state.cartContents?.quantity ?? 0
  )

  return (
    <div
      id="top-bar"
      className="flex w-full flex-row justify-between border-b-[1px] border-b-[#E4E9F2] px-4 py-8"
    >
      {/* Left hand side of TopBar */}
      <nav className="flex items-center gap-14">
        {/* Logo */}
        <img src={logo} alt="logo" aria-label="sneakers" className="" />

        <ul className="flex flex-row gap-8 text-black-lighter">
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Right hand side of TopBar */}
      <div className="flex items-center gap-12">
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
        <img src={avatar} alt="Your account" className="h-12 w-12" />
      </div>
    </div>
  )
}
