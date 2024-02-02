import '@fontsource-variable/kumbh-sans'
import './App.css'
import IconCart from './assets/components/IconCart'
import MobileCartControls from './components/MobileCartControls'
import MobileCartDialog from './components/MobileCartDialog'
import MobileHeader from './components/MobileHeader'
import MobileProductCarousel from './components/MobileProductCarousel'
import { TopBar } from './components/TopBar'
import { useAppState } from './data/globalState'
import { useIsDesktop } from './hooks/useMediaQuery'

function App() {
  const isDesktop = useIsDesktop()

  const addFallSneakerToCart = useAppState(
    (state) => state.addFallSneakersToCart
  )

  return isDesktop ? (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        <TopBar />
      </div>
    </div>
  ) : (
    <>
      <MobileHeader />

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
            <button
              onClick={addFallSneakerToCart}
              className="flex w-full flex-row items-center justify-center gap-4 rounded-[10px] bg-sunshine-fg py-5 font-bold text-white shadow-xl shadow-sunshine-fg/20"
            >
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
