import '@fontsource-variable/kumbh-sans'
import './App.css'
import IconCart from './assets/components/IconCart'
import CartControls from './components/CartControls'
import MobileCartDialog from './components/MobileCartDialog'
import MobileProductCarousel from './components/MobileProductCarousel'
import { DesktopTopBar, MobileTopBar } from './components/TopBar'
import { useAppState } from './data/globalState'
import { useIsDesktop } from './hooks/useMediaQuery'
import { DesktopProductGallery } from './components/ProductGallery'

function App() {
  const isDesktop = useIsDesktop()

  const addFallSneakerToCart = useAppState(
    (state) => state.addFallSneakersToCart
  )

  return (
    <div className="w-full bg-white">
      <div className="w-full lg:container lg:mx-auto">
        {isDesktop ? <DesktopTopBar /> : <MobileTopBar />}

        <main className="flex flex-col lg:flex-row lg:justify-between lg:gap-32 lg:p-24">
          <section
            id="product-display--mobile"
            className="relative w-full lg:basis-1/2"
          >
            {isDesktop ? <DesktopProductGallery /> : <MobileProductCarousel />}
          </section>

          <section className="p-6 lg:basis-1/2">
            <p className="mb-5 text-xs font-bold tracking-[0.125em] text-sunshine-fg">
              SNEAKER COMPANY
            </p>

            <h1 className="mb-4 text-3xl font-bold text-black-darker lg:text-5xl">
              Fall Limited Edition Sneakers
            </h1>

            <p className="mb-6 text-black-lighter">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="flex flex-row items-center justify-between lg:flex-col lg:items-start lg:gap-2">
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

            <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:items-center">
              <CartControls className="w-full lg:col-span-5" />

              <MobileCartDialog>
                <button
                  onClick={addFallSneakerToCart}
                  className="flex w-full flex-row items-center justify-center gap-4 rounded-[10px] bg-sunshine-fg py-5 font-bold text-white shadow-xl shadow-sunshine-fg/20 lg:col-span-7 lg:shadow-none"
                >
                  <IconCart fill="white" />
                  Add to cart
                </button>
              </MobileCartDialog>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
