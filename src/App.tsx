import MobileProductCarousel from '@/components/MobileProductCarousel'
import '@fontsource-variable/kumbh-sans'
import './App.css'
import IconCart from './assets/components/IconCart'
import avatar from './assets/image-avatar.png'
import mobileMenuIcon from './assets/svgs/icon-menu.svg'
import logo from './assets/svgs/logo.svg'
import MobileCartControls from './components/MobileCartControls'
import { MobileCartDialog } from './components/MobileCartDisplay'

function App() {
  return (
    <>
      <header className="sticky left-0 top-0 z-50 flex flex-row items-baseline justify-between bg-white px-6 pb-7 pt-5">
        <div className="flex flex-row items-baseline gap-4">
          <img
            src={mobileMenuIcon}
            alt="Menu"
            aria-label="Mobile Menu"
            className="h-4 w-4"
          />
          <img src={logo} alt="logo" aria-label="sneakers" />
        </div>

        <div className="flex flex-row items-baseline gap-5">
          <MobileCartDialog>
            <button aria-label="Cart">
              <IconCart fill="#69707D" />
            </button>
          </MobileCartDialog>

          <img src={avatar} alt="Your account" className="h-6 w-6" />
        </div>
      </header>

      <main>
        <section id="product-display--mobile" className="relative">
          <MobileProductCarousel />
        </section>

        <section className="p-6">
          <p className="mb-5 text-xs font-bold tracking-[0.125em] text-sunshine-fg">
            SNEAKER COMPANY
          </p>

          <h1 className="mb-4 text-3xl font-bold text-black-darker">
            Fall Limited Edition Sneakers
          </h1>

          <p className="mb-6 text-black-lighter">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <span className="inline-block text-[28px] font-bold text-black-darker">
                $125.00
              </span>
              <div className="inline-block rounded-[6px] bg-sunshine-bg px-3 py-1">
                <span
                  aria-label="50% discount"
                  className="font-bold text-sunshine-fg"
                >
                  50%
                </span>
              </div>
            </div>

            <span
              aria-label="Original price"
              className="font-bold text-[#B6BCC8] line-through"
            >
              $250.00
            </span>
          </div>

          <MobileCartControls />

          <MobileCartDialog>
            <button className="flex w-full flex-row items-center justify-center gap-4 rounded-[10px] bg-sunshine-fg py-5 font-bold text-white shadow-xl shadow-sunshine-fg/20">
              <IconCart fill="white" />
              Add to cart
            </button>
          </MobileCartDialog>
        </section>
      </main>
    </>
  )
}

export default App
